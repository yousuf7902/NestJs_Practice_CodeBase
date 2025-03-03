import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('user')
export class UserController {
  @Get()
  getUser() {
    return { name: 'Yousuf Hassan', email: 'yousuf@gmail.com' };
  }

  @Post()
  postUser() {
    return 'I am storing data into database...';
  }

  @Put()
  updateUser(@Param() userId: number) {
    return 'Updated the user details...';
  }

  @Get('/:userId')
  userById(@Param() userId: number) {
    return userId;
  }

  @Delete('/:userId')
  deleteUser(@Param() userId: number) {
    return userId;
  }
}