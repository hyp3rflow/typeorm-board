import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import User from './User';

@Entity()
class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @ManyToOne(() => User, user => user.id, { onDelete: 'CASCADE' })
  author_id!: number;

  @Column()
  title!: string;

  @Column()
  content!: string;

  @CreateDateColumn()
  timestamp!: string;
}

export default Board;
