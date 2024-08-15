import dotenv from "dotenv";
import { encode } from "js-base64";
import { fetchJson, isOkResponse,Ok } from "../../fetcher/fetchJson";
import resourcePredicate from "../../utils/typeguards";
import { Request } from "express";
import predicate from "../../utils/predicates";
dotenv.config();

class SessionManager {
    #username:string = process.env.ADMIN_USERNAME as string;
    #password:string = process.env.ADMIN_PASSWORD as string;
    #token:string = "";
    #host:string = "";
    #headers: Headers = new Headers();
    #session_endpoint:string = "/ws/rest/v1/session"
    expired: boolean = false;
    duration: number = 7200;
    created_at: Date = new Date();
    constructor(username: string = process.env.ADMIN_USERNAME as string, password: string = process.env.ADMIN_PASSWORD as string, url: string){
        this.#username = username;
        this.#password = password;
        this.#host = url;
        this.#headers.set("Content-Type", "application/json");
    }

    checkSession() {
        const now = new Date();
        const diff = Math.abs(now.getTime() - this.created_at.getTime());
        const diffSeconds = Math.ceil(diff / 1000);
        if (diffSeconds > this.duration) {
            this.expired = true;
        }
        return this.expired;
    }

    async createSession() {
        this.#headers.set("Authorization", `Basic ${encode(`${this.#username}:${this.#password}`)}`);
        const response:Response = await fetch(`${this.#host}${this.#session_endpoint}`,  {
            method: "GET",
            headers: this.#headers,
            redirect: "follow" as RequestRedirect,
        });

        if (!isOkResponse(response)) {
            return new Error(`Failed to create session: ${response.status}`);
        }
        
        this.#token = response.headers.getSetCookie()[0].split(';')[0] ?? "";
        this.created_at = response.headers.get("Date") ? new Date(response.headers.get("Date") as string) : new Date();

        if (this.#token === "") {
            return new Error("Failed to create session: no token");
        } else {
            this.#headers.set("Cookie", this.#token);
        }
        const session = await response.json();
        if (session.authenticated === true) {
            delete session.user.privileges
            delete session.user.roles
            delete session.user.links
            return session;
        }
        return new Error("Failed to create session: not authenticated"); 
    };

    async runRequest<T>( req:Request ) {
        if (this.checkSession()) {
            await this.createSession();
        }
        const method = req.method as RequestMethods;
        const endpoint = req.originalUrl;
        const request: RequestInit = {
            method: method,
            headers: this.#headers,
            redirect: "follow" as RequestRedirect,
        };
        if (req.method === "POST" || req.method === "PUT") {
            const data:Partial<T> = req.body as T;
            
           if(!resourcePredicate(data)){
                return new Error("Invalid data");
           }
              request.body = JSON.stringify(data); 
           
        }
        const result = await fetchJson(`${this.#host}${endpoint}`, predicate, request);
        return result;
    }

    async endSession(){
        const method = "DELETE" as const;
        const response = await fetch(`${this.#host}${this.#session_endpoint}`, {
            method: method,
            headers: this.#headers,
            redirect: "follow" as RequestRedirect,
        });
        if (!isOkResponse(response)) {
            return new Error(`Failed to end session: ${response.status}`);
        };
        console.log("Session ended");
        this.expired = true;
        return response;
    }
}

export type RequestMethods = "GET" | "POST" | "PUT" | "DELETE";

const sessionManager = new SessionManager(process.env.ADMIN_USERNAME as string,
    process.env.ADMIN_PASSWORD as string, process.env.OPENMRS_HOST as string
);
sessionManager.createSession();

export default sessionManager
