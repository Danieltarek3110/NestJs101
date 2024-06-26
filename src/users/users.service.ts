import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {User} from './entities/user.entity'
import { Model } from 'mongoose';
import { UsersModule } from './users.module';

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }


    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
      }
    
      async findOne(id: string): Promise<User> {
        return this.userModel.findById(id).exec();
      }
    
      async create(user: User): Promise<User> {
        const newUser = new this.userModel(user);
        return newUser.save();
      }
    
      async update(id: string, user: User): Promise<User> {
        return this.userModel.findByIdAndUpdate(id, user, { new: true }).exec();
      }

      async delete(id: string): Promise<User> {
        return this.userModel.findByIdAndDelete(id).exec();
      }
}