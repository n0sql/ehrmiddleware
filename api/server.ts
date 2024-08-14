import dotenv from "dotenv";
import LocationHandler  from "./Controllers/location/locations";
import sessionManager from "./Controllers/session/session";

dotenv.config();


LocationHandler.getLocation("ebeea857-43e9-4435-b6d5-12782a0b4c19").then((location) => {
    console.log(location);
}).catch((error) => {
    console.log(error);
});

sessionManager.endSession().then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});