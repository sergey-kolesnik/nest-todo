/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsString, IsOptional, IsBoolean, IsNotEmpty } from 'class-validator';

const TODOSTATUS = {
  INCOMPLETE: false,
  COMPLETE: true,
};

export class CreateToDODto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsBoolean()
  completed: boolean = TODOSTATUS.INCOMPLETE;
}
