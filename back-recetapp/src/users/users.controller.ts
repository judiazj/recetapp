import { Controller, Body, Patch, Param, } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }


  @Patch('preferences')
  async updatePreferences(
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.updatePreferences(updateUserDto);
  }

  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        email: {
          type: 'string',
        },
        password: {
          type: 'string',
        },
      },
    },
  })
  @Patch('update-password')
  async updatePassword(@Body() { email, password }: { email: string, password: string }) {
    return this.usersService.updatePassword(email, password);
  }
}
