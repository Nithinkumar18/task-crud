
import { IsArray, IsNotEmpty, IsString, ArrayNotEmpty, ArrayUnique } from 'class-validator';

export class CreateTeamDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsArray()
  @ArrayNotEmpty()
  @ArrayUnique()
  members: string[];
}
