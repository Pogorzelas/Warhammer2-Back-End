import { Body, Controller, Get,  Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './create-user.dto';
import * as bcrypt from 'bcrypt';

@Controller('users')

export class UserController {
  constructor( private readonly userService: UserService) {}
  @Get()
  findAll() {
    return this.userService.findAll();
  }
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const userData: CreateUserDto = {
      ...createUserDto,
      password: bcrypt.hashSync(createUserDto.password, 8),
    };
    return this.userService.create(userData);
  }
}