import { Controller, Get, Param } from '@nestjs/common';
import { RollService } from './roll.service';

@Controller('rolls')
export class RollController {

  constructor(private readonly rollService: RollService) {}

  @Get()
  findAll() {
    return this.rollService.findAll();
  }

  @Get(':roll')
  findOne(@Param('roll') roll: string) {
    return this.rollService.findOne(roll);
  }

}
