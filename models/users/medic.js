import mongoose from "mongoose";

const { Schema, model, models} = mongoose;

const medicSchema = new Schema({
    firstname: {
        type: String,
        // required: true
    },
    lastname: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "medic"
    }
},  {timestamps: true})

export const Medic = models.Medic || model("Medic", medicSchema)