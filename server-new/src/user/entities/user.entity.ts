import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Role } from 'src/auth/dto/signup-input';

@ObjectType()
export class User {
  @Field(() => Int, { description: 'user id' })
  id: number;
  @Field(() => String, { description: 'username' })
  username: string;
  @Field(() => String, { description: `user's email` })
  email: string;
  @Field(() => Role, { description: `user's role` })
  role: Role;
  @Field(() => String, { nullable: true, description: `how to call this user for short` })
  callName: string;
  @Field(() => String, { nullable: true, description: `user's first name` })
  firstName: string;
  @Field(() => String, { nullable: true, description: `user's last name` })
  lastName: string;
  @Field(() => Date)
  createdAt: string;
  @Field(() => Date)
  updatedAt: string;
}