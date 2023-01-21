import mongoose from "mongoose";

const connectDB = handler => async (req, res) => {
  mongoose.set('bufferCommands', false);
  try{
    console.log("Connecting to DB")
    if (mongoose.connections[0]._readyState) {
      console.log("Connected to DB")
      return handler(req, res);
    }
    mongoose.connect(process.env.MONGO_URI, {
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
