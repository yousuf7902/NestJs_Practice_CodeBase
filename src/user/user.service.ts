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
    return createUserDto;
  }

  updateUser(updateUserDto: UpdateUserDto, userId: number) {
    return { updateUserDto, userId };
  }

  userById(userId: number) {
    return userId;
  }

  deleteUser(userId: number) {
    return userId;
  }
}
