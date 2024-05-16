import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {IsEmail , IsStrongPassword} from 'class-validator'

@Schema()
export class User extends Document {
  @Prop()
  name: string;

  @Prop()
  username: string;

  @Prop()
  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    minUppercase: 1
  })
  password: string;

  @Prop()
  @IsEmail()
  email: string;

  @Prop()
  type: string;

}

export const UserModel = SchemaFactory.createForClass(User);
