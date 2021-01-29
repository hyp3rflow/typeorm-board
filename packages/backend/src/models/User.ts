import {

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  user_id!: string;
  user_name!: string;

  @Column()
  user_password!: string;
}

export default User;
