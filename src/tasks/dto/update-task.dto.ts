
import { IsDateString, IsIn, IsOptional, IsString } from 'class-validator';

export class UpdateTaskDto {
  @IsString()
  @IsOptional()
  description?: string;

  @IsDateString()
  @IsOptional()
  due_date?: string;

  @IsString()
  @IsOptional()
  assignee?: string;

  @IsString()
  @IsIn(['open', 'in_progress', 'done'])
  @IsOptional()
  status?: 'open' | 'in_progress' | 'done';
}
