import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateUserDto } from '../dtos/CreateUser.dto';
import { UserService } from '../service/user.service';
import { UpdateUserDto } from '../dtos/UpdateUser.dto';

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
}
