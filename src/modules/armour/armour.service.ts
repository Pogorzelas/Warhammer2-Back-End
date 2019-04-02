import { Component } from '@nestjs/common/utils/decorators/component.decorator';
import { Armour } from '../../interfaces/armour';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Component()
export class ArmourService {

  constructor(@InjectModel('Armour') private readonly armourModel: Model<Armour>){}

  async findAll(): Promise<Armour[]> {
    return await this.armourModel.find().exec();
  }

  async findOne(armourType: string): Promise<Armour> | undefined {
    return await this.armourModel.findOne({armourType}).exec();
  }

}