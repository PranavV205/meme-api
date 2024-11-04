import express from "express"
import cors from "cors"

import imageRouter from "./routes/image.router.js"

const app = express()

const corsOptions = {
    origin: "https://memehub-p.netlify.app",
    methods: ['GET', 'POST'],
}

app.use(cors(corsOptions))

app.use(express.json({
    limit: "10kb"
}))
app.use(express.urlencoded({
    extended: true,
    limit: "10kb"
}))

app.use('/api/v1/images', imageRouter)

export { app }