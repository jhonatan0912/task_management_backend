import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('tasks')
export class Task {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
  })
  title: string;

  @Column({
    type: 'varchar',
  })
  description: string;

  @Column({
    type: 'varchar',
  })
  borderClass: string;

  @Column({
    type: 'boolean',
    default: false
  })
  completed: boolean;
}
