import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import {DatabaseModule} from './DB/db.module'
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, TasksModule, DatabaseModule, AuthModule]
})
export class AppModule {}
