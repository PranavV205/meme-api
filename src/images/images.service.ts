
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Image } from './schemas/image.schema';

@Injectable()
export class ImagesService {
    constructor(@InjectModel(Image.name, 'images') private readonly ImageModel: Model<Image>) { }

    async findAll(): Promise<Image[]> {
        return this.ImageModel.find().exec();
    }
}
