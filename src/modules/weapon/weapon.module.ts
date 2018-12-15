import { Module } from '@nestjs/common';
import { WeaponService } from './weapon.service';
import { WeaponController } from './weapon.controller';
import { WeaponSchema } from './weapon.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Weapon', schema: WeaponSchema}])],
  providers: [WeaponService],
  controllers: [WeaponController],
})
export class WeaponModule {}
