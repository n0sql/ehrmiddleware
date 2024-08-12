import dotenv from "dotenv";
import {  LocationHandler } from "./Controllers/location/locations";

dotenv.config();

const locationManager = new LocationHandler();

locationManager.getLocation("ebeea857-43e9-4435-b6d5-12782a0b4c19").then((location) => {
    console.log(location);
}).catch((error) => {
    console.log(error);
});