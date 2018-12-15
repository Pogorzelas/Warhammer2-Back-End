import { Component } from '@nestjs/common/utils/decorators/component.decorator';
import { User } from '../../interfaces/user';
import { UserData } from './user-data.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './create-user.dto';
import { NoUserWithIDFoundException } from '../exceptions/NoUserWithIDFoundException';
import ExcludeProperties from '../decorators/ExcludeProperties';
@Component()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {
  }
  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
  async findUser(email: string): Promise<User> | undefined {
    const userData = await this.userModel.findOne({email}).exec();
    return {
      id: userData._id,
      password: userData.password,
      email: userData.email,
    };
  }
  @ExcludeProperties(['password'])
  async create(createUserDto: User): Promise<UserData> {
    const createdUser = new this.userModel(createUserDto);
    const userData = await createdUser.save();
    return userData._doc;
  }
}