import mongoose from "mongoose"

const { Schema, model, models} = mongoose;

const patientSchema = new Schema({
    firstName: String,
    lastName:  String,
    phone: Number,
    height: String,
    gender: String,
    dob: Date,
    genotype: String,
    address: String,
    weight:String,
    bloodPressure: String,
    bloodType: String,
    nextOfKin:String,
    nextOfKinContact: String,
    department: String,
    allergies: String,
    createdBy: String,
}, {timestamps: true})

export const Patient = models.Patient || model("Patient", patientSchema)