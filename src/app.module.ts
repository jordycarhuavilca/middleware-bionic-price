import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1/bionic'),
    ConfigModule.forRoot({
      envFilePath: './.env',
      isGlobal: true,
    }),ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
