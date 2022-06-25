export interface UserData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    channels: Channels[];
    address: Address;
    role: string;
}

export interface Channels {
    name?: string;
    url?: string;
    description?:string;
}
export interface Address {
    address: string;
    city: string;
    contry: string;
    zipcode: string;
}