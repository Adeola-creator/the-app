import mongoose from "mongoose";
const { Schema, model, models} = mongoose

const visitSchema = new Schema({
    visitDate: String,
    patientName: String,
    attendantName: String,
    observation: String,
    drugs: String
}, {timestamps: true})

export const Visit = models.Visit || model("Visit", visitSchema)