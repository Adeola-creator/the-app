import mongoose from "mongoose";

const { Schema, model, models} = mongoose;

const hrSchema = new Schema({
    name: String,
    role: "HR",
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
},  {timestamps: true})

export const Hr = models.HR  || model("HR", hrSchema)