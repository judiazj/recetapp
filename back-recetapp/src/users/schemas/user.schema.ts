import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Preferences } from '../enums/preferences.enum';


export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: false, versionKey: false })
export class User {

  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true, index: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: new Date() })
  created_at?: Date;

  @Prop({ type: [String], enum: Preferences, default: [] })
  preferences?: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);