
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ImagesModule } from './images/images.module';
import { LandingModule } from './landing/landing.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(`${process.env.MONGODB_URI}/images`, {
      connectionName: 'images',
    }),
    MongooseModule.forRoot(`${process.env.MONGODB_URI}/landing`, {
      connectionName: 'landing',
    }),
    ImagesModule,
    LandingModule
  ],
})
export class AppModule { }
