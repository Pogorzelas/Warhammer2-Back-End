import { HttpException, HttpStatus } from '@nestjs/common';

export class NoUserWithIDFoundException extends HttpException {
  constructor(id) {
    super({
      status: HttpStatus.NOT_FOUND,
      error: `No user with id ${id} found`,
    }, 404);
  }
}