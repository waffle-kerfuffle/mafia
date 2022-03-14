import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Pagination } from '../utility/model/pagination';
import { CreateUserIn } from './dto/in/create-user.in';
import { FindUserIn } from './dto/in/find-user.in';
import { UpdateUserIn } from './dto/in/update-user.in copy';
import { User } from './model/user.entity';
import { UserService } from './service/user.service';

@ApiTags('User')
@Controller('user')
export class UserController {

  constructor(
    private readonly userService: UserService
  ) { }

  @Post('getAll')
  async getAll(@Body() pagination?: Pagination): Promise<User[]> {
    return await this.userService.getAll(pagination);
  }

  @Get('getById')
  async getById(@Query('id') userId: number): Promise<User> {
    return await this.userService.getById(userId);
  }

  @Post('find')
  async find(@Body() findArgs: FindUserIn) {
    return await this.userService.find(findArgs);
  }

  @Post('create')
  async create(@Body() createArgs: CreateUserIn) {
    return await this.userService.create(createArgs);
  }

  @Put('update')
  async update(@Body() updateArgs: UpdateUserIn) {
    return await this.userService.update(updateArgs);
  }

  @Delete('delete')
  async delete(@Query('id') userId: number) {
    return await this.userService.delete(userId);
  }


}
