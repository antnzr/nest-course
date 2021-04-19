import { AuthService } from './auth.service';
import { CreateUserDto } from './../users/dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Post } from '@nestjs/common';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {

  constructor(private authServie: AuthService) {}

  @Post('/login')
  login(@Body() userDto: CreateUserDto) {
    return this.authServie.login(userDto)
  }

  @Post('/registration')
  registration(@Body() userDto: CreateUserDto) {
    return this.authServie.registration(userDto)
  }
}
