import { Component } from '@nestjs/common/utils/decorators/component.decorator';
import { Race } from '../../interfaces/race';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Component()
export class RaceService {
  constructor(@InjectModel('Race') private readonly raceModel: Model<Race>){}
  async findAll(): Promise<Race[]> {
    return await this.raceModel.find().exec();
  }
  async findOne(race: string): Promise<Race> | undefined {
    return await this.raceModel.findOne({race}).exec();
  }
}