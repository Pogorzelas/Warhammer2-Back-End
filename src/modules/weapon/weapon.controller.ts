import { Controller, Get, Param } from '@nestjs/common';
import { WeaponService } from './weapon.service';
import { Weapon } from '../../interfaces/weapon';

@Controller('weapons')
export class WeaponController {
  constructor(private readonly weaponService: WeaponService){}
  @Get()
  findAll() {
    return this.weaponService.findAll();
  }
  @Get(':name')
  findOne(@Param('name') weapon: string) {
    return this.weaponService.findOne(weapon);
  }
}