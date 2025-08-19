import mongoose, { mongo } from "mongoose";

const connectDB = async (url) => {
    mongoose.connect(url)
}
export {connectDB};