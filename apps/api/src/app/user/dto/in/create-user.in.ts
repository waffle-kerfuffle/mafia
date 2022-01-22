import { ApiProperty } from "@nestjs/swagger";
import { IsMobilePhone, IsNotEmpty } from "class-validator";

export class CreateUserIn {

  @IsNotEmpty()
  @ApiProperty()
  username?: string
  
  @IsNotEmpty()
  @ApiProperty()
  telno?: string
  
}