
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type HeroDocument = HydratedDocument<Hero>;

@Schema({ collection: 'hero' })
export class Hero {

    @Prop({ required: true })
    imageFile: string;
}

export const HeroSchema = SchemaFactory.createForClass(Hero);
