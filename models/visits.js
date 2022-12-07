import mongoose from "mongoose";
const { Schema, model, models} = mongoose

const visitSchema = new Schema({
    date: Date,
    attendantName: String,
    patientName: String,
    observation: String,
    medications: String
}, {timestamps: true})

export const Visit = models.Visit || model("Visit", visitSchema)