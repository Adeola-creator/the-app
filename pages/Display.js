import React from 'react'

function Display() {
    const [patient, setPatient] = useState({})
    axios.get('http://localhost:3000/api/patients/?[patientId]')
       .then((res) => {
        //   const data = res.data.patients;
          console.log(res.data)
       })
       .catch(err => {
          console.log(err);
       })
  return (
    <div>
    
    </div>
  )
}

export default Display