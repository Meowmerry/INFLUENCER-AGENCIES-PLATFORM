
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

export abstract class IMutation {
    abstract signin(signInInput: SignInInput): SigninAndSignupResponse | Promise<SigninAndSignupResponse>;

    abstract signup(signUpInput: SignUpInput): SigninAndSignupResponse | Promise<SigninAndSignupResponse>;
}

export abstract class IQuery {
    abstract user(username: string): User | Promise<User>;

    abstract users(): User[] | Promise<User[]>;
}

export class SigninAndSignupResponse {
    accessToken: string;
    refreshToken: string;
    role: Role;
    user: User;
}

export class User {
    callName?: Nullable<string>;
    createdAt: DateTime;
    email: string;
    firstName?: Nullable<string>;
    id: number;
    lastName?: Nullable<string>;
    role: Role;
    updatedAt: DateTime;
    username: string;
}

export type DateTime = any;
type Nullable<T> = T | null;
