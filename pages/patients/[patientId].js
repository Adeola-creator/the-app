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
  const data = await res.json()
  return {
    props: { data: data },
  }
}


export default function Display({ data }) {
  const currentPatient = data[0]
  console.log(currentPatient);
  const { firstName, lastName, department, phone, height, weight, nextOfKin, nextOfKinContact, gender, genotype, address, bloodPressure } = currentPatient
  return <div className="p-20 bg-gray-200">
    <Details
      title="Name"
      content={`${firstName} ${lastName}`}
    />
    <Details
      title="Department"
      content={department}
    />
    <Details
      title="Gender"
      content={gender}
    />
    <Details
      title="Address"
      content={address}
    />
    <Details
      title="Phone"
      content={phone}
    />
    <Details
      title="Height"
      content={height}
    />
    <Details
      title="Weight"
      content={weight}
    />
    <Details
      title="Blood Pressure"
      content={bloodPressure}
    />
    <Details
      title="Next Of Kin"
      content={nextOfkin}
    />
  </div>
}
