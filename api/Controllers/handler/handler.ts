import  sessionManager  from "../session/session";
import {  Result,Ok } from "../../fetcher/fetchJson";


class ResourceHandler {
    static resourcePredicate(x: unknown)  {
        if (x instanceof Error) {
            return false
        };
        if (typeof x !== "object" || x === null) return false;
        if (typeof x === "object" && 'results' in x) {
            return true; 
        };
        if (typeof x === "object" && 'uuid' in x) {
            return true;
        };
        return false;
    };
    static async getResource<T>(endpoint: string, isResource: (x: unknown) => x is Ok<T>){
        const method = 'GET' as const;
        const getFunction = await sessionManager.requestFunctionGenerator(method);
        return await getFunction(endpoint, isResource) as Result<T, Error>;
    };

    static async postResource<T>(endpoint: string, isResource: (x: unknown) => x is Ok<T>, body: string){
        const method = 'POST' as const;
        const postFunction = await sessionManager.requestFunctionGenerator(method);
        return await postFunction(endpoint, isResource, body) as Result<T, Error>;
    };

    static async deleteResource<T>(endpoint: string, isResource: (x: unknown) => x is Ok<T>){
        const method = 'DELETE' as const;
        const deleteFunction = await sessionManager.requestFunctionGenerator(method);
        return await deleteFunction(endpoint, isResource) as Result<T, Error>;
    };
}

export default ResourceHandler;