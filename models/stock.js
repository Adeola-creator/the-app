import mongoose from "mongoose";

const { Schema, model, models} = mongoose

const stockSchema = new Schema({
    name: String,
    number: Number,
    createdAt: {type: Date, default: Date.now()}
}, {timestamps: true})


export const Stock = models.Item || model("Stock", stockSchema)