import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateUserDto } from '../dtos/CreateUser.dto';
import { UserService } from '../service/user.service';
import { UpdateUserDto } from '../dtos/UpdateUser.dto';
import { CreateUserProfileDto } from '../dtos/CreateUserProfile.dto';
import { CreatePostDto } from '../dtos/CreatePost.dto';

@Controller('users')
export class UserController {
    constructor(private userService: UserService){}
    
    @Get()
    async fetchUsers(){
        const users = await this.userService.findUsers();
        return users;
    }

    @Post()
    createUsers(@Body() createUserDto: CreateUserDto){
        return this.userService.createUser(createUserDto);
    }

    @Put(':id')
    updateUsers(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto : UpdateUserDto ){
        return this.userService.updateUser(id, updateUserDto);
    }

    @Delete(':id')
    deleteUsers(@Param('id', ParseIntPipe) id: number){
        this.userService.deleteUser(id);
    }

    @Post(':id/profiles')
    createUserProfile(@Param('id', ParseIntPipe) id : number, @Body() createUserProfileDto: CreateUserProfileDto){
        return this.userService.createUserProfile(id, createUserProfileDto);
    }

    @Post(':id/posts')
    createUserPost(@Param('id', ParseIntPipe) id: number, @Body() createPostDto: CreatePostDto){
        return this.userService.createUserPost(id,createPostDto);
    }

}
