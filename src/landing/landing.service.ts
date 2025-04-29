import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Hero } from './schemas/hero.schema';
import { Subreddit } from './schemas/subreddit.schema';

@Injectable()
export class LandingService {
    constructor(
        @InjectModel(Hero.name, 'landing')
        private readonly heroModel: Model<Hero>,

        @InjectModel(Subreddit.name, 'landing')
        private readonly subredditModel: Model<Subreddit>,
    ) { }

    async findAllHero(): Promise<Hero[] | null> {
        try {
            return this.heroModel.find().exec();
        } catch (error) {
            console.error('Error fetching random Hero:', error);
            return null;
        }
    }

    async findAllSubreddit(): Promise<Subreddit[] | null> {
        try {
            return this.subredditModel.aggregate([
                {
                    $group: {
                        _id: "$sub",
                        images: { $push: { image: "$imageFile", id: "$_id" } }
                    }
                },
                {
                    $project: {
                        sub: "$_id",
                        randomEntry: {
                            $arrayElemAt: [
                                "$images",
                                { $floor: { $multiply: [{ $rand: {} }, { $size: "$images" }] } }
                            ]
                        }
                    }
                },
                {
                    $project: {
                        sub: 1,
                        imageFile: "$randomEntry.image",
                        docId: "$randomEntry.id"
                    }
                }
            ]);
        } catch (error) {
            console.error('Error fetching subreddits:', error);
            return null;
        }
    }
}