import { ApiProperty } from "@nestjs/swagger";
import { IsMobilePhone, IsNotEmpty } from "class-validator";

export class UpdateUserIn {

  /** update key */
  @IsNotEmpty()
  @ApiProperty()
  userId: number
  
  @IsNotEmpty()
  @ApiProperty()
  username?: string
  
  @IsNotEmpty()
  @ApiProperty()
  telno?: string
  
}