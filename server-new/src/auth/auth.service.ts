import * as argon from 'argon2';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto, Role } from './dto';


@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {
  }

  async signup(authDto: AuthDto) {
    let role;
    switch (authDto.role) {
      case Role.ADMIN.toString():
        role = Role.ADMIN;
        break;
      case Role.INFLUENCER.toString():
        role = Role.INFLUENCER;
        break;
      case Role.AGENCIE.toString():
        role = Role.AGENCIE;
        break;
      default:
        role = Role.INFLUENCER;
        break;
    }

    const pwdHash = await argon.hash(authDto.password);
    const user = await this.prisma.user.create({
      data: {
        email: authDto.email,
        password: pwdHash,
        role: role,
      },
      /*select: {
        email: true,
        callName: true,
        firstName: true,
        lastName: true,
        createdAt: true,
      },*/
    });
    delete user.password;
    return user;
  }

  signin() {
    return { msg: 'signin' };
  }
}