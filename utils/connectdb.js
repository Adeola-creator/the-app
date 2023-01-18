import mongoose from "mongoose";

const connectDB = handler => async (req, res) => {
  try{
    if (mongoose.connections[0].readyState) {
      return handler(req, res);
    }
    await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useNewUrlParser: true
    });
    console.log("Connected to DB")
    return handler(req, res);
  }catch(err){
    console.log(err);
  }

};

export default connectDB
