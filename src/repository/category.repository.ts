import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from 'src/app/category/dto/create-category.dto';
import { UpdateCategoryDto } from 'src/app/category/dto/update-category.dto';
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

  async findAll() {
    const categorys =
      await this.prisma.category.findMany();
    return {
      data: categorys,
    };
  }

  async updateCategory(
    id: string,
    createCategoryDto: UpdateCategoryDto,
  ) {
    const { name, description } =
      createCategoryDto;

    const updatedCategory =
      await this.prisma.category.update({
        where: { id: id },
        data: {
          name: name,
          description: description,
        },
      });

    return {
      data: updatedCategory,
    };
  }
}
