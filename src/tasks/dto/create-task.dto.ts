import { IsString, IsNotEmpty } from "class-validator";

export class CreateTaskDto {

  id?: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  completed: boolean = false;
}
