import { Module } from '@nestjs/common';
import { TalentService } from './talent.service';
import { TalentController } from './talent.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TalentSchema } from './talent.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Talent', schema: TalentSchema }])],
  providers: [TalentService],
  controllers: [TalentController],
})
export class TalentModule {}