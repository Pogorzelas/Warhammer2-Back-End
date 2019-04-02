import { Controller, Get, Param } from '@nestjs/common';
import { TrappingService } from './trapping.service';

@Controller('trappings')
export class TrappingController {

  constructor(private readonly trappingService: TrappingService) {}

  @Get()
  findAll(){
    return this.trappingService.findAll();
  }

  @Get(':trapping')
  findOne(@Param('trapping') trapping: string) {
    return this.trappingService.findOne(trapping);
  }

}