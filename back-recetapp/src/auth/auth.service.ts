import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt'


import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import { LoginUserDto } from './dto/login-user.dto';
import { MailService } from '../mail/mail.service';

@Injectable()
export class AuthService {

  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly mailService: MailService,
  ) { }

  async create(createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  async loginUser({ email, password }: LoginUserDto) {
    const user = await this.usersService.findOne(email);

    if (!user) throw new BadRequestException('Email or password is incorrect');

    const isCorrectPassword = await compare(password, user.password);

    if (!isCorrectPassword) throw new BadRequestException('Email or password is incorrect');

    const payload = { email: user.email, user_name: user.name };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async forgotPassword(email: string) {
    const user = await this.usersService.findOne(email);

    if (!user) throw new UnauthorizedException('Don\'t have permission');

    const newPassword = crypto.randomUUID();

    await this.mailService.sendPasswordResetEmail(email, newPassword);

    await this.usersService.updatePassword(email, newPassword);

    return {
      message: 'La contraseña ha sido cambiada, por favor revisa tu correo',
    };
  }
}
