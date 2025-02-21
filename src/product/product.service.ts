import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './entity/product.entity';
import * as fs from 'fs';
import * as path from 'path';
import * as csv from 'csv-parser';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}

  
  async readCSV(filename: string): Promise<Product[]> {
    const results: Product[] = [];
    const filePath = path.join(process.cwd(), 'src', 'temp', filename);

    if (!fs.existsSync(filePath)) {
      throw new Error(`El archivo ${filename} no existe en la carpeta src/temp.`);
    }

    return new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (data) => {
          results.push({
            id: data.Id,
            nombre: data.Nombre,
            precio: data.Precio,
            peso: data.Peso,
            tienda: data.Tienda,
            fechacreacion: data.FechaCreacion,
          });
        })
        .on('end', () => resolve(results))
        .on('error', (error) => reject(error));
    });
  }

  
  async saveProducts(products: Product[]): Promise<Product[]> {
    return this.productModel.insertMany(products);
  }

 
  async processCSV(filename: string): Promise<{ message: string; data: Product[] }> {
    const products = await this.readCSV(filename);
    const savedProducts = await this.saveProducts(products);
    return { message: 'Productos cargados exitosamente', data: savedProducts };
  }
}
