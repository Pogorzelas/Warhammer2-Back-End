import { Component } from '@nestjs/common/utils/decorators/component.decorator';
import { Talent } from '../../interfaces/talent';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Component()
export class TalentService {
  constructor(@InjectModel('Talent') private readonly talentModel: Model<Talent>){}
  async findAll(): Promise<Talent[]> {
    return await this.talentModel.find().exec();
  }
  async findOne(name: string): Promise<Talent> | undefined {
    return await this.talentModel.findOne({name}).exec();
  }
}