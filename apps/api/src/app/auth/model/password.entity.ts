import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/model/user.entity';

@Entity()
export class Password {

  @PrimaryGeneratedColumn()
  passwordId: string;

  /**
   * password hash/digest
   */
  @Column()
  passHash: string;

  @OneToOne(type => User)
  @JoinColumn()
  user: User;
  
}