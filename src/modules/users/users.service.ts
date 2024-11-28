import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

global.users = [];

@Injectable()
export class UsersService {
  findAll(): any[] {
    return global.users;
  }

  create(user: CreateUserDto): any {
    global.users.push(user);
    return user;
  }
}
