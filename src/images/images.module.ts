
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ImagesController } from './image.controller';
import { ImagesService } from './images.service';
import { Image, ImageSchema } from './schemas/image.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Image.name, schema: ImageSchema }], 'images')],
    controllers: [ImagesController],
    providers: [ImagesService],
})
export class ImagesModule { }
