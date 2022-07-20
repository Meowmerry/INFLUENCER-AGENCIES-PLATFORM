import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

  constructor(private authService: AuthService) {
    super();
  }

  async validateUser(username: string, password: string) {
    const user = this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
  }
}