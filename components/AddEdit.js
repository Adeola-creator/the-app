
import axios from "axios";
import React, { useEffect, useState } from "react";
import AddArea from "./AddArea";
import Input from "./Input";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

function AddEdit(props) {
    const { patientData, heading } = props;
    const router = useRouter()
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const [formData, setFromData] = useState(patientData && patientData._id ?
        {
            ...patientData,
            dob: patientData.dob.slice(0, 10)
        } : {
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

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const validate = (values) => {
        const errors = {}
        if (!values.firstName) {
            errors.firstName = "First name is required!"
        }
        if (!values.lastName) {
            errors.lastName = "Last name is required!"
        }
        if (!values.phone) {
            errors.phone = "Phone number is required!"
        }
        if (!values.address) {
            errors.address = "Address is required!"
        }
        if (!values.dob) {
            errors.dob = "Date of birth is required!"
        }
        if (!values.gender) {
            errors.gender = "Gender is required!"
        }
        if (!values.nextOfKin) {
            errors.nextOfKin = "Next of kin is required!"
        }
        if (!values.nextOfKinContact) {
            errors.nextOfKinContact = "Next of Kin Contact is required!"
        }
        if (!values.department) {
            errors.department = "Department is required!"
        }
        if (!values.createdBy) {
            errors.createdBy = "Attendant name is required!"
        }
        if (!values.weight) {
            errors.weight = "Weight is required!"
        }
        if (!values.height) {
            errors.height = "Height is required!"
        }
        if (!values.bloodPressure) {
            errors.bloodPressure = "Blood pressure is required!"
        }
        if (!values.bloodType) {
            errors.bloodType = "Blood type is required!"
        }
        if (!values.allergies) {
            errors.allergies = "Allergies is required!"
        }
        if (!values.genotype) {
            errors.genotype = "Geno type is required!"
        }
        return errors
    }
    useEffect(() => {
        if (Object.keys(formErrors) === 0 && isSubmit) {
            
        }
    }, [formErrors])
    function handleChange(e) {
        const { name, value } = e.target
        setFromData(prevValues => ({
            ...prevValues,
            [name]: value
        }))
    }
    function handleCreate(e) {
        e.preventDefault()
        setFormErrors(validate(formData))
        setIsSubmit(true)
            axios.post('http://localhost:3000/api/patients', {
                ...formData
            })
                .then(() => {
                    Toast.fire({
                        icon: 'success',
                        title: 'Patient created successfully'
                    })

                })
                .then(() => { router.push(`/patients`) }
                )
                .catch(err => console.log(err, "Couldn't create patient"))
        return;
    }
    function callEdit(e) {
        e.preventDefault()
        setFormErrors(validate(formData))
        setIsSubmit(true)
        const { _id } = patientData
        handleEdit(_id)
    }
    function handleEdit(id) {
        axios.patch(`http://localhost:3000/api/patients/${id}`, { ...formData })
            .then(() => 
            {Toast.fire({
                icon: 'success',
                title: 'Patient updated successfully'
            })

            console.log("Patient updated successfully")})
            .then(() => { router.push(`/patients/${id}`)})
            .catch(err => console.log(err))
    }

    return (
        <div className="flex justify-center ">
            <form className="p-5 w-full">
                <h1 className="select-none text-3xl text-[#006f5b] font-medium mb-4">{heading}</h1>
                <div className="flex flex-col md:flex-row w-full gap-1 md:gap-6 xl:gap-10">
                    <Input
                        label="First Name"
                        placeholder="first name"
                        type='text'
                        name="firstName"
                        for='firstName'
                        value={formData.firstName}
                        onChange={handleChange}
                    >
                        <p className="text-red-700">{formErrors.firstName}</p>
                    </Input>
                    <Input
                        label="Last Name"
                        placeholder="last name"
                        type='text'
                        for='lastName'
                        name='lastName'
                        value={formData.lastName}
                        onChange={handleChange}
                    >
                        <p className="text-red-700">{formErrors.lastName}</p>
                    </Input>
                </div>
                <div className="flex flex-col md:flex-row w-full gap-1 gap-2 md:gap-6">
                    <Input
                        label="Phone"
                        placeholder="eg.0812345678"
                        type='text'
                        name='phone'
                        for='phone'
                        value={formData.phone}
                        onChange={handleChange}
                    >
                        <p className="text-red-700">{formErrors.phone}</p>
                    </Input>
                    <Input
                        label="Address"
                        placeholder="address"
                        type='text'
                        name="address"
                        for='address'
                        value={formData.address}
                        onChange={handleChange}
                    >
                        <p className="text-red-700">{formErrors.address}</p>
                    </Input>
                </div>
                <div className="flex flex-col md:flex-row w-full gap-1 md:gap-6">
                    <Input
                        label="Date of Birth"
                        type='date'
                        name='dob'
                        for='dob'
                        value={formData.dob}
                        onChange={handleChange}
                    >
                         <p className="text-red-700">{formErrors.dob}</p>
                    </Input>
                    <label className="w-full flex flex-col">
                        Gender
                        <select name="gender" value={formData.gender} onChange={handleChange} className="border bg-gray-100  outline-none rounded h-10">
                            <option>Select</option>
                            <option className="hover:bg-[#007560]">Male</option>
                            <option className="hover:bg-[#007560]">Female</option>
                        </select>
                        <p className="text-red-700">{formErrors.gender}</p>
                    </label>

                </div>
                <div className="flex flex-col md:flex-row w-full gap-1 md:gap-6">
                    <Input
                        label="Next of Kin"
                        placeholder='Enter a name'
                        type='text'
                        name='nextOfKin'
                        for='nextOfKin'
                        value={formData.nextOfKin}
                        onChange={handleChange}
                    >
                         <p className="text-red-700">{formErrors.nextOfKin}</p>
                        </Input>
                    <Input
                        label="Next of Kin Contact"
                        placeholder="Enter a contact"
                        type='text'
                        name="nextOfKinContact"
                        for='nextOfKinContact'
                        value={formData.nextOfKinContact}
                        onChange={handleChange}
                    >
                         <p className="text-red-700">{formErrors.nextOfKinContact}</p>
                    </Input>
                </div>
                <div className="flex flex-col md:flex-row gap-1 md:gap-6">
                    <Input
                        label="Department"
                        placeholder="department"
                        type='text'
                        name="department"
                        for='department'
                        value={formData.department}
                        onChange={handleChange}

                    >
                         <p className="text-red-700">{formErrors.department}</p>
                        </Input>
                    <Input
                        label="Attendant Name"
                        type='text'
                        name='createdBy'
                        placeholder='Enter your name'
                        for='createdBy'
                        value={formData.createdBy}
                        onChange={handleChange}
                    >
                         <p className="text-red-700">{formErrors.createdBy}</p>
                    </Input>

                </div>
                <h2 className="text-xl my-2 font-semibold text-[#007560]">Personal Information</h2>
                <div className="flex w-full flex-col">
                    <div className="flex flex-col md:flex-row md:gap-5 gap-2">
                        <Input
                            label="Height"
                            type='text'
                            name='height'
                            for='height'
                            value={formData.height}
                            onChange={handleChange}
                        >
                             <p className="text-red-700">{formErrors.height}</p>
                        </Input>
                        <Input
                            label="Weight"
                            type='text'
                            name='weight'
                            for='weight'
                            value={formData.weight}
                            onChange={handleChange}
                        >
                             <p className="text-red-700">{formErrors.weight}</p>
                        </Input>

                        <Input
                            label="Blood Pressure"
                            type='text'
                            name='bloodPressure'
                            for='bloodPressure'
                            value={formData.bloodPressure}
                            onChange={handleChange}
                        >
                             <p className="text-red-700">{formErrors.bloodPressure}</p>
                        </Input>
                    </div>
                    <div className="flex flex-col md:flex-row md:gap-5 gap-2">
                        <Input
                            label="Blood Type"
                            type='text'
                            name='bloodType'
                            for='bloodType'
                            value={formData.bloodType}
                            onChange={handleChange}
                        >
                             <p className="text-red-700">{formErrors.bloodType}</p>
                        </Input>
                        <Input
                            label="Genotype"
                            type='text'
                            name='genotype'
                            for='genotype'
                            value={formData.genotype}
                            onChange={handleChange}
                        >
                             <p className="text-red-700">{formErrors.genotype}</p>
                             </Input>
                        <Input
                            label="Allergies"
                            type='text'
                            name='allergies'
                            for='allergies'
                            value={formData.allergies}
                            onChange={handleChange}
                        >
                             <p className="text-red-700">{formErrors.allergies}</p>
                        </Input>
                    </div>
                </div>
                <div className=" flex justify-center mb-10 gap-10 md:mb-10">
                    {patientData ?
                        <button onClick={(e) => callEdit(e)} className="px-10 py-2 w-50 rounded font-sm text-center font-medium text-[#007560] border border-[#007560] m-5 shadow duration-200 hover:bg-[#007560] hover:text-white">Save</button>
                        : <AddArea onAdd={(e) => handleCreate(e)} />}
                </div>
            </form>
        </div>
    );
}

export default AddEdit;