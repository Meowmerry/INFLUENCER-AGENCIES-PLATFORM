import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export enum Role {
  AGENCIE = 'AGENCIE',
  INFLUENCER = 'INFLUENCER',
  ADMIN = 'ADMIN',
}

registerEnumType(Role, {
  name: 'Role',
  description: 'The supported roles.',
  valuesMap: {
    ADMIN: {
      description: 'The ADMIN role.',
    },
    INFLUENCER: {
      description: 'The INFLUENCER  role.',
    },
    AGENCIE: {
      description: 'The AGENCIE role.',
    },
  },
});

@InputType()
export class SignUpInput {

  @IsNotEmpty()
  @IsString()
  @Field()
  username: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @Field()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  password: string;

  @IsNotEmpty()
  @Field(type => Role)
  // @IsEnum(registerEnumType)
  role: Role;

}