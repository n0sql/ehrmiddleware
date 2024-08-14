import {  Location, LocationAttribute, LocationTag } from "../../types/types";
import  ResourceHandler  from "../handler/handler";


class LocationHandler  {
    static locationPredicate(x:unknown): x is Location {
        return ResourceHandler.resourcePredicate(x);
    };
    static locationTagPredicate(x: unknown): x is LocationTag {
        return ResourceHandler.resourcePredicate(x);
    };
    static locationAttributePredicate(x: unknown): x is LocationAttribute {
        return ResourceHandler.resourcePredicate(x);
    };
    static async createLocation(location: Partial<Location>){
        const body = JSON.stringify(location);
        return await ResourceHandler.postResource("/ws/rest/v1/location", LocationHandler.locationPredicate, body);
    };
    static async getLocation(uuid: string){
        return await ResourceHandler.getResource(`/ws/rest/v1/location/${uuid}?v=full`, LocationHandler.locationPredicate);
    };
    static async updateLocation(uuid: string, location: Partial<Location>){
        const body = JSON.stringify(location);
        return await ResourceHandler.postResource(`/ws/rest/v1/location/${uuid}`, LocationHandler.locationPredicate, body);
    };
    static async createLocationTag(locationTag: Partial<LocationTag>){
        const body = JSON.stringify(locationTag);
        return await ResourceHandler.postResource("/ws/rest/v1/locationtag", LocationHandler.locationTagPredicate, body);
    };
    static async createLocationAttribute(locationAttribute: Partial<LocationAttribute>){
        const body = JSON.stringify(locationAttribute);
        return await ResourceHandler.postResource("/ws/rest/v1/locationattributetype", LocationHandler.locationAttributePredicate, body);
    };
    static async deleteLocation(uuid: string){
        return await ResourceHandler.deleteResource(`/ws/rest/v1/location/${uuid}?purge=true`, LocationHandler.locationPredicate);
    };
    static async deleteLocationTag(uuid: string){
        return await ResourceHandler.deleteResource(`/ws/rest/v1/locationtag/${uuid}?purge=true`, LocationHandler.locationTagPredicate);
    };
    static async deleteLocationAttribute(uuid: string){
        return await ResourceHandler.deleteResource(`/ws/rest/v1/locationattributetype/${uuid}?purge=true`, LocationHandler.locationAttributePredicate);
    };
};

export default LocationHandler;