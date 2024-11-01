import { Router } from "express"
import { getRandomImage, uploadImage } from "../controllers/image.controller.js"

const router = Router()

router.route('/gimme').get(getRandomImage)
router.route('/upload').post(uploadImage)

export default router