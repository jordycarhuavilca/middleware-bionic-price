import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './entity/product.entity';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';

@Module({
  imports:[MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])],
  providers: [ProductService],
  controllers: [ProductController]
})
export class ProductModule {}
