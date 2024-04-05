import {
  IsOptional,
  IsString,
} from 'class-validator';
import { PaginationDto } from 'src/common/dto/pagination.dto';

export class FilterUserDto extends PaginationDto {
  @IsString()
  @IsOptional()
  name?: string;
}
