import { Image } from "../models/image.model.js"

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
        console.log(error)
        return res.status(500).json({"message": "Error fetching image"})
    }
}

const uploadImage = async (req, res) => {
    const {imageFile, name} = req.body

    const image = await Image.create({
        "imageFile": imageFile,
        "name": name
    })

    return res.status(201).json({"message": "Image uploaded successfully"})
}


export {getRandomImage, uploadImage}