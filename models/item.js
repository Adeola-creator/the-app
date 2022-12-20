import mongoose from "mongoose";

const { Schema, model, models} = mongoose

const stockSchema = new Schema({
    name: String,
    number: Number,
    createdAt: {type: Date, default: Date.now()},
    createdby: String
}, {timestamps: true})


export const Item = models.Item || model("Item", stockSchema)