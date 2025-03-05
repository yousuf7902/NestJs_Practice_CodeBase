import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) 
    private userRepository: Repository<User>,
  ) {}

  async getUser() {
    return await this.userRepository.find();
  }

  postUser(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  async updateUser(updateUserDto: UpdateUserDto, userId: number) {
    const data = await this.userRepository.findOne({
      where: {
        intId: userId
      }
    });

    updateUserDto = {
      ...data,
      ...updateUserDto
    }
    
    return this.userRepository.save(updateUserDto);
  }

  findByEmail (email:string){
    return this.userRepository.findOne({where: {email}});
  }
  
  userById(userId: number) {
    return this.userRepository.findOne({where: {intId: userId}});
  }

  deleteUser(userId: number) {
    return this.userRepository.delete(userId);
  }
}
