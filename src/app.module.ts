import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // Configuração a nível da aplicação.
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // varre toda a aplicação procurando por entity
      synchronize: true, // usar somente em desenvolvimento, quando for em prod, usar migrations
    }),

    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
