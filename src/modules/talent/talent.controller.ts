import { Controller, Get, Param } from '@nestjs/common';
import { TalentService } from './talent.service';

@Controller('talents')
export class TalentController {
  constructor(private readonly talentService: TalentService) {}
  @Get()
  findAll(){
    return this.talentService.findAll();
  }
  @Get(':talent')
  findOne(@Param('talent') talent: string) {
    return this.talentService.findOne(talent);
  }

}