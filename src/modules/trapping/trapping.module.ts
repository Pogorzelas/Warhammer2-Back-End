import { Module } from '@nestjs/common';
import { TrappingService } from './trapping.service';
import { TrappingController } from './trapping.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TrappingSchema } from './trapping.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Trapping', schema: TrappingSchema }])],
  providers: [TrappingService],
  controllers: [TrappingController],
})
export class TrappingModule {}