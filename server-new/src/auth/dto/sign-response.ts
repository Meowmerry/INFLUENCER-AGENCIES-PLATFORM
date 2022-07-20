import { Field, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';
import { User } from 'src/user/user.entity';
import { Role } from './signup-input';


@ObjectType()
export class SignResponse {
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