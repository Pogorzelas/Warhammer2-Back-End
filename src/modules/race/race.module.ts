import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RaceSchema } from './race.schema';
import { RaceService } from './race.service';
import { RaceController } from './race.controller';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Race', schema: RaceSchema}])],
  providers: [RaceService],
  controllers: [RaceController],
})
export class RaceModule {}
