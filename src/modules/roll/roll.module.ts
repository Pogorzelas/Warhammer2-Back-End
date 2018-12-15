import { Module } from '@nestjs/common';
import { RollSchema } from './roll.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { RollService } from './roll.service';
import { RollController } from './roll.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Roll', schema: RollSchema }])],
  providers: [RollService],
  controllers: [RollController],
})
export class RollModule {}