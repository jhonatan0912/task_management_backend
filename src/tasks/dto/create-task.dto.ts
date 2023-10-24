import { IsString, IsNotEmpty, IsOptional } from "class-validator";

export class CreateTaskDto {

  id?: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsOptional()
  borderClass: string;

  @IsNotEmpty()
  completed: boolean = false;
}
