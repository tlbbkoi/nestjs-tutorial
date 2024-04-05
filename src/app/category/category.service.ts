import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryRepository } from 'src/repository/category.repository';

@Injectable()
export class CategoryService {
  constructor(
    private categoryRepository: CategoryRepository,
  ) {}
  create(createCategoryDto: CreateCategoryDto) {
    return this.categoryRepository.createCategory(
      createCategoryDto,
    );
  }

  findAll() {
    return `This action returns all category`;
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(
    id: number,
    updateCategoryDto: UpdateCategoryDto,
  ) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
