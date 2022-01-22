import { Body, Injectable, NotFoundException } from '@nestjs/common';
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

    const res: User[] = await this.usersRepository.find({ take: paging?.take ?? 10, skip: paging?.skip ?? 0});
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

    if (!user)
      throw new NotFoundException({}, 'no user with the specified [userId] exists')

    Object.assign(user, updateArgs);

    const res: User = await this.usersRepository.save(user);

    return res;
  }

  /**
   * 
   * @param userId the id of the user to delete
   * @returns the deleted user
   * @throws {@link NotFoundException} if no user with the specified userId is available
   */
  async delete(userId: number) {

    const user: User = await this.usersRepository.findOne(userId);

    if (user)
      await this.usersRepository.delete(userId)
    else
      throw new NotFoundException({}, 'no user with the specified [userId] exists')

    return user;
  }



}
