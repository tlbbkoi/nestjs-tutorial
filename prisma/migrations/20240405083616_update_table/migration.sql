/*
  Warnings:

  - You are about to drop the column `productDetailId` on the `CommentForProduct` table. All the data in the column will be lost.
  - You are about to drop the `ProductDetail` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `productId` to the `CommentForProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `basePrice` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `madeIn` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CartItem" DROP CONSTRAINT "CartItem_productDetailId_fkey";

-- DropForeignKey
ALTER TABLE "CommentForProduct" DROP CONSTRAINT "CommentForProduct_productDetailId_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_productDetailId_fkey";

-- DropForeignKey
ALTER TABLE "ProductDetail" DROP CONSTRAINT "ProductDetail_productId_fkey";

-- AlterTable
ALTER TABLE "CommentForProduct" DROP COLUMN "productDetailId",
ADD COLUMN     "productId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "basePrice" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "madeIn" TEXT NOT NULL,
ADD COLUMN     "sale" DOUBLE PRECISION NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "ProductDetail";

-- DropEnum
DROP TYPE "Size";

-- CreateTable
CREATE TABLE "ProductVariant" (
    "id" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "size" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "ProductVariant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductImage" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "productVariantId" TEXT NOT NULL,

    CONSTRAINT "ProductImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inventory" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "quantity" INTEGER NOT NULL,
    "productDetailId" TEXT NOT NULL,

    CONSTRAINT "Inventory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductVariant" ADD CONSTRAINT "ProductVariant_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductImage" ADD CONSTRAINT "ProductImage_productVariantId_fkey" FOREIGN KEY ("productVariantId") REFERENCES "ProductVariant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommentForProduct" ADD CONSTRAINT "CommentForProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_productDetailId_fkey" FOREIGN KEY ("productDetailId") REFERENCES "ProductVariant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_productDetailId_fkey" FOREIGN KEY ("productDetailId") REFERENCES "ProductVariant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_productDetailId_fkey" FOREIGN KEY ("productDetailId") REFERENCES "ProductVariant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
