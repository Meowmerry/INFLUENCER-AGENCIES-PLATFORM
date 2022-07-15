import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator"

export enum Role {
  AGENCIE='AGENCIE',
  INFLUENCER='INFLUENCER',
  ADMIN='ADMIN'
}

export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string
  @IsString()
  @IsNotEmpty()
  password: string
  @IsEnum(Role)
  role: Role
}