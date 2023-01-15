import Link from "next/link"
import Details from "../../components/Details"

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3000/api/patients/`)
  const data = await res.json()
  const paths = data.map(patient => ({ params: { patientId: patient._id } }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const foundPatientId = context.params.patientId
  const res = await fetch(`http://localhost:3000/api/patients/${foundPatientId}`)
  const data = await res.json();
  return {
    props: { data: data[0]},
  }
}


export default function Display({ data }) {
  const currentPatient = data
  const { firstName, lastName, department, phone, height, weight, nextOfKin, createdAt, createdBy, updatedAt, allergies, nextOfKinContact, gender, genotype, address, bloodPressure, bloodType, _id } = currentPatient
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

    <div className="m-2 w-full flex justify-center items-center">
    <Link href={{
      pathname: `/create/${encodeURIComponent(_id)}`}} className="bg-[#006f5b] text-white p-2 rounded">
      Edit Patient Details</Link>
      
    </div>
  </div>
}
