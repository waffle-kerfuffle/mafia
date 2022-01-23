import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class LoginIn {

    @IsNotEmpty()
    @ApiProperty()
    telno: string
    
    @IsNotEmpty()
    @ApiProperty()
    password: string
  
}