import mongoose from "mongoose";
const { Schema, model, models} = mongoose

const visitSchema = new Schema({
    date: {
        type: Date,
        default: createdAt
    },
    visitDate: String,
    patientNumber: String,
    attendantName: String,
    patient: {type: Schema.Types.ObjectId, ref: 'Patient'},
    observation: String,
    drugs: String
}, {timestamps: true})

export const Visit = models.Visit || model("Visit", visitSchema)