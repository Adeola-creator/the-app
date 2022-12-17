import React, { useState} from 'react'
import Card from './Card'
import axios from "axios"

function Box() {
    const [patientData, setPatientData] = useState([])
    axios.get('http://localhost:3000/api/patients')
       .then((res) => {
          const data = res.data.patients;
          setPatientData(data)
       })
       .catch(err => {
          console.log(err);
       })
  return (
    <div className='grid grid-cols-6 gap-2 p-5'>
    {patientData.map((patient, index) => 
      <Card 
      key={index}
      initial={patient.firstName[0]}
      firstName={patient.firstName}
      lastName={patient.lastName}
      department={patient.department}
      lastVisit={patient.lastVisit}
      id={patient._id}
       />)}
    </div>
  )
}

export default Box