import { Address } from "cluster";

export interface Link {
    rel: string,
    uri: string,
    resourceAlias?: string,
}

export interface Resource {
    uuid: string,
    display: string,
    links: Link[],
    resourceVersion?: string,
}
export interface AuditInfo {
    creator: Resource | null,
    dateCreated: string | null,
    changedBy: Resource | null,
    dateChanged: string | null,
}
export interface LocationTag extends Resource {
    name: string,
    description: string,
    retired: boolean,
    auditInfo: AuditInfo,
}
export interface LocationAttribute extends Resource {
    name: string,
    description: string,
    minOccurs: number,
    maxOccurs: number,
    datatypeClassname: string,
    datatypeConfig: string,
    preferredHandlerClassname: string,
    handlerConfig: string | null,
    retired: boolean,
    auditInfo: AuditInfo,
}
export interface Addrress extends Resource {
    address1: string | null,
    address2?: string | null,
    address3?: string | null,
    address4?: string | null,
    address5?: string | null,
    address6?: string | null,
    address7?: string | null,
    address8?: string | null,
    address9?: string | null,
    address10?: string | null,
    address11?: string | null,
    address12?: string | null,
    address13?: string | null,
    address14?: string | null,
    address15?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    voided?: boolean,
    cityVillage: string | null,
    stateProvince: string | null,
    country: string | null,
    postalCode: string | null,
    latitude?: string | null,
    longitude?: string | null,
}
export interface Location extends Address {
    name: string,
    description: string | null,
    tags: LocationTag[] | [],
    parentLocation: Location | null,
    childLocations: Location[] | [],
    attributes: LocationAttribute[] | [],
}

export interface Name extends Resource{
    givenName: string,
    middleName: string,
    familyName: string,
    familyName2?: string | null,
    voided: boolean,
}
export interface PersonAttributeType extends Resource {
    description: string,
    format:  FormatClass,
    foreignKey: number | null,
    sortWeight: number | null,
    searchable: boolean,
    concept: any,
    auditInfo: AuditInfo
}
export interface Person extends Resource {
    gender: string;
    age: number,
    birthDate: string,
    birthDateEstimated: boolean,
    preferredName: Name,
    preferredAddress: Address | null,
    names: Name[],
    addresses: Address[],
    dead: boolean,
    deathDate: boolean,
    causeOfDeath: any,
    attributes: PersonAttributeType[] | [],
    voided: boolean,
    auditInfo: AuditInfo,
    birthTime: string,
    deathdateEstimated: boolean,
    causeOfDeathNonCoded: any,
}
export interface Privilege extends Resource {
    name: string,
    description: string,
    retired: boolean,
    auditInfo: AuditInfo
}

export interface Role extends Resource{
    name: string,
    description: string,
    retired: boolean,
    privileges: Privilege[] | [],
    inheritedRoles:Role[] | [],
    allInheritedRoles?: Role[] | [],
    auditInfo:AuditInfo,
}
export interface User extends Resource{
    username: string,
    systemId: string,
    userProperties: any,
    person: Person,
    privileges: Privilege[],
    roles: Role[],
    retired: boolean
};
export enum FormatClass {
    "java.lang.Boolean" = "java.lang.Boolean",
    "java.lang.Character" = "java.lang.Character",
    "java.lang.Float" = "java.lang.Float",
    "java.lang.Integer" = "java.lang.Integer",
    "java.lang.String" = "java.lang.String",
    "org.openmrs.Concept" =  "org.openmrs.Concept",
    "org.openmrs.Drug" =  "org.openmrs.Drug",
    "org.openmrs.Encounter" =  "org.openmrs.Encounter",
    "org.openmrs.Location" =  "org.openmrs.Location",
    "org.openmrs.Patient" =  "org.openmrs.Patient",
    "org.openmrs.Person" =  "org.openmrs.Person",
    "org.openmrs.ProgramWorkflow" =  "org.openmrs.ProgramWorkflow",
    "org.openmrs.Provider" =   "org.openmrs.Provider",
    "org.openmrs.User" =  "org.openmrs.User",
    "org.openmrs.util.AttributableDate" = "org.openmrs.util.AttributableDate",
}