import mongoose from "mongoose"

const imageSchema = mongoose.Schema(
    {
        imageFile: {
            type: String,
            required: true,
            unique: true
        },
        name: {
            type: String,
            required: true
        }
    }, {timestamps: true}
)

imageSchema.pre("save", function(next){
    if (this.tags){
        this.tags.map(tag => tag.toLowerCase())
    }
    next()
})


export const Image = mongoose.model("Image", imageSchema)