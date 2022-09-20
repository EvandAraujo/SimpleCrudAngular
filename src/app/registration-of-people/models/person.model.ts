import { BrazilianUfStatic } from "../statics/brazilian-uf.static";

export class Person { 
    id?: string;
    name?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
    nationality?: string;
    zoneInformationPostalCode?: string;
    brazilianUfId?: string;
    brazilianUf?: BrazilianUfStatic;
    city?: string;
    publicPlace?: string;
}
