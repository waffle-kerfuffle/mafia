import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './service/auth.service';
import { Password } from './model/password.entity';
import { CipherService } from './service/cipher.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Password]),
    UserModule
  ],
  providers: [AuthService, CipherService],
  controllers: [AuthController],
  exports: [AuthService, CipherService]
})
export class AuthModule { }
