import { Body, Controller, Get, HttpException, Param, ParseIntPipe, Post, Query, Req, Res, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { AuthGuard } from 'src/users/guard/auth/auth.guard';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  @UseGuards(AuthGuard)
  getUsers() {
    return this.userService.fetchUsers();
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  createUser(@Body() userData: CreateUserDto) {
    return this.userService.createUser(userData);
  }

  @Get(':id')
  getUserPostById(@Param('id', ParseIntPipe) id: number) {
    const user = this.userService.fetchUserById(id);
    if (!user) {
      throw new HttpException('User not found', 404);
    }
    return user;
  }

  @Get('posts')
  getUserPosts() {
    return [
      {
        name: 'Yousuf Hassan',
        email: 'yousuf@gmail.com',
        posts: [
          {
            id: 1,
            title: 'Post 1',
          },
          {
            id: 2,
            title: 'Post 2',
          },
        ],
      },
    ];
  }

  //Express js handling to Post methods
  /* @Post("create") 
  createUser(@Req() request: Request, @Res() response: Response) {
    console.log(request.body);
    response.send({ message: 'User created' });
  } */

  @Get(':id/:postId')
  getUserById(@Param('id') id: string, @Param('postId') postId: string) {
    console.log(id, postId);
    return { id, postId };
  }
}
