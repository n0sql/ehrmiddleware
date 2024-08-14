import express from "express";
import LocationHandler from "../Controllers/location/locations";
import UserHandler from "../Controllers/user_person/user";
import RoleHandler from "../Controllers/roles_privileges/roles";
import { Location, LocationAttribute, Privilege, Role } from "../types/types";


function routingController(app: express.Application) {
    const router = express.Router();
    app.use("/", router);

    router.get("/location/:uuid", async (req, res) => {
        const uuid = req.params.uuid;
        const location = await LocationHandler.getLocation(uuid);
        res.send(location);
    });
    router.post("/location", async (req, res) => {
        const location:Location = req.body;
        const newLocation = await LocationHandler.createLocation(location);
        res.send(newLocation);
    });
    router.post("/location/:uuid", async (req, res) => {
        const uuid = req.params.uuid;
        const location:Location = req.body;
        const updatedLocation = await LocationHandler.updateLocation(uuid, location);
        res.send(updatedLocation);
    });
    router.get("/location/search/:query", async (req, res) => {
        const query = req.params.query;
        const location = await LocationHandler.searchLocation(query);
        res.send(location);
    });
    router.get("/locations", async (req, res) => {
        const locations = await LocationHandler.getAllLocations();
        res.send(locations);
    });
    router.delete("/location/:uuid", async (req, res) => {
        const uuid = req.params.uuid;
        const location = await LocationHandler.deleteLocation(uuid);
        res.send(location);
    });
    router.get("/location_attribute/:uuid", async (req, res) => {
        const uuid = req.params.uuid;
        const locationAttribute = await LocationHandler.getLocationAttribute(uuid);
        res.send(locationAttribute);
    });
    
    router.get("/location_attributes", async (req, res) => {
        const locationAttributes = await LocationHandler.getAllLocationAttributes();
        res.send(locationAttributes);
    });

    router.post("/location_attribute", async (req, res) => {
        const locationAttribute:LocationAttribute = req.body;
        const newLocationAttribute = await LocationHandler.createLocationAttribute(locationAttribute);
        res.send(newLocationAttribute);
    });
    router.get("/location_tag/:uuid", async (req, res) => {
        const uuid = req.params.uuid;
        const locationTag = await LocationHandler.getLocationTag(uuid);
        res.send(locationTag);
    });
    router.post("/location_tag", async (req, res) => {
        const locationTag:LocationAttribute = req.body;
        const newLocationTag = await LocationHandler.createLocationTag(locationTag);
        res.send(newLocationTag);
    });
    router.post("/location_attribute/:uuid", async (req, res) => {
        const uuid = req.params.uuid;
        const locationAttribute:LocationAttribute = req.body;
        const updatedLocationAttribute = await LocationHandler.updateLocationAttribute(uuid, locationAttribute);
        res.send(updatedLocationAttribute);
    });
    router.post("/location_tag/:uuid", async (req, res) => {
        const uuid = req.params.uuid;
        const locationTag:LocationAttribute = req.body;
        const updatedLocationTag = await LocationHandler.updateLocationTag(uuid, locationTag);
        res.send(updatedLocationTag);
    });
    router.get("/location_tags", async (req, res) => {
        const locationTags = await LocationHandler.getAllLocationAttributes();
        res.send(locationTags);
    });
    router.get("/location_attribute/search/:query", async (req, res) => {
        const query = req.params.query;
        const locationAttribute = await LocationHandler.searchLocationAttribute(query);
        res.send(locationAttribute);
    });
    router.get("/location_tag/search/:query", async (req, res) => {

        const query = req.params.query;
        const locationTag = await LocationHandler.searchLocationTag(query);
        res.send(locationTag);
    });
    router.delete("/location_attribute/:uuid", async (req, res) => {
        const uuid = req.params.uuid;
        const locationAttribute = await LocationHandler.deleteLocationAttribute(uuid);
        res.send(locationAttribute);
    });
    router.delete("/location_tag/:uuid", async (req, res) => {
        const uuid = req.params.uuid;
        const locationTag = await LocationHandler.deleteLocationTag(uuid);
        res.send(locationTag);
    });
    router.get("/person/:uuid", async (req, res) => {
        const uuid = req.params.uuid;
        const person = await UserHandler.getPerson(uuid);
        res.send(person);
    });

    router.get("/persons", async (req, res) => {
        const persons = await UserHandler.getAllPersons();
        res.send(persons);
    });

    router.get("/person_attribute/:uuid", async (req, res) => {
        const uuid = req.params.uuid;
        const personAttribute = await UserHandler.getAttribute(uuid);
        res.send(personAttribute);
    });

    router.post("/person", async (req, res) => {
        const person = req.body;
        const newPerson = await UserHandler.createPerson(person);
        res.send(newPerson);
    });

    router.post("/person_attribute", async (req, res) => {
        const personAttribute = req.body;
        const newPersonAttribute = await UserHandler.createPersonAttributeType(personAttribute);
        res.send(newPersonAttribute);
    });

    router.get("/person_attributes", async (req, res) => {
        const personAttributes = await UserHandler.getAllPersonAttributeTypes();
        res.send(personAttributes);
    });

    router.get("/user/:uuid", async (req, res) => {
        const uuid = req.params.uuid;
        const user = await UserHandler.getUser(uuid);
        res.send(user);
    });

    router.get("/users", async (req, res) => {
        const users = await UserHandler.getAllUsers();
        res.send(users);
    });
    router.post("/user", async (req, res) => {
        const user = req.body;
        const newUser = await UserHandler.createUser(user);
        res.send(newUser);
    });
    router.get("/role/:uuid", async (req, res) => {
        const uuid = req.params.uuid;
        const role = await RoleHandler.getRole(uuid);
        res.send(role);
    });

    router.get("/roles", async (req, res) => {
        const roles = await RoleHandler.getAllRoles();
        res.send(roles);
    });
    router.get("/privilege/:uuid", async (req, res) => {
        const uuid = req.params.uuid;
        const privilege = await RoleHandler.getPrivilege(uuid);
        res.send(privilege);
    });
    router.get("/privileges", async (req, res) => {
        const privileges = await RoleHandler.getAllPrivileges();
        res.send(privileges);
    });

    router.post("/role", async (req, res) => {
        const role:Role = req.body;
        const newRole = await RoleHandler.createRole(role);
        res.send(newRole);
    });

    router.post("/privilege", async (req, res) => {
        const privilege:Privilege = req.body;
        const newPrivilege = await RoleHandler.createPrivilege(privilege);
        res.send(newPrivilege);
    });
    router.delete("/role/:uuid", async (req, res) => {
        const uuid = req.params.uuid;
        const role = await RoleHandler.deleteRole(uuid);
        res.send(role);
    });
    router.delete("/privilege/:uuid", async (req, res) => {
        const uuid = req.params.uuid;
        const privilege = await RoleHandler.deletePrivilege(uuid);
        res.send(privilege);
    });
    router.post("/role/:uuid", async (req, res) => {
        const uuid = req.params.uuid;
        const role:Role = req.body;
        const updatedRole = await RoleHandler.updateRole(uuid, role);
        res.send(updatedRole);
    });
};

export default routingController;