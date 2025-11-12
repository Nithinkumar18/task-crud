// src/tasks/task.entity.ts
import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

@Entity('tasks')
export class Task {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  description: string;

  @Column()
  due_date: Date;

  @Column()
  assignee: string;  

  @Column()
  status: string;   
}
