import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';
import { SignUpInput } from './dto/signup-input';
import { SignInInput } from './dto/signin-input';
import { SigninAndSignupResponse } from './dto/signin-and-signup-response';
import { UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth-guard';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => SigninAndSignupResponse)
  signup(@Args('signUpInput') signUpInput: SignUpInput) {
    return this.authService.signup(signUpInput);
  }

  @Mutation(() => SigninAndSignupResponse)
  @UseGuards(LocalAuthGuard)
  signin(@Args('signInInput') signInInput: SignInInput, @Context() context) {
    console.log('context.user', context);
    return this.authService.sigin(context.user);
  }
}
