import { Module } from '@nestjs/common';
import { ArmourController } from './armour.controller';
import { ArmourService } from './armour.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ArmourSchema } from './armour.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Armour', schema: ArmourSchema }])],
  providers: [ArmourService],
  controllers: [ArmourController],
})
export class ArmourModule {}