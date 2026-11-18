import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { FarmerAuthController } from './farmer-auth/farmer-auth.controller';
import { FarmerAuthService } from './farmer-auth/farmer-auth.service';

@Module({
  providers: [AuthService, FarmerAuthService],
  controllers: [FarmerAuthController]
})
export class AuthModule {}
