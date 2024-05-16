import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import {UsersService} from './users.service';
import { User } from './entities/user.entity';
import { get } from 'http';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('/api/users')
export class UsersController {

    constructor(private readonly userService: UsersService) {}

    @Get()
    async findAll(): Promise<User[]> {
      return this.userService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<User> {
      return this.userService.findOne(id);
    }
  
    @Post()
    async create(@Body() user: User): Promise<User> {
      return this.userService.create(user);
    }
  
    @Put(':id')
    async update(@Param('id') id: string, @Body() user: User): Promise<User> {
      return this.userService.update(id, user);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<User> {
      return this.userService.delete(id);
    }


}
