import { Controller, Post, HttpStatus, HttpCode, Get, Body, HttpException, forwardRef, Inject } from '@nestjs/common';
import { AuthService } from './auth.service';
import LoginData from './LoginData.class';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from '../../interfaces/user';
import { NoUserWithEmailFoundException } from '../exceptions/NoUserWithEmailFoundExeption';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('token')
  @HttpCode(HttpStatus.OK)
  public async getToken(user: User) {
    return await this.authService.createToken(user);
  }

  @Post()
  public async logIn(@Body() loginData: LoginData) {
    const user = await this.userService.findUser(loginData.email);
    if (user) {
      const isPasswordValid = bcrypt.compareSync(loginData.password, user.password);
      if (isPasswordValid) {
        return this.authService.createToken(user);
      } else {
        throw new HttpException({
          status: HttpStatus.FORBIDDEN,
          error: `Wrong password`,
        }, 403);
      }
    } else {
      throw new NoUserWithEmailFoundException(loginData.email);
    }
  }

  @Get('authorized')
  public async authorized() {
    console.log('Authorized route...');
  }
}