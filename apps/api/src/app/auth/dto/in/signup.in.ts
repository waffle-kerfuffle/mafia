import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { CreateUserIn } from "../../../user/dto/in/create-user.in";

export class SignupIn {

  @IsNotEmpty()
  @ApiProperty()
  user: CreateUserIn

  @IsNotEmpty()
  @ApiProperty()
  password: string

}