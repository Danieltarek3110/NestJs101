import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller'
import { UsersService } from './users.service';
import { User, UserModel } from './entities/user.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserModel }])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
