import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator"

export enum Role {
  AGENCIE,
  INFLUENCER,
  ADMIN
}

export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: String
  @IsString()
  @IsNotEmpty()
  password: String
  @IsEnum(Role)
  role: Role
}