import mongoose from "mongoose"

const { Schema, model, models} = mongoose;

const patientSchema = new Schema({
    firstName: String,
    lastName:  String,
    phone: Number,
    height: String,
    gender: String,
    Dob: Date,
    genotype: String,
    address: String,
    weight:String,
    bloodPressure: String,
    blood_type: String,
    nextOfKin:String,
    nextOfKinContact: String,
    department: String,
    allergies: String,
    createdAt: {type: Date, default:Date.now()},
    createdBy: String
}, {timestamps: true})

export const Patient = models.Patient || model("Patient", patientSchema)