import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('tasks')
export class Task {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  borderClass: string;

  @Column({ default: false })
  completed: boolean;

}
