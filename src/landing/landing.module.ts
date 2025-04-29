
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LandingController } from './landing.controller';
import { LandingService } from './landing.service';
import { Hero, HeroSchema } from './schemas/hero.schema';
import { Subreddit, SubredditSchema } from './schemas/subreddit.schema';

@Module({
    imports: [MongooseModule.forFeature([
        { name: Hero.name, schema: HeroSchema },
        { name: Subreddit.name, schema: SubredditSchema }
    ], 'landing')],
    controllers: [LandingController],
    providers: [LandingService],
})
export class LandingModule { }
