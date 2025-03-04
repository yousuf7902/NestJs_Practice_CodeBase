import { Request } from 'express';
import { UserService } from './user.service';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Req } from "@nestjs/common";
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUser() {
    return this.userService.getUser();
  }

  @Post()
  postUser(@Body() createUserDto:CreateUserDto) {
    return this.userService.postUser(createUserDto);
  }

  @Put('/:userId')
  updateUser(@Body() updateUserDto: UpdateUserDto, @Param('userId', ParseIntPipe) userId: number) {
    return this.userService.updateUser(updateUserDto, userId);
  }

  @Get('/:userId')
  userById(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.userById(userId);
  }

  @Delete('/:userId')
  deleteUser(@Param('userId',ParseIntPipe) userId: number) {
    return this.userService.deleteUser(userId);
  }
}