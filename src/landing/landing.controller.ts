
import { Controller, Get } from '@nestjs/common';
import { LandingService } from './landing.service';
import { Hero } from './schemas/hero.schema';
import { Subreddit } from './schemas/subreddit.schema';


@Controller('api/v1/landing')
export class LandingController {
    constructor(private readonly landingService: LandingService) { }

    @Get('hero')
    async getHeroArray(): Promise<Hero[] | null> {
        return this.landingService.findAllHero();
    }

    @Get('subreddit')
    async getSubredditArray(): Promise<Subreddit[] | null> {
        return this.landingService.findAllSubreddit();
    }

}
