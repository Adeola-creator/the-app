import mongoose from "mongoose";
const { Schema, model, models} = mongoose

const visitSchema = new Schema({
    date: {
        type: Date,
        default: Date.now()
    },
    attendantName: String,
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'patient'
    },
    observation: String,
    medications: String
}, {timestamps: true})

export const Visit = models.Visit || model("Visit", visitSchema)