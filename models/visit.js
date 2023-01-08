import mongoose from "mongoose";
const { Schema, model, models} = mongoose

const visitSchema = new Schema({
    date: {
        type: Date,
        default: createdAt
    },
    attendantName: String,
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'Patient'
    },
    observation: String,
    medications: String
}, {timestamps: true})

export const Visit = models.Visit || model("Visit", visitSchema)