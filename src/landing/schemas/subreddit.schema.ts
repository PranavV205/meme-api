
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SubredditDocument = HydratedDocument<Subreddit>;

@Schema({ collection: 'subreddits' })
export class Subreddit {

    @Prop({ required: true })
    imageFile: string;

    @Prop()
    sub: string;
}

export const SubredditSchema = SchemaFactory.createForClass(Subreddit);
