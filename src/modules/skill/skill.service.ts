import { Component } from '@nestjs/common/utils/decorators/component.decorator';
import { Skill } from '../../interfaces/skill';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Component()
export class SkillService {
  constructor(@InjectModel('Skill') private readonly skillModel: Model<Skill>){}
  async findAll(): Promise<Skill[]> {
    return await this.skillModel.find().exec();
  }
  async findOne(name: string): Promise<Skill> | undefined {
    return await this.skillModel.findOne({name}).exec();
  }
}
