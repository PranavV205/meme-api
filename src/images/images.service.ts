import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Image } from './schemas/image.schema';

@Injectable()
export class ImagesService {
    constructor(
        @InjectModel(Image.name, 'images')
        private readonly ImageModel: Model<Image>,
    ) { }

    async getRandomImage(): Promise<Image | null> {
        try {
            const count = await this.ImageModel.countDocuments();
            const randomIndex = Math.floor(Math.random() * count);
            const randomImage = await this.ImageModel.findOne().skip(randomIndex);
            return randomImage;
        } catch (error) {
            console.error('Error fetching random image:', error);
            return null; // important: always return something
        }
    }
}
