
import { Controller, Get } from '@nestjs/common';
import { ImagesService } from './images.service';
import { Image } from './schemas/image.schema';


@Controller('api/v1/images')
export class ImagesController {
    constructor(private readonly imagesService: ImagesService) { }

    @Get('gimme')
    async findAll(): Promise<Image[]> {
        return this.imagesService.findAll();
    }
}
