import AddEdit from "../../components/AddEdit";
import axios from "axios";

export async function getStaticPaths() {
  const res = await axios.get(`http://localhost:3000/api/patients/`);
  const staticPaths = await res.data;
  const paths = staticPaths.map(patient => ({ params: { patientId: patient._id } }))
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await axios.get(`http://localhost:3000/api/patients/${params.patientId}`);
  const data = res.data;
  console.log(data)
  return { props: { data } };
}


function EditPage({data}){
  const currentPatient = data[0]
return (<div>
    <AddEdit
    patientData={currentPatient}
    heading="Update Patient"/>
    </div>
  )
}
export default EditPage;