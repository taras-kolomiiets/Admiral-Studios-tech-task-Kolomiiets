import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({ example: 'Купити продукти' })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ example: 'Хліб, молоко, яйця' })
  @IsNotEmpty()
  @IsString()
  description: string;
}
