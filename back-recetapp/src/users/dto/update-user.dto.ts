import { ApiProperty } from '@nestjs/swagger';
import { IsArray, ArrayNotEmpty, IsEnum, IsEmail, IsNotEmpty } from 'class-validator';

import { Preferences } from '../enums/preferences.enum';


export class UpdateUserDto {

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ type: [String] })
  @IsArray()
  @IsEnum(Preferences, { each: true })
  preferences: Preferences[];

}