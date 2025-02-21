import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  
  @Prop({ required: true })
  precio: string;

  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  peso: string;

  @Prop({ required: true })
  tienda: string;

  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  fechacreacion: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
