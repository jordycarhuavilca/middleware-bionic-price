import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OwnerDocument = Owner & Document;

@Schema({ timestamps: true })
export class Owner {
    @Prop({ required: true })
  sellerProduct: string;

  @Prop({ required: true })
  descripcion: string;

  @Prop({ required: true })
  precio: string;

  @Prop({ required: true })
  fecha: string;
}

export const ProductSchema = SchemaFactory.createForClass(Owner);
