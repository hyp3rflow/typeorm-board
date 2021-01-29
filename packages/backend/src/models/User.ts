import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  Index,
} from 'typeorm';

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  user_id!: string;

  @Column()
  @Index('user_name_UNIQUE', { unique: true })
  user_name!: string;

  @Column()
  user_password!: string;
}

export default User;
