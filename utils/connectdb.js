import mongoose from "mongoose";

const connection = {};
async function connectDB() {
  mongoose.set('strictQuery', true)
    if(connection.isConnected){
      return;
    }
    const db =  mongoose.connect(process.env.MONGO_URI);
    // connection.isConnected = db.connections[0].readyState;
}

export default connectDB
