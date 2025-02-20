import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { envs } from './config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { RecetasModule } from './recetas/recetas.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
    MongooseModule.forRoot(envs.mongoUri),
    UsersModule,
    AuthModule,
    RecetasModule,
    MailModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
