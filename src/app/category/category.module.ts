import { Module } from '@nestjs/common';
import { CategoryRepository } from 'src/repository/category.repository';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

@Module({
  controllers: [CategoryController],
  providers: [
    CategoryService,
    CategoryRepository,
  ],
})
export class CategoryModule {}
