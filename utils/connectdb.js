import mongoose from "mongoose";

async function connectDB() {
  mongoose.set('strictQuery', true)
  mongoose.connect(process.env.MONGO_URI)
  .then(
    console.log( 'Connected to Mongoose')
  )
  .catch( console.log('Sever error could not connect to DB'))
}

export default connectDB
