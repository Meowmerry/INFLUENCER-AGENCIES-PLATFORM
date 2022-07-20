import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Role } from 'src/types/schema';

@ObjectType()
export class Auth {
  @Field(() => Int, { description: 'id' })
  id: number;
  @Field(() => String, { description: 'username' })
  username: string;
  @Field(() => String, { description: 'email' })
  email: string;
  @Field(() => String, { nullable: true, description: 'callName' })
  callName: string;
  @Field(() => String, { nullable: true, description: 'firstName' })
  firstName: string;
  @Field(() => String, { nullable: true, description: 'lastName' })
  lastName: string;
  @Field(() => String, { description: 'role' })
  role: Role;
  @Field(() => String, { description: 'createdAt' })
  createdAt: string;
  @Field(() => String, { description: 'updatedAt' })
  updatedAt: string;
}
