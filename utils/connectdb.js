import mongoose from "mongoose";

const connection = {};

 function connectDB(){
    // if(connection.isConnected){
    //     return
    // }else{
     mongoose.connect(process.env.MONGO_URI)
     .catch(err => console.log(err))
    //     connection.isConnected = db.connections[0].readyState
    //     console.log(connection.isConnected);
    // }
  
}

export default connectDB
