import mongoose from "mongoose";

async function connectDB() {
  mongoose.set('strictQuery', true)
  mongoose.connect(process.env.MONGO_URI)
  .then((message) => 
    console.log(message, 'Connected to Mongoose')
  )
  .catch((err) => console.log(err, 'Sever error could not connect to DB'))
}

export default connectDB
