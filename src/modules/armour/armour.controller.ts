import { Controller, Get, Param } from '@nestjs/common';
import { ArmourService } from './armour.service';

@Controller('armours')
export class ArmourController {

  constructor(private readonly armourService: ArmourService) {}

  @Get()
  findAll() {
    return this.armourService.findAll();
  }

  @Get(':armourType')
  findOne(@Param('armourType') type: string) {
    return this.armourService.findOne(type);
  }

}