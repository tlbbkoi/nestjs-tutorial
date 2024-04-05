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
    return this.categoryRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(
    id: string,
    updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoryRepository.updateCategory(
      id,
      updateCategoryDto,
    );
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
