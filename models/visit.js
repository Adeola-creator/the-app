import mongoose from "mongoose";
const { Schema, model, models} = mongoose

const visitSchema = new Schema({
    date: {
        type: Date,
        default: createdAt
    },
    attendantName: String,
    patientId: Schema.Types.ObjectId,
    observation: String,
    Drugs: String
}, {timestamps: true})

export const Visit = models.Visit || model("Visit", visitSchema)