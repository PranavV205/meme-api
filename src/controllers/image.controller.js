import { Image } from "../models/image.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"

const getRandomImage = async (req, res) => {
    try {
        const count = await Image.countDocuments()
        const randomIndex = Math.floor(Math.random() * count)
        const randomImage = await Image.findOne().skip(randomIndex)

        if(!randomImage){
            return res.status(404).json({"message": "No images found"})
        }

        res.json(randomImage)
    } catch (error) {
        return res.status(500).json({"message": "Error fetching image"})
    }
}

const uploadImage = async (req, res) => {
    const {name} = req.body

    const imageFileLocalPath = req.file.path
    if (!imageFileLocalPath) res.json({"msg": "no file found"})
    console.log(imageFileLocalPath)

    const imageFile = await uploadOnCloudinary(imageFileLocalPath)
    console.log(imageFile)
    if (!imageFile) res.json({"msg": "no file :("})

    const image = await Image.create({
        imageFile: imageFile.url,
        name,
    })

    return res.status(201).json({"message": "Image uploaded successfully"})
}


export {getRandomImage, uploadImage}