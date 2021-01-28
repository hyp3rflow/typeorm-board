import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from '../packages/backend/src/typeorm';

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  user_name!: string;

  @Column()
  user_password!: string;
}

export default User;
