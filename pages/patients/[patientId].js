import Link from "next/link"
import Modal from "../../components/Modal"
import Details from "../../components/Details"
import axios from "axios"
import Swal from "sweetalert2"

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
function handleDelete(_id) { 
 axios.delete(`http://localhost:3000/api/patients/${_id}`)
 .then(res => console.log(res, "Patient Deleted"))
 .then(
  Swal.fire({
    icon: 'success',
    title: 'Patient Deleted Successfully',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
 )
}

export default function Display({ data }) {
  const currentPatient = data
  const { firstName, lastName, department, phone, height, weight, nextOfKin, createdAt, createdBy, updatedAt, allergies, dob, nextOfKinContact, gender, genotype, address, bloodPressure, bloodType, _id } = currentPatient
  return <div className="p-5">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
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
     className="col-span-2"
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
    </div>
    

    <div className="m-2 w-full flex flex-col md:flex-row  justify-around items-center gap-10">
    <Link href={{
      pathname: `/edit/${encodeURIComponent(_id)}`}} className="bg-cyan-400 text-white p-2 rounded-lg text-center w-[25ch]">
      Edit Patient Information</Link>
      <Modal 
      action="Delete Patient"
      onDelete={() => handleDelete(_id)}
      message="Are you sure you want to delete the patient?"
      className="bg-[#ff0000] text-white p-2 rounded-lg text-center w-[25ch]" />
       <Modal 
    />
    </div>
   
  </div>
}
