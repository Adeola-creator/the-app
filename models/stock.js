import mongoose from "mongoose";

const { Schema, model, models} = mongoose

const itemSchema = new Schema({
    name: String,
    number: Number
}, {timestamps: true})


export const Item = models.Item || model("Item", itemSchema)