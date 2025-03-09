import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from 'src/typeorm/entities/Profile';
import { User } from 'src/typeorm/entities/User';
import {
  createUserParams,
  CreateUserProfileParams,
  updateUserParams,
} from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Profile)
    private profileUserRepository: Repository<Profile>,
  ) {}

  async findUsers() {
    try {
      return await this.userRepository.find({relations : ['profile']});
    } catch (error) {
      throw error;
    }
  }

  async createUser(userDetails: createUserParams) {
    try {
      const newUser = await this.userRepository.create({
        ...userDetails,
        createdAt: new Date(),
      });

      return this.userRepository.save(newUser);
    } catch (error) {
      throw error;
    }
  }

  async updateUser(id: number, updateDetails: updateUserParams) {
    try {
      await this.userRepository.update(id, { ...updateDetails });
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(id: number) {
    try {
      await this.userRepository.delete(id);
    } catch (error) {
      throw error;
    }
  }

  async createUserProfile(
    id: number,
    createUserDetails: CreateUserProfileParams,
  ) {
    try {
      const user = await this.userRepository.findOneBy({ intId: id });
      if (!user) {
        throw new HttpException(
          'User not found. Cannot create new profile',
          HttpStatus.BAD_REQUEST,
        );
      }

      const newProfile = this.profileUserRepository.create(createUserDetails);
      const savedProfile = await this.profileUserRepository.save(newProfile);
      user.profile = savedProfile;
      return this.userRepository.save(user);
    } catch (error) {
      throw error;
    }
  }
}
