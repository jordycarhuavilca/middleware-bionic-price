import { Controller, Post, Body } from '@nestjs/common';
import { ProductService } from './product.service';
@Controller('product')
export class ProductController {

    constructor(private readonly productService: ProductService) {}

  @Post('cargar-desde-csv')
  async loadCSV(@Body('filename') filename: string) {
    try {
      return await this.productService.processCSV(filename);
    } catch (error) {
      return { message: 'Error al procesar el archivo CSV', error: error.message };
    }
  }
}
