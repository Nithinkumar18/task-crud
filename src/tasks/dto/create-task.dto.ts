
import { IsDateString, IsIn, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsDateString()
  due_date: string;

  @IsString()
  @IsOptional()
  assignee?: string;

  @IsString()
  @IsIn(['open', 'in_progress', 'done'])
  status: 'open' | 'in_progress' | 'done';
}
