import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Configura o typeorm para conectar as entidades
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
