import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Inicializa uma aplicação NestJS,
// configurando a validação e transformação automática dos dados de entrada em todas as rotas,
// e escuta requisições HTTP na porta 3000.

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    // Está ligando uma validação automática, conectando com os dtos.ts
    new ValidationPipe({
      transform: true,

      //ajuda a prevenir a inserção de dados inesperados ou maliciosos, removendo qualquer propriedade que não esteja explicitamente definida nos DTOs.
      whitelist: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
