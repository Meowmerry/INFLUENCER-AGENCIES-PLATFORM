import { User } from '@prisma/client';
import { SignInInput } from '../dto/signin-input';
import { SignUpInput } from '../dto/signup-input';
import { User as UserEntity } from 'src/user/entities/user.entity';

export interface IAuthService {
  signup(signUpInput: SignUpInput): Promise<{
    accessToken: string;
    refreshToken: string;
    user: User;
  }>;

  // sigin(signinInput: SignInInput): Promise<{ accessToken: string; refreshToken: string; user: User; }>;
  sigin(userEntity: UserEntity): Promise<{
    accessToken: string;
    refreshToken: string;
    user: UserEntity;
  }>;

  // findOne(id: number): Promise<User>;
}
