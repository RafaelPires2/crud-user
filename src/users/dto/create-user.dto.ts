import { IsString, IsEmail } from 'class-validator';

// Um DTO é uma classe que define a estrutura dos dados
// e utiliza decorators para validar essa estrutura,
// garantindo que a requisição tenha a forma desejada.

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
