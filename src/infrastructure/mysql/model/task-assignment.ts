import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { User } from './user';

@Entity()
export class TaskAssignment {
  @PrimaryGeneratedColumn({ comment: 'id' })
  id: number;

  @Column({ type: 'varchar', comment: 'task id' })
  taskId!: string;

  @Column({ type: 'varchar', comment: 'user id' })
  userId!: string;

  @ManyToOne((_) => User, (user) => user.taskAssignments)
  @JoinColumn()
  user!: User;

  @CreateDateColumn({
    type: 'timestamp',
    comment: 'created date',
  })
  readonly createdAt!: Date;
}
