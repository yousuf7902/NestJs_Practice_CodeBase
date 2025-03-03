import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class UserService {
    getUser(){
        return { name: 'Yousuf Hassan', email: 'yousuf@gmail.com' };
    }

    postUser(req: Request){
        return req.body;
    }

    updateUser(userId: number){
        return userId;
    }

    userById(userId: number){
        return userId;
    }

    deleteUser(userId: number){
        return userId;
    }
}
