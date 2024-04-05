import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from 'src/app/category/dto/create-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryRepository {
  constructor(private prisma: PrismaService) {}

  async createCategory(
    createCategoryDto: CreateCategoryDto,
  ) {
    const { name, description } =
      createCategoryDto;

    const category =
      await this.prisma.category.create({
        data: {
          name,
          description,
        },
      });

    return category;
  }
}
