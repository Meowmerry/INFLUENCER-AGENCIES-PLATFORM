import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';
import { User } from '@prisma/client';
import { IAuthService } from './interface';
import { SignInInput } from './dto/signin-input';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { UserService } from 'src/user/user.service';
import { User as UserEntity } from 'src/user/entities/user.entity';
import { Role, SignUpInput } from './dto/signup-input';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService,
    private userService: UserService,
  ) {
  }

  async signup(
    signUpInput: SignUpInput,
  ): Promise<{
    accessToken: string;
    refreshToken: string;
    user: User;
  }> {
    const { email, username, password, role } = signUpInput;
    const r = this.role(role);

    const hash = await argon.hash(password);
    try {
      const user: User = await this.prisma.user.create({
        data: {
          username,
          email,
          hashPassword: hash,
          role: r,
        },
      });

      const { accessToken, refreshToken } =
        await this.createTokens(
          user.id,
          username,
          email,
        );
      await this.updateRefreshToken(
        user.id,
        refreshToken,
      );

      return {
        accessToken,
        refreshToken,
        user: user,
      };
    } catch (e) {
      if (
        e instanceof PrismaClientKnownRequestError
      ) {
        if (e.code === 'P2002') {
          throw new ForbiddenException(
            'Duplicate',
          );
        }
      }
    }
  }

  async sigin(userEntity: UserEntity): Promise<{
    accessToken: string;
    refreshToken: string;
    user: UserEntity;
  }> {
    // const { username, password } = signinInput;
    // const user = await this.validateUser(username, password);

    console.log('userEntity',userEntity)
    const { id, email, username } = userEntity;
    const { accessToken, refreshToken } =
      await this.createTokens(
        id,
        username,
        email,
      );
    await this.updateRefreshToken(
      id,
      refreshToken,
    );

    return {
      accessToken,
      refreshToken,
      user: userEntity,
    };
  }

  async validateUser(
    username,
    password: string,
  ): Promise<User> {
    const user = await this.userService.findOne(
      username,
    );
    if (!user) {
      throw new ForbiddenException(
        'User not found',
      );
      // throw new UnauthorizedException();
    }

    const chkPwd = await argon.verify(
      user.hashPassword,
      password,
    );
    if (!chkPwd) {
      // throw new ForbiddenException('Access denied');
      throw new UnauthorizedException();
    }
    return user;
  }

  async createTokens(
    userId: number,
    username: string,
    email: string,
  ) {
    const accessToken = this.jwtService.sign(
      {
        username,
        email,
        sub: userId,
      },
      {
        expiresIn: this.configService.get(
          'ACCESS_TOKEN_EXPIRATION',
        ),
        secret: this.configService.get(
          'ACCESS_TOKEN_SECRET',
        ),
      },
    );

    const refreshToken = this.jwtService.sign(
      {
        username,
        email,
        accessToken,
        sub: userId,
      },
      {
        expiresIn: this.configService.get(
          'REFRESH_TOKEN_EXPIRATION',
        ),
        secret: this.configService.get(
          'REFRESH_TOKEN_SECRET',
        ),
      },
    );

    return { accessToken, refreshToken };
  }

  async updateRefreshToken(
    userId: number,
    refreshToken: string,
  ) {
    const hashRefreshToken = await argon.hash(
      refreshToken,
    );
    await this.prisma.user.update({
      where: { id: userId },
      data: { hashRefreshToken },
    });
  }

  private role(r: Role) {
    let role;
    switch (r) {
      case 'ADMIN':
        role = Role.ADMIN;
        break;
      case 'AGENCIE':
        role = Role.AGENCIE;
        break;
      case 'INFLUENCER':
        role = Role.INFLUENCER;
        break;
      default:
        role = Role.INFLUENCER;
        break;
    }
    return role;
  }
}
