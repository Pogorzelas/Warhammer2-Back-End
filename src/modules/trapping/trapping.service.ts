import { Component } from '@nestjs/common/utils/decorators/component.decorator';
import { Trapping } from '../../interfaces/trapping';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Component()
export class TrappingService {
  constructor(@InjectModel('Trapping') private readonly trappingModel: Model<Trapping>){}
  async findAll(): Promise<Trapping[]> {
    return await this.trappingModel.find().exec();
  }
  async findOne(name: string): Promise<Trapping> | undefined {
    return await this.trappingModel.findOne({name}).exec();
  }
}