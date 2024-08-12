import {  Location, LocationAttribute, LocationTag } from "../../types/types";
import { ResourceHandler } from "../handler/handler";



class LocationHandler extends ResourceHandler {
    constructor(){
        super("superman", "Admin123", "https://ehrsystems.io/openmrs");
    }

    locationPredicate(x:unknown): x is Location {
        return ResourceHandler.resourcePredicate(x);
    };
    locationTagPredicate(x: unknown): x is LocationTag {
        return ResourceHandler.resourcePredicate(x);
    };
    locationAttributePredicate(x: unknown): x is LocationAttribute {
        return ResourceHandler.resourcePredicate(x);
    };
    async createLocation(location: Partial<Location>){
        const body = JSON.stringify(location);
        return await this.postResource("/ws/rest/v1/location", this.locationPredicate, body);
    };
    async getLocation(uuid: string){
        return await this.getResource(`/ws/rest/v1/location/${uuid}?v=full`, this.locationPredicate);
    };
    async updateLocation(uuid: string, location: Partial<Location>){
        const body = JSON.stringify(location);
        return await this.postResource(`/ws/rest/v1/location/${uuid}`, this.locationPredicate, body);
    };
    async createLocationTag(locationTag: Partial<LocationTag>){
        const body = JSON.stringify(locationTag);
        return await this.postResource("/ws/rest/v1/locationtag", this.locationTagPredicate, body);
    };
    async createLocationAttribute(locationAttribute: Partial<LocationAttribute>){
        const body = JSON.stringify(locationAttribute);
        return await this.postResource("/ws/rest/v1/locationattributetype", this.locationAttributePredicate, body);
    };
    async deleteLocation(uuid: string){
        return await this.deleteResource(`/ws/rest/v1/location/${uuid}?purge=true`, this.locationPredicate);
    };
    async deleteLocationTag(uuid: string){
        return await this.deleteResource(`/ws/rest/v1/locationtag/${uuid}?purge=true`, this.locationTagPredicate);
    };
    async deleteLocationAttribute(uuid: string){
        return await this.deleteResource(`/ws/rest/v1/locationattributetype/${uuid}?purge=true`, this.locationAttributePredicate);
    };
};

export { LocationHandler }