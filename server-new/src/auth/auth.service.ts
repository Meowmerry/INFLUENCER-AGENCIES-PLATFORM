import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { Role, SignUpInput } from './dto/signup-input';
import { UpdateAuthInput } from './dto/update-auth.input';
import * as argon from 'argon2';
import { User } from '@prisma/client';
import { IAuthService } from './interface';
import { SignInInput } from './dto/signin-input';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService) {
  }

  async signup(signUpInput: SignUpInput): Promise<{ accessToken: string; refreshToken: string; user: User; }> {
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

      const { accessToken, refreshToken } = await this.createTokens(user.id, username, email);
      await this.updateRefreshToken(user.id, refreshToken);

      return { accessToken, refreshToken, user };
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          throw new ForbiddenException('Duplicate');
        }
      }
    }
  }

  async sigin(signinInput: SignInInput): Promise<{ accessToken: string; refreshToken: string; user: User; }> {
    const { username, password } = signinInput;
    const user = await this.validateUser(username, password);

    const { id, email } = user;
    const { accessToken, refreshToken } = await this.createTokens(id, username, email);
    await this.updateRefreshToken(user.id, refreshToken);

    console.log(accessToken, refreshToken, user);
    return { accessToken, refreshToken, user };
  }

  async validateUser(username, password): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { username: username },
    });
    if (!user) {
      throw new ForbiddenException('User not found');
    }

    const chkPwd = await argon.verify(user.hashPassword, password);
    if (!chkPwd) {
      throw new ForbiddenException('Access denied');
    }
    return user;
  }

  async findOne(id: number): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (!user) {
      throw new ForbiddenException('User not found');
    }
    return user;
  }

  update(id: number, updateAuthInput: UpdateAuthInput) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  async createTokens(userId: number, username: string, email: string) {
    const accessToken = this.jwtService.sign({
      userId,
      username,
      email,
    }, {
      expiresIn: this.configService.get('ACCESS_TOKEN_EXPIRATION'),
      secret: this.configService.get('ACCESS_TOKEN_SECRET'),
    });

    const refreshToken = this.jwtService.sign({
      userId,
      username,
      email,
      accessToken,
    }, {
      expiresIn: this.configService.get('REFRESH_TOKEN_EXPIRATION'),
      secret: this.configService.get('REFRESH_TOKEN_SECRET'),
    });

    return { accessToken, refreshToken };
  }

  async updateRefreshToken(userId: number, refreshToken: string) {
    const hashRefreshToken = await argon.hash(refreshToken);
    await this.prisma.user.update({ where: { id: userId }, data: { hashRefreshToken } });
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

