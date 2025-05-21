import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tasks') // Назва таблиці
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ default: 'pending' })
  status: string;
}
