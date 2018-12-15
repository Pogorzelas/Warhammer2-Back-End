import { Module } from '@nestjs/common';
import { SkillService } from './skill.service';
import { SkillController } from './skill.controller';
import { SkillSchema } from './skill.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Skill', schema: SkillSchema }])],
  providers: [SkillService],
  controllers: [SkillController],
})
export class SkillModule {}