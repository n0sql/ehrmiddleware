import { ResourceHandler } from "../handler/handler";


export type User = {
    [key: string]: any;
}



class UserHandler extends ResourceHandler {
    constructor(){
        super( "superman", "Admin123", "https://ehrsystems.io/openmrs");
    }
    userPredicate(x: unknown): x is User {
        return ResourceHandler.resourcePredicate(x);
    };
    async createUser(user: Partial<User>){
        const body = JSON.stringify(user);
        return await this.postResource("/ws/rest/v1/user", this.userPredicate, body);
    };
    async getUser(uuid: string){
        return await this.getResource(`/ws/rest/v1/user/${uuid}?v=full`, this.userPredicate);
    };
    async getUserByUsername(username: string){
        return await this.getResource(`/ws/rest/v1/user?q=${username}&v=full`, this.userPredicate);
    };

    async updateUser(uuid: string, user: Partial<User>){
        const body = JSON.stringify(user);
        return await this.postResource(`/ws/rest/v1/user/${uuid}`, this.userPredicate, body);
    };

    async deleteUser(uuid: string){
        return await this.deleteResource(`/ws/rest/v1/user/${uuid}`, this.userPredicate);
    };
};

export { UserHandler }

