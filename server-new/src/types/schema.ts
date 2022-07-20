
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum Role {
    ADMIN = "ADMIN",
    AGENCIE = "AGENCIE",
    INFLUENCER = "INFLUENCER"
}

export class SignInInput {
    password: string;
    username: string;
}

export class SignUpInput {
    email: string;
    password: string;
    role: Role;
    username: string;
}

export class Auth {
    callName?: Nullable<string>;
    createdAt: string;
    email: string;
    firstName?: Nullable<string>;
    id: number;
    lastName?: Nullable<string>;
    role: string;
    updatedAt: string;
    username: string;
}

export abstract class IMutation {
    abstract signin(signInInput: SignInInput): SignResponse | Promise<SignResponse>;

    abstract signup(signUpInput: SignUpInput): SignResponse | Promise<SignResponse>;
}

export abstract class IQuery {
    abstract GetUser(id: number): Auth | Promise<Auth>;
}

export class SignResponse {
    accessToken: string;
    refreshToken: string;
    role: Role;
    user: User;
}

export class User {
    email: string;
    id: number;
    role: string;
    username: string;
}

type Nullable<T> = T | null;
