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
    static async createLocation(location: Location){
        const body = JSON.stringify(location);
        return await ResourceHandler.postResource("/ws/rest/v1/location", LocationHandler.locationPredicate, body);
    };
    static async getLocation(uuid: string){
        return await ResourceHandler.getResource(`/ws/rest/v1/location/${uuid}?v=full`, LocationHandler.locationPredicate);
    };
    static async searchLocation(query: string){
        return await ResourceHandler.getResource(`/ws/rest/v1/location?v=full&q=${query}`, LocationHandler.locationPredicate);
    }
    static getAllLocations(){
        return ResourceHandler.getResource(`/ws/rest/v1/location?v=full`, LocationHandler.locationPredicate);
    };
    static async updateLocation(uuid: string, location: Partial<Location>){
        const body = JSON.stringify(location);
        return await ResourceHandler.postResource(`/ws/rest/v1/location/${uuid}`, LocationHandler.locationPredicate, body);
    };
    static async deleteLocation(uuid: string){
        return await ResourceHandler.deleteResource(`/ws/rest/v1/location/${uuid}?purge=true`, LocationHandler.locationPredicate);
    };
    static async createLocationAttribute(locationAttribute: Partial<LocationAttribute>){
        const body = JSON.stringify(locationAttribute);
        return await ResourceHandler.postResource("/ws/rest/v1/locationattributetype", LocationHandler.locationAttributePredicate, body);
    };
    static async getLocationAttribute(uuid: string){
        return await ResourceHandler.getResource(`/ws/rest/v1/locationattributetype/${uuid}?v=full`, LocationHandler.locationAttributePredicate);
    };
    static getAllLocationAttributes(){
        return ResourceHandler.getResource(`/ws/rest/v1/locationattributetype?v=full`, LocationHandler.locationAttributePredicate);
    };
    static async updateLocationAttribute(uuid: string, locationAttribute: Partial<LocationAttribute>){
        const body = JSON.stringify(locationAttribute);
        return await ResourceHandler.postResource(`/ws/rest/v1/locationattributetype/${uuid}`, LocationHandler.locationAttributePredicate, body);
    };
    static async deleteLocationAttribute(uuid: string){
        return await ResourceHandler.deleteResource(`/ws/rest/v1/locationattributetype/${uuid}?purge=true`, LocationHandler.locationAttributePredicate);
    };
    static async searchLocationAttribute(query: string){
        return await ResourceHandler.getResource(`/ws/rest/v1/locationattributetype?v=full&q=${query}`, LocationHandler.locationAttributePredicate);
    };
    static async createLocationTag(locationTag: Partial<LocationTag>){
        const body = JSON.stringify(locationTag);
        return await ResourceHandler.postResource("/ws/rest/v1/locationtag", LocationHandler.locationTagPredicate, body);
    };
    static async getLocationTag(uuid: string){
        return await ResourceHandler.getResource(`/ws/rest/v1/locationtag/${uuid}?v=full`, LocationHandler.locationTagPredicate);
    };
    static async getAllLocationTags(){
        return await ResourceHandler.getResource("/ws/rest/v1/locationtag}?v=full", LocationHandler.locationTagPredicate);
    }
    static async updateLocationTag(uuid: string, locationTag: Partial<LocationTag>){
        const body = JSON.stringify(locationTag);
        return await ResourceHandler.postResource(`/ws/rest/v1/locationtag/${uuid}`, LocationHandler.locationTagPredicate, body);
    };
    static async searchLocationTag(query: string){
        return await ResourceHandler.getResource(`/ws/rest/v1/locationtag?v=full&q=${query}`, LocationHandler.locationTagPredicate);
    }
    static async deleteLocationTag(uuid: string){
        return await ResourceHandler.deleteResource(`/ws/rest/v1/locationtag/${uuid}?purge=true`, LocationHandler.locationTagPredicate);
    };
    
};

export default LocationHandler;