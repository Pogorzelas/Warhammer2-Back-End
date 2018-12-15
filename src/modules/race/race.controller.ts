import { Controller, Get, Param } from '@nestjs/common';
import { RaceService } from './race.service';

@Controller('races')
export class RaceController {
  constructor(private readonly raceService: RaceService) {}
  @Get()
  findAll() {
    return this.raceService.findAll();
  }
  @Get(':race')
  findOne(@Param('race') race: string) {
    return this.raceService.findOne(race);
  }
}