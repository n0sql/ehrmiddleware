import  ResourceHandler  from "../handler/handler";
import sessionManager from "../session/session";


export type User = {
    [key: string]: any;
}



class UserHandler {
    static userPredicate(x: unknown): x is User {
        return ResourceHandler.resourcePredicate(x);
    };
    static async createUser(user: Partial<User>){
        const body = JSON.stringify(user);
        return await ResourceHandler.postResource("/ws/rest/v1/user", UserHandler.userPredicate, body);
    };
    static async getUser(uuid: string){
        return await ResourceHandler.getResource(`/ws/rest/v1/user/${uuid}?v=full`, UserHandler.userPredicate);
    };
    static async getUserByUsername(username: string){
        return await ResourceHandler.getResource(`/ws/rest/v1/user?q=${username}&v=full`, UserHandler.userPredicate);
    };

    static async updateUser(uuid: string, user: Partial<User>){
        const body = JSON.stringify(user);
        return await ResourceHandler.postResource(`/ws/rest/v1/user/${uuid}`, UserHandler.userPredicate, body);
    };

    static async deleteUser(uuid: string){
        return await ResourceHandler.deleteResource(`/ws/rest/v1/user/${uuid}`, UserHandler.userPredicate);
    };
};

export default UserHandler;

