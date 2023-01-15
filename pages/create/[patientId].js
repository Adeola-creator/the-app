import Create from ".";

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

function EditPage({data}){
return (<div>
    <h1>{data}</h1>
    <Create 
    heading="Update Patient"/>
    </div>
  )
}
export default EditPage;