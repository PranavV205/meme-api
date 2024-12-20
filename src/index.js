import dotenv from "dotenv"

import { app } from "./app.js"

import { connectDB } from "./db/index.js"

dotenv.config({
    path: './env'
})

const port = process.env.PORT || 8000

connectDB()
.then(() => {
    app.listen(port, () => {
        console.log(`Server up an running at ${port}!`)
    })
})
.catch(() => {
    process.exit(1)
})