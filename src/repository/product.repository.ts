import { Injectable } from '@nestjs/common';
import { CreateProductDto } from 'src/app/product/dto/create-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductRepository {
  constructor(private prisma: PrismaService) {}

  async createProduct(
    createProductDto: CreateProductDto,
  ) {
    const {
      name,
      description,
      madeIn,
      basePrice,
      sale,
      isActive,
      categoryId,
      productVariant,
    } = createProductDto;

    const product =
      await this.prisma.product.create({
        data: {
          name,
          description,
          madeIn,
          basePrice,
          sale,
          isActive,
          categoryId,
          productVariant: {
            create: productVariant.map(
              (variant) => ({
                ...variant,
                images: {
                  create: variant.images.map(
                    (image) => ({
                      imageUrl: image,
                    }),
                  ),
                },
              }),
            ),
          },
        },
        include: {
          productVariant: {
            include: {
              images: true,
            },
          },
        },
      });

    return product;
  }
}
