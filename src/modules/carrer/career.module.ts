import { Module } from '@nestjs/common';
import { CareerController } from './career.controller';
import { CareerService } from './career.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CareerSchema } from './career.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Career', schema: CareerSchema }])],
  providers: [CareerService],
  controllers: [CareerController],
})
export class CareerModule {}