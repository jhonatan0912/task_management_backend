import { IsString, IsNotEmpty, IsOptional, IsBoolean } from "class-validator";

export class CreateTaskDto {

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  borderClass?: string;

  @IsNotEmpty()
  @IsBoolean()
  completed: boolean = false;
}
