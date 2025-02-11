import { Controller, Body, Patch, Param, } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }


  @Patch('preferences')
  async updatePreferences(
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.updatePreferences(updateUserDto);
  }
}
