import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Model } from 'mongoose';
import { hash } from 'bcrypt'

import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { UpdateUserDto } from './dto/update-user.dto';

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
    return await this.userModel.findOne<User>({ email });
  }

  async updatePreferences({ email, preferences }: UpdateUserDto) {
    const updateUser = await this.userModel
      .findOneAndUpdate<User>({ email }, { preferences }, { new: true });

    if (!updateUser) throw new UnauthorizedException();

    return updateUser;
  }

  async updatePassword(email: string, password: string) {
    const newPassword = await hash(password, 10);
    const updateUser = await this.userModel
      .findOneAndUpdate<User>({ email }, { password: newPassword }, { new: true });

    if (!updateUser) throw new UnauthorizedException();

    return updateUser;
  }
}