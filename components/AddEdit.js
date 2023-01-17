
import axios from "axios";
import React, { useState } from "react";
import AddArea from "./AddArea";
import EditArea from "./EditArea";
import Input from "./Input";

function AddEdit(props) {
    const {patientData, heading} = props;
    const [formData, setFromData] = useState(patientData ? patientData: {
        firstName: "",
        lastName: "",
        phone: "",
        address: "",
        dob: "",
        gender: "",
        nextOfKin: "",
        nextOfKinContact: "",
        department: "",
        createdBy: "",
        weight: "",
        height: "",
        bloodPressure: "",
        bloodType: "",
        genotype: "",
        allergies: ""
    })

    function handleChange(e) {
        const { name, value } = e.target
        setFromData(prevValues => ({
            ...prevValues,
            [name]: value
        }))
    }
    function handleCreate() {
        axios.post('http://localhost:3000/api/patients', {
            ...formData
        })
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err))
        return;
    }

    function handleEdit(patientId){
        axios.put(`http://localhost:3000/api/patients/${patientId}`)
        .then(res => console.log(res, "Patient deleted successfully"))
        .catch(err => console.log(err))
    }

    return (
        <div className="flex flex-1 flex-col">
            <form className="flex flex-col w-full relative select-none p-10">
                <h1 className="select-none text-3xl text-[#006f5b] font-medium my-2">{heading}</h1>
                <div className="flex w-full gap-2 md:gap-6">
                    <Input
                        label="First Name"
                        placeholder="first name"
                        type='text'
                        name="firstName"
                        for='firstName'
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    <Input
                        label="Last Name"
                        placeholder="last name"
                        type='text'
                        for='lastName'
                        name='lastName'
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex w-full gap-2 md:gap-6">
                    <Input
                        label="Phone"
                        placeholder="eg.0812345678"
                        type='text'
                        name='phone'
                        for='phone'
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    <Input
                        label="Address"
                        placeholder="address"
                        type='text'
                        name="address"
                        for='address'
                        value={formData.address}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex w-full gap-2 md:gap-6">
                    <Input
                        label="Date of Birth"
                        type='date'
                        name='dob'
                        for='dob'
                        value={formData.dob}
                        onChange={handleChange}
                    />
                    <label className="w-full flex flex-col">
                        Gender
                        <select name="gender" value={formData.gender} onChange={handleChange} className="border bg-gray-100  outline-none rounded h-10">
                            <option>Select</option>
                            <option className="hover:bg-[#007560]">Male</option>
                            <option className="hover:bg-[#007560]">Female</option>
                        </select>
                    </label>

                </div>
                <div className="flex w-full gap-2 md:gap-6">
                    <Input
                        label="Next of Kin"
                        placeholder='Enter a name'
                        type='text'
                        name='nextOfKin'
                        for='nextOfKin'
                        value={formData.nextOfKin}
                        onChange={handleChange}
                    />
                    <Input
                        label="Next of Kin Contact"
                        placeholder="Enter a contact"
                        type='text'
                        name="nextOfKinContact"
                        for='nextOfKinContact'
                        value={formData.nextOfKinContact}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex w-full gap-2 md:gap-6">
                    <Input
                        label="Department"
                        placeholder="department"
                        type='text'
                        name="department"
                        for='department'
                        value={formData.department}
                        onChange={handleChange}

                    />
                    <Input
                        label="Attendant Name"
                        type='text'
                        name='createdBy'
                        placeholder='Enter your name'
                        for='createdBy'
                        value={formData.createdBy}
                        onChange={handleChange}
                    />

                </div>
                <h2 className="text-xl my-2 font-semibold text-[#007560]">Personal Information</h2>
                <div className="flex w-full flex-col">
                    <div className="flex gap-5">
                        <Input
                            label="Height"
                            type='text'
                            name='height'
                            for='height'
                            value={formData.height}
                            onChange={handleChange}
                        />
                        <Input
                            label="Weight"
                            type='text'
                            name='weight'
                            for='weight'
                            value={formData.weight}
                            onChange={handleChange}
                        />

                        <Input
                            label="Blood Pressure"
                            type='text'
                            name='bloodPressure'
                            for='bloodPressure'
                            value={formData.bloodPressure}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex gap-5">
                        <Input
                            label="Blood Type"
                            type='text'
                            name='bloodType'
                            for='bloodType'
                            value={formData.bloodType}
                            onChange={handleChange}
                        />
                        <Input
                            label="Genotype"
                            type='text'
                            name='genotype'
                            for='genotype'
                            value={formData.genotype}
                            onChange={handleChange}
                        />
                        <Input
                            label="Allergies"
                            type='text'
                            name='allergies'
                            for='allergies'
                            value={formData.allergies}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                    <div className=" flex justify-center mt-10 gap-10">
                    { patientData ? <EditArea onSave={() => handleEdit(formData._id)} /> : <AddArea onAdd={() => handleCreate}/> }
                    </div>
            </form>
        </div>
    );
}

export default AddEdit;