import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';

@Module({
  modules: [UserModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
