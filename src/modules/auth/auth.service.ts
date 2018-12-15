import { HttpStatus, Injectable } from '@nestjs/common';
import { User } from '../../interfaces/user';
import { HttpException } from '@nestjs/core/exceptions/http-exception';
import { Model } from 'mongoose';
import { bcrypt } from 'bcrypt';
import * as jwt from 'jsonwebtoken';
@Injectable()
export class AuthService {
  async createToken(user: User) {
    const expiresIn = 60 * 60, secretOrKey = 'secret';
    const token = jwt.sign({ ...user }, secretOrKey, { expiresIn });
    return {
      expires_in: expiresIn,
      access_token: token,
    };
  }
  async validateUser(token): Promise<boolean> {
    try {
      return jwt.verify(token, 'secret');
    } catch (e) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Wrong authorization token',
      }, 403);
    }
  }

}
