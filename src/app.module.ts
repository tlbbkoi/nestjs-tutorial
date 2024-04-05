import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './app/auth/auth.module';
import { UserModule } from './app/user/user.module';
import { BookmarkModule } from './app/bookmark/bookmark.module';
import { ProductModule } from './app/product/product.module';
import { CategoryModule } from './app/category/category.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    BookmarkModule,
    PrismaModule,
    ProductModule,
    CategoryModule,
  ],
})
export class AppModule {}
