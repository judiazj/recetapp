import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt'


import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class AuthService {

  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
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
}
