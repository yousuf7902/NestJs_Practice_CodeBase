import { Request } from 'express';
import { UserService } from './user.service';
import { Controller, Delete, Get, Param, Post, Put, Req } from "@nestjs/common";

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUser() {
    return this.userService.getUser();
  }

  @Post()
  postUser(@Req() req:Request) {
    return this.userService.postUser(req);
  }

  @Put('/userId')
  updateUser(@Param() userId: number) {
    return this.userService.updateUser(userId);
  }

  @Get('/:userId')
  userById(@Param() userId: number) {
    return this.userService.userById(userId);
  }

  @Delete('/:userId')
  deleteUser(@Param() userId: number) {
    return this.userService.deleteUser(userId);
  }
}