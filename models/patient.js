import mongoose from "mongoose"

const { Schema, model, models} = mongoose;

const patientSchema = new Schema({
    firstName:{
        type: String,
        required: true,
        max: 30
    },
    lastName: {
        type: String,
        required: true,
        max: 30
    },
    phoneNumber:{
        type: Number,
        required: true,
        unique: true
    },
    height:{
        type: Number,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    Dob:{
        type: Date,
        required: true
    },
    genotype:{
        type: String,
        required: true
    },
    address:{
        type: String,
    },
    weight: {
        type: Number,
        required: true
    },
    bloodPressure:{
        type: Number,
        required: true
    },
    blood_type: {
        type: String,
        required: true
    },
    next_of_kin:{
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true
    },
    note: {
        type: String,
    }
}, {timestamps: true})

export const Patient = models.Patient || model("Patient", patientSchema)