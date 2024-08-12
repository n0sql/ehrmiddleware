import { SessionManager } from "../session/session";
import {  Result,Ok } from "../../fetcher/fetchJson";


class ResourceHandler extends SessionManager {
    constructor(username: string, password: string, host: string){
        super(username, password, host);
        this.createSession();
    };
    static resourcePredicate(x: unknown)  {
        if (x instanceof Error) {
            return false
        };
        if (typeof x !== "object" || x === null) return false;
        if (typeof x === "object" && 'results' in x) {
            return true; 
        }
        if (typeof x === "object" && 'uuid' in x) {
            return true;
        }
        return false;
    }
    async getResource<T>(endpoint: string, isResource: (x: unknown) => x is Ok<T>){
        const method = 'GET' as const;
        const getFunction = await this.requestFunctionGenerator(method);
        return await getFunction(endpoint, isResource) as Result<T, Error>;
    };

    async postResource<T>(endpoint: string, isResource: (x: unknown) => x is Ok<T>, body: string){
        const method = 'POST' as const;
        const postFunction = await this.requestFunctionGenerator(method);
        return await postFunction(endpoint, isResource, body) as Result<T, Error>;
    };

    async deleteResource<T>(endpoint: string, isResource: (x: unknown) => x is Ok<T>){
        const method = 'DELETE' as const;
        const deleteFunction = await this.requestFunctionGenerator(method);
        return await deleteFunction(endpoint, isResource) as Result<T, Error>;
    };
}


export { ResourceHandler }