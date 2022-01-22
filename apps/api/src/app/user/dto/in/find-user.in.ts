import { ApiProperty } from "@nestjs/swagger";
import { IsMobilePhone, IsNotEmpty } from "class-validator";

export class FindUserIn {

  @IsNotEmpty()
  @ApiProperty()
  userId?: number

  @IsNotEmpty()
  @ApiProperty()
  username?: string
  
  @IsNotEmpty()
  @ApiProperty()
  telno?: string
  
}