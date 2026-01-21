import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ToDo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ type: 'boolean', default: false })
  completed: boolean;
}
