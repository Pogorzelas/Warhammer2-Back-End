import { Component } from '@nestjs/common/utils/decorators/component.decorator';
import { Weapon } from '../../interfaces/weapon';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Component()
export class WeaponService {
  constructor(@InjectModel('Weapon') private readonly weaponModel: Model<Weapon>){}
  async findAll(): Promise<Weapon[]> {
    return await this.weaponModel.find().exec();
  }
  async findOne(name: string): Promise<Weapon> | undefined {
    return await this.weaponModel.findOne({name}).exec();
  }
}