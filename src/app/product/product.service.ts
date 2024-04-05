import { Injectable } from '@nestjs/common';
import { ProductRepository } from 'src/repository/product.repository';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(
    private productRepository: ProductRepository,
  ) {}
  create(createProductDto: CreateProductDto) {
    return this.productRepository.createProduct(
      createProductDto,
    );
  }

  findAll() {
    return `This action returns all product`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(
    id: number,
    updateProductDto: UpdateProductDto,
  ) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
