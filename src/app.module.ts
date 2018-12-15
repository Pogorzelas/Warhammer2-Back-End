import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RaceModule } from './modules/race/race.module';
import { CareerModule } from './modules/carrer/career.module';
import { WeaponModule } from './modules/weapon/weapon.module';
import { TalentModule } from './modules/talent/talent.module';
import { SkillModule } from './modules/skill/skill.module';
import { RollModule } from './modules/roll/roll.module';
import { ArmourModule } from './modules/armour/armour.module';
import { TrappingModule } from './modules/trapping/trapping.module';

@Module({
  imports: [RaceModule, CareerModule, WeaponModule, TalentModule, SkillModule, RollModule, TrappingModule, ArmourModule, MongooseModule.forRoot('mongodb://localhost/Warhammer2-Database')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
