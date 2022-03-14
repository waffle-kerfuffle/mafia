import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { SignupIn } from './dto/in/signup.in';
import { SignupOut } from './dto/out/signup.out';
import { UserService } from '../user/service/user.service';
import { ApiTags } from '@nestjs/swagger';
import { LoginIn } from './dto/in/login.in';
import { LoginOut } from './dto/out/login.out';
import { CipherService } from './service/cipher.service';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {

  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly cipherService: CipherService
  ) { }

  @Post('signup')
  async signup(@Body() signupArgs: SignupIn): Promise<SignupOut> {

    if (this.userService.find({ telno: signupArgs.user.telno }))
      throw 'user with this telephone number is already signedup'

    const user = await this.userService.create(signupArgs.user);
    const res = await this.authService.createPassword(signupArgs.password, user);

    return new SignupOut();

  }

  @Post('login')
  async login(@Body() loginArgs: LoginIn): Promise<LoginOut> {

    const user = this.userService.find({ telno: loginArgs.telno })?.[0];

    if (!user)
      throw 'user not found/registered'

    const password = await this.authService.findPasswordByUser(user);

    if(password.passHash == this.cipherService.hash(loginArgs.password)){
      return LoginOut;
    } else {
      throw 'password incorrect'
    }
    
  }

}
