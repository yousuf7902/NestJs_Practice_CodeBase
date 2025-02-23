import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/users/utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    {
      id: 1,
      username: 'Yousuf Hassan',
      email: 'yousuf@gmail.com',
    },
    {
      id: 2,
      username: 'Raju Ahmed',
      email: 'raju@gmail.com',
    },
  ];

  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
    return {};
  }

  fetchUserById(id: number) {
    const user = this.fakeUsers.find((user) => user.id === id);
    if(!user){
        return false;
    }
    return user;
  }
}
