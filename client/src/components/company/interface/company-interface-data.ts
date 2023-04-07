

export type CompanyFormData = any;

export interface CompanyRegister {
    companyName: string;
    webSite:string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    address: CompanyAddress;
    role: string;
}

export interface CompanyAddress {
    address: string;
    city: string;
    country: string;
    zipcode: string;
}
