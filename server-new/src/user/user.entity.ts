import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Role } from 'src/auth/dto/signup-input';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;
  @Field()
  username: string;
  @Field()
  email: string;

  @Field()
  role: Role;
}