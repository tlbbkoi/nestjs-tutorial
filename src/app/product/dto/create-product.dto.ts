import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  madeIn?: string;

  @IsNumber()
  basePrice: number;

  @IsNumber()
  @IsOptional()
  sale?: number;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @IsString()
  categoryId: string;

  @ValidateNested({ each: true })
  @Type(() => CreateProductVariantDto)
  productVariant: CreateProductVariantDto[];
}

class CreateProductVariantDto {
  @IsString()
  color: string;

  @IsNumber()
  size: number;

  @IsArray()
  @IsString({ each: true })
  images: string[];
}
