import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateUserIn {

  @IsNotEmpty()
  @ApiProperty()
  username: string
  
  @IsNotEmpty()
  @ApiProperty()
  telno: string
  
}