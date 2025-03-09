import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { createUserParams, updateUserParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>){};

    async findUsers(){
        try{
            return await this.userRepository.find();
        }
        catch(error){
            throw error;
        }
    }

    async createUser(userDetails : createUserParams){
        try{
            const newUser = await this.userRepository.create({...userDetails, createdAt: new Date()});

            return this.userRepository.save(newUser);
            
        }
        catch(error){
            throw error;
        }
    }

    async updateUser (id: number, updateDetails: updateUserParams){
        try{
            await this.userRepository.update(id , {...updateDetails});
        }
        catch(error){
            throw error;
        }  
    }

    async deleteUser (id : number) {
        try {
            await this.userRepository.delete(id);
        }
        catch(error){
             throw error;
        }
    }
}
