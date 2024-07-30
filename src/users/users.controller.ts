import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

// O controller é responsável por lidar com as requisições HTTP
// e enviar as respostas apropriadas. Ele atua como um intermediário entre o cliente
// o serviço de aplicação que contém a lógica de negócios.

// Este decorator define que todas as rotas dentro desta classe são prefixadas com /users.
// Por exemplo, se você tiver um método GET dentro dessa classe, ele responderá a /users.
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.usersService.findOne(id);
    if (!user) throw new NotFoundException();
    return user;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const user = await this.usersService.update(id, updateUserDto);
    if (!user) throw new NotFoundException();
    return user;
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const user = await this.usersService.remove(id);
    if (!user) throw new NotFoundException();
  }
}
