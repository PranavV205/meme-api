
import { Controller, Get } from '@nestjs/common';
import { ImagesService } from './images.service';
import { Image } from './schemas/image.schema';


@Controller('api/v1/images')
export class ImagesController {
    constructor(private readonly imagesService: ImagesService) { }

    @Get('gimme')
    async getRandomImage(): Promise<Image | null> {
        return this.imagesService.getRandomImage();
    }

}
