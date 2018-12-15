import { Controller, Get, Param } from '@nestjs/common';
import { CareerService } from './career.service';

@Controller('careers')
export class CareerController {
  constructor(private readonly careerService: CareerService) {}
  @Get()
  findAll() {
    return this.careerService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') career: string) {
    return this.careerService.findOne(career);
  }
}
