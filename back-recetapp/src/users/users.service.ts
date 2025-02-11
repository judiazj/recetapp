import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { hash } from 'bcrypt'

import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>
  ) { }

  async create(createUserDto: CreateUserDto) {
    createUserDto.password = await hash(createUserDto.password, 10);
    const newUser = await this.userModel.create<User>(createUserDto)
    return newUser
  }

  async findOne(email: string) {
    return this.userModel.findOne<User>({ email });
  }
}
