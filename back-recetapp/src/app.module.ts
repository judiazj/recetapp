import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { envs } from './config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(envs.mongoUri),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
