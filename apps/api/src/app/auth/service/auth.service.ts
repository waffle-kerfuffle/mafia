import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Password } from '../model/password.entity';
import { User } from '../../user/model/user.entity';
import { CipherService } from './cipher.service';
import { SignupIn } from '../dto/in/signup.in';
import { SignupOut } from '../dto/out/signup.out';

@Injectable()
export class AuthService {

  constructor(
    // @InjectRepository(User)
    // private readonly userRepository: Repository<User>,
    @InjectRepository(Password)
    private readonly passwordRepository: Repository<Password>,
    private readonly cipherService: CipherService
  ) { }

  /**
   * create a digest for the passed in password, relate it to the user, add it to the db
   * @param passwordClear cleartext password
   * @param user the owner of this password
   * @returns password entity
   */
  async createPassword(passwordClear: string, user: User): Promise<Password> {

    const password: Password = new Password();
    password.user = user;
    password.passHash = this.cipherService.hash(passwordClear);

    const pass = await this.passwordRepository.save(password);
    return pass;
    
  }

  async findPasswordByUser(user: User): Promise<Password> {
    return await this.passwordRepository.findOne({ where: { user } });
  }
  
}
