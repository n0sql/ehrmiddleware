import { Role, Privilege } from "../../types/types";
import ResourceHandler from "../handler/handler";

class PrivilegeHandler {
static PrivilegePredicate(x:unknown): x is Privilege{
    return ResourceHandler.resourcePredicate(x);
};

static async createPrivilege(privilege: Partial<Privilege>){
    const body = JSON.stringify(privilege);
    return await ResourceHandler.postResource("/ws/rest/v1/privilege", PrivilegeHandler.PrivilegePredicate, body);
};

static async getPrivilege(uuid: string){
    return await ResourceHandler.getResource(`/ws/rest/v1/privilege/${uuid}?v=full`, PrivilegeHandler.PrivilegePredicate);
};
static async updatePrivilege(uuid: string, privilege: Partial<Privilege>){
    const body = JSON.stringify(privilege);
    return await ResourceHandler.postResource(`/ws/rest/v1/privilege/${uuid}`, PrivilegeHandler.PrivilegePredicate, body);
}
static async getAllPrivileges(){
    return await ResourceHandler.getResource(`/ws/rest/v1/privilege?v=full`, PrivilegeHandler.PrivilegePredicate);
};

static async searchPrivilege(query: string){
    return await ResourceHandler.getResource(`/ws/rest/v1/privilege?v=full&q=${query}`, PrivilegeHandler.PrivilegePredicate);

};

static async deletePrivilege(uuid: string){
    return await ResourceHandler.deleteResource(`/ws/rest/v1/privilege/${uuid}`, PrivilegeHandler.PrivilegePredicate);
};

};


class RoleHandler extends PrivilegeHandler {

static RolePredicate(x:unknown): x is Role{
    return ResourceHandler.resourcePredicate(x);
};

static async createRole(role: Partial<Role>){
    const body = JSON.stringify(role);
    return await ResourceHandler.postResource("/ws/rest/v1/role", RoleHandler.RolePredicate, body);
};

static async getRole(uuid: string){
    return await ResourceHandler.getResource(`/ws/rest/v1/role/${uuid}?v=full`, RoleHandler.RolePredicate);
};
static async updateRole (uuid: string, role: Partial<Role>){
    const body = JSON.stringify(role);
    return await ResourceHandler.postResource(`/ws/rest/v1/role/${uuid}`, RoleHandler.RolePredicate, body);
};
static async getAllRoles(){
    return await ResourceHandler.getResource(`/ws/rest/v1/role?v=full`, RoleHandler.RolePredicate);
};
static async searchRole(query: string){
    return await ResourceHandler.getResource(`/ws/rest/v1/role?v=full&q=${query}`, RoleHandler.RolePredicate);
};
static async deleteRole(uuid: string){
    return await ResourceHandler.deleteResource(`/ws/rest/v1/role/${uuid}`, RoleHandler.RolePredicate);
};
}

export default RoleHandler;