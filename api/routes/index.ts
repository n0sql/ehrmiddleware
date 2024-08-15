import express from "express";
import _genericRestMethod from "../utils/requester";
import { User, Location, Person, LocationAttribute, LocationTag,
        Role, Privilege, PersonAttributeType } from "../types/types";

function betterRoutingController(app: express.Application) {
    const router = express.Router();
    app.use("/ws/rest/v1", router);
    router.use("/location", async (req, res) => {
        return await _genericRestMethod<Location>(req, res);
    });
    router.use("/locationattributetype", async (req, res) => {
        return await _genericRestMethod<LocationAttribute>(req, res);
    });
    router.use("/person", async (req, res) => {
        return await _genericRestMethod<Person>(req, res);
    });
    router.use("/personattributetype", async (req, res) => {
        return await _genericRestMethod<PersonAttributeType>(req, res);
    });
    router.use("/user", async (req, res) => {
        return await _genericRestMethod<User>(req, res);
    });
    router.use("/role", async (req, res) => {
        return await _genericRestMethod<Role>(req, res);
    });
    router.use("/privilege", async (req, res) => {
        return await _genericRestMethod<Privilege>(req, res);
    });
    router.use("/locationtag", async (req, res) => {
        return await _genericRestMethod<LocationTag>(req, res);
    });
}

export default betterRoutingController;