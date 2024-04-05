import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiResponse } from 'src/type/common.type';

@Controller('category')
export class CategoryController {
  constructor(
    private readonly categoryService: CategoryService,
  ) {}

  @Post()
  async create(
    @Body() createCategoryDto: CreateCategoryDto,
  ): Promise<ApiResponse<any>> {
    await this.categoryService.create(
      createCategoryDto,
    );

    return {
      statusCode: HttpStatus.OK,
      message: 'Success',
    };
  }

  @Get()
  async findAll(): Promise<ApiResponse<any[]>> {
    const categorys =
      await this.categoryService.findAll();

    return {
      ...categorys,
      statusCode: HttpStatus.OK,
      message: 'Success',
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ): Promise<ApiResponse<any>> {
    const category =
      await this.categoryService.update(
        id,
        updateCategoryDto,
      );

    return {
      ...category,
      statusCode: HttpStatus.OK,
      message: 'Success',
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(+id);
  }
}
