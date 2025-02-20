import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {

  constructor(
    private readonly mailerService: MailerService,
  ) { }

  async sendPasswordResetEmail(email: string, newPassword: string) {
    await this.mailerService.sendMail({
      to: email,
      subject: 'Recuperacion contraseña Recetapp',
      context: {
        newPassword,
      },
      html: `<h1>Recuperación de contraseña</h1>
            <p>Tu nueva contraseña es: <strong>{{  ${newPassword}  }}</strong></p>
            <p>Por favor, cambia tu contraseña después de iniciar sesión.</p>
            <p>Si no has solicitado un cambio de contraseña, por favor contacta a soporte.</p>`,
    });
  }
}
