import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { envs } from './config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(envs.mongoUri),
    UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
