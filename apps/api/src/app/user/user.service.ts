import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pagination } from './../utility/model/pagination';
import { Repository } from 'typeorm';
import { CreateUserIn } from './dto/in/create-user.in';
import { FindUserIn } from './dto/in/find-user.in';
import { UpdateUserIn } from './dto/in/update-user.in copy';
import { User } from './model/user.entity';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  async getAll(paging?: Pagination): Promise<User[]> {

    const res: User[] = await this.usersRepository.find({ take: paging.take, skip: paging.skip });
    return res;
  }

  async getById(userId: number): Promise<User> {

    const res: User = await this.usersRepository.findOne(userId);
    return res;
  }

  async find(findArgs: FindUserIn): Promise<User[]> {

    const res: User[] = await this.usersRepository.find({ where: findArgs })
    return res;
  }

  async create(user: CreateUserIn) {

    const res: User = await this.usersRepository.save(user);
    return res;
  }

  async update(updateArgs: UpdateUserIn) {

    const user: User = await this.usersRepository.findOne(updateArgs.userId);

    Object.assign(user, updateArgs);
    
    const res: User = await this.usersRepository.save(user);

    return res;
  }

  

}
