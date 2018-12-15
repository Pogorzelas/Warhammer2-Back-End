import { Component } from '@nestjs/common/utils/decorators/component.decorator';
import { Roll } from '../../interfaces/roll';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Skill } from '../../interfaces/skill';

@Component()
export class RollService {
  constructor(@InjectModel('Roll') private readonly rollModel: Model<Roll>){}
  async findAll(): Promise<Roll[]> {
    return await this.rollModel.find().exec();
  }
  async findOne(roll: string): Promise<Roll> | undefined {
    return await this.rollModel.findOne({roll}).exec();
  }
}