import { useEffect } from "react"
import Link from "next/link"
import Modal from "../../components/Modal"
import Details from "../../components/Details"
import axios from "axios"

export async function getStaticPaths() {
  const res = await axios.get(`http://localhost:3000/api/patients`)
  const data = await res.data
  const paths = data.map(patient => ({ params: { patientId: patient._id } }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({params}) {
  const patientId = params.patientId
  const res = await axios.get(`http://localhost:3000/api/patients/${patientId}`)
  const data = await res.data;
  return {
    props: { data: data[0]},
    revalidate: 5
  }
}
function handleDelete(patientId) {
 axios.delete(`http://localhost:3000/api/patients/${patientId}`)
 .then(res => console.log(res, "Deleted"))
}

export default function Display({ data }) {
  const currentPatient = data
  const { firstName, lastName, department, phone, height, weight, nextOfKin, createdAt, createdBy, updatedAt, allergies, dob, nextOfKinContact, gender, genotype, address, bloodPressure, bloodType, _id } = currentPatient
  return <div className="p-20 bg-gray-200">
    <Details
      title="Name:"
      content={`${firstName} ${lastName}`}
    />
    <Details
      title="Department:"
      content={department}
    />
    <Details
      title="Gender:"
      content={gender}
    />
    <Details
      title="Address:"
      content={address}
    />
    <Details
      title="Phone Number:"
      content={phone}
    />
    <Details
      title="Height:"
      content={height}
    />
    <Details
      title="Weight:"
      content={weight}
    />
    <Details
    title="Date of Birth:"
    content={dob.slice(0,10)}
  />
    <Details
      title="Blood Pressure:"
      content={bloodPressure}
    />
    <Details
      title="Genotype:"
      content={genotype}
    />
    <Details
      title="Blood Type:"
      content={bloodType}
    />
    <Details
      title="Allergies:"
      content={allergies}
    />
    <Details
      title="Next Of Kin:"
      content={nextOfKin}
    />
    <Details
      title="Next Of Kin Contact:"
      content={nextOfKinContact}
    />
    <Details
      title="Attendant Name:"
      content={createdBy}
    />
    <Details
      title="Profile Created At:"
      content={createdAt.slice(0,10)}
    />
    <Details
      title="Profile Last Updated At:"
      content={updatedAt.slice(0,10)}
    />

    <div className="m-2 w-full flex justify-center items-center gap-20">
    <Link href={{
      pathname: `/edit/${encodeURIComponent(_id)}`}} className="bg-[#006f5b] text-white p-2 rounded-lg text-center w-[25ch]">
      Edit Patient Information</Link>
      <Modal 
      action="Delete Patient"
      onDelete={(_id) => handleDelete(_id)} 
      message="Are you sure you want to delete the patient?"
      className="bg-[#ff0000] text-white p-2 rounded-lg text-center w-[25ch]" />
    </div>
    <Modal 
    />
  </div>
}
