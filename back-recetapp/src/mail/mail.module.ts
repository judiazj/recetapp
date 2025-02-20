import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { envs } from '../config';

@Module({
  providers: [MailService],
  exports: [MailService],
  imports: [
    MailerModule.forRootAsync({
      useFactory: async () => ({
        transport: {
          host: envs.mailHost,
          secure: false,
          auth: {
            user: envs.mailUser,
            pass: envs.mailPassword,
          }
        },
        defaults: {
          from: '"No Reply" <no-reply@example.com>',
        },
      }),
    }),
  ],
})
export class MailModule { }
