
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ImageDocument = HydratedDocument<Image>;

@Schema()
export class Image {

    @Prop({ required: true })
    imageFile: string;

    @Prop()
    name: string;
}

export const ImageSchema = SchemaFactory.createForClass(Image);
