import { Router } from "express"
import { getRandomImage, uploadImage } from "../controllers/image.controller.js"
import { upload } from "../middlewares/multer.middleware.js"

const router = Router()

router.route('/gimme').get(getRandomImage)
router.route('/upload').post(
    upload.single('imageFile'),
    uploadImage
)

export default router