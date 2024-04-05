import {
  IsInt,
  IsOptional,
} from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsInt()
  page = 1;

  @IsOptional()
  @IsInt()
  size = 10;
}
