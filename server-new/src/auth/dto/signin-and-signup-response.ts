import { Field, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';
import { User } from 'src/user/entities/user.entity';
import { Role } from './signup-input';


@ObjectType()
export class SigninAndSignupResponse {
  @IsNotEmpty()
  @IsString()
  @Field()
  accessToken: string;
  @Field()
  refreshToken: string;
  @Field()
  user: User;
  @Field(type => Role)
  role: Role;
}