import { Component } from '@nestjs/common/utils/decorators/component.decorator';
import { Career } from '../../interfaces/career';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Component()
export class CareerService {
  constructor(@InjectModel('Career') private readonly careerModel: Model<Career>){}
  async findAll(): Promise<Career[]> {
    return await this.careerModel.find().exec();
  }
  async findOne(id: string): Promise<Career> | undefined {
    return await this.careerModel.findOne({id}).exec();
  }
}