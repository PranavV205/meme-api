import mongoose from "mongoose"

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/images`)
        console.log(`Connection successfull to database: ${connectionInstance.connection.name}; host: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("Mongodb connection error: ", error)
        throw error
    }
}

export { connectDB }