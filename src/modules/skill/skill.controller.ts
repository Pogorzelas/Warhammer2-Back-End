import { Controller, Get, Param } from '@nestjs/common';
import { SkillService } from './skill.service';

@Controller('skills')
export class SkillController {
  constructor(private readonly skillService: SkillService) {}
  @Get()
  findAll() {
    return this.skillService.findAll();
  }
  @Get(':name')
  findOne(@Param('name') skill: string) {
    return this.skillService.findOne(skill);
  }
}
