import { HttpException, HttpStatus } from '@nestjs/common';

export class NoUserWithEmailFoundException extends HttpException {
  constructor(email){
    super({
      status: HttpStatus.NOT_FOUND,
      error: `No user with email ${email} found`,
    }, 404);
  }
}