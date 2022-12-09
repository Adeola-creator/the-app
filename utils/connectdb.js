import mongoose from "mongoose";


function connectDB() {
    mongoose.set('strictQuery', true)
    mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log('Connected to db');
    })
    .catch((err) => {
      console.log(err.message);
    });
}

export default connectDB
