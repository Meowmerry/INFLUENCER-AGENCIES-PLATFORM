

export type InfluencerFormData = any;

export interface InfluencerRegister {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    channels?: Channels[];
    address: InfluencerAddress;
    role: string;
}

export interface InfluencerAddress {
    address: string;
    city: string;
    country: string;
    zipcode: string;
}
export interface Channels{
    name?: string;
    url?: string;
    description?: string;
}