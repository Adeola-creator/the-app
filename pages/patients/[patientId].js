
export async function getStaticPaths() {

  const res = await fetch(`http://localhost:3000/api/patients/`)
  const data = await res.json()
  const paths = data.map(patient => ({params: {patientId: patient._id}}))

  return {
    paths,
    fallback: false, 
  }
}
export async function getStaticProps(context) {
  const foundPatient = context.params.patientId
  const res = await fetch(`http://localhost:3000/api/patients/${foundPatient}`)
  const data = await res.json()
  return {
    props: { data: data},
  }
}


export default function Display({ data} ) {
  console.log(data);
  return <div>
   <h2>{data[0].firstName}</h2>
  </div>
 }
