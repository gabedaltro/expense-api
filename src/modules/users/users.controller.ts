import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
  @Post()
  create(@Body() user: CreateUserDto) {
    if (!user.name) {
      throw new BadRequestException('A validação dos dados falharam');
    }

    const users = this.usersService.findAll();

    if (users.find((u) => u.name === user.name)) {
      throw new BadRequestException('Usuário já cadastrado');
    }

    return this.usersService.create(user);
  }
}
