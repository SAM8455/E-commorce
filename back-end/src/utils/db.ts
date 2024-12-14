import mongoose from "mongoose";

export const connectDB = async () => {

    await mongoose.connect("mongodb://localhost:27017", {
        dbName: "Ecommerce",
    })
    .then(c=>console.log(`DB connected at ${c.connection.host}`))
    .catch((e)=>console.log(e))
}