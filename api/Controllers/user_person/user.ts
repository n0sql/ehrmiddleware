import  ResourceHandler  from "../handler/handler";
import { User, Person, PersonAttributeType } from "../../types/types";

class PersonHandler {
    static personPredicate(x: unknown): x is Person {
        return ResourceHandler.resourcePredicate(x);
    };
    static personAttributeTypePredicate(x: unknown): x is PersonAttributeType {
        return ResourceHandler.resourcePredicate(x);
    };
    static async createPerson(person: Partial<Person>){
        const body = JSON.stringify(person);
        return await ResourceHandler.postResource("/ws/rest/v1/person", PersonHandler.personPredicate, body);
    };
    static async getPerson(uuid: string){
        return await ResourceHandler.getResource(`/ws/rest/v1/person/${uuid}?v=full`, PersonHandler.personPredicate);
    };

    static async getAllPersons(){
        return await ResourceHandler.getResource('/ws/rest/v1/person?v=full', PersonHandler.personPredicate);
    };

    static async updatePerson(uuid: string, person: Partial<Person>){
        const body = JSON.stringify(person);
        return await ResourceHandler.postResource(`/ws/rest/v1/person/${uuid}`, PersonHandler.personPredicate, body);
    };
    static async searchPerson(query: string){
        return await ResourceHandler.getResource(`/ws/rest/v1/person?v=full&q=${query}`, PersonHandler.personPredicate);
    };
    static async deletePerson(uuid: string){
        return await ResourceHandler.deleteResource(`/ws/rest/v1/person/${uuid}`, PersonHandler.personPredicate);
    };

    static async createPersonAttributeType(personAttribute: Partial<PersonAttributeType>){
        const body = JSON.stringify(personAttribute);
        return await ResourceHandler.postResource("/ws/rest/v1/personattributetype", PersonHandler.personAttributeTypePredicate, body);
    };

    static async getAllPersonAttributeTypes(){
        return await ResourceHandler.getResource(`/ws/rest/v1/personattributetype?v=full`, PersonHandler.personAttributeTypePredicate);
    };
    static async getAttribute(uuid:string){
        return await ResourceHandler.getResource(`/ws/rest/v1/personattributetype/${uuid}?v=full`, PersonHandler.personAttributeTypePredicate);
    };
    static updatePersonAttribute(uuid:string, personAttribute: Partial<PersonAttributeType>){
        const body = JSON.stringify(personAttribute);
        return ResourceHandler.postResource(`/ws/rest/v1/personattributetype/${uuid}`, PersonHandler.personAttributeTypePredicate, body);
    };
    static async searchPersonAttribute(query: string){
        return ResourceHandler.getResource(`ws/rest/v1/personattributetype?v=full&q=${query}`, PersonHandler.personAttributeTypePredicate);
    };

};


class UserHandler extends PersonHandler{
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
    static async getAllUsers(){
        return await ResourceHandler.getResource(`/ws/rest/v1/user?v=full`, UserHandler.userPredicate);
    }
    static async searchUser(username: string){
        return await ResourceHandler.getResource(`/ws/rest/v1/user?v=full&q=${username}`, UserHandler.userPredicate);
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

