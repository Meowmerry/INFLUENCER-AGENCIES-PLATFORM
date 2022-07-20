import { User } from '@prisma/client';
import { SignInInput } from '../dto/signin-input';
import { SignUpInput } from '../dto/signup-input';

export interface IAuthService {
  signup(signUpInput: SignUpInput): Promise<{ accessToken: string; refreshToken: string; user: User; }>;
  sigin(signinInput: SignInInput): Promise<{ accessToken: string; refreshToken: string; user: User; }>;
  findOne(id: number): Promise<User>;
}