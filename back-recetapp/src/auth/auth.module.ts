import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { envs } from '../config';
import { MailModule } from '../mail/mail.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    UsersModule,
    MailModule,
    JwtModule.register({
      secret: envs.jwtSecret,
      signOptions: { expiresIn: '1d' }
    })
  ]
})
export class AuthModule { }
