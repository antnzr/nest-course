import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, IsEmail } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({example: 'xxx@xxx.xx', description: "Email"})
  @IsString({message: "Must be a string"})
  @IsEmail({}, {message: "Valid email is required"})
  readonly email: string;
  @ApiProperty({example: 'admin', description: "Password"})
  @IsString({message: "Must be a string"})
  @Length(4, 16, {message: "Must be less than 16 and more than 4 characters"})
  readonly password: string;
}
