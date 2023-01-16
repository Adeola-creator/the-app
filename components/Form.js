import axios from 'axios'
import React, {useEffect, useState} from 'react'
import Input from './Input'

function Form() {
const [patientList, setPatientList] = useState([])

useEffect(() =>{
    axios.get("http://localhost:3000/api/patients")
    .then(res => {res.data.json()})
    .then(patients => {setPatientList(patients)})
    .catch(err => console.log(err))
}, []);
console.log(patientList);
const patientNames = patientList.map(patient => patient.firstName + ' ' + patient.lastName)
  return (
    <div>
    <form>
    <Input 
    label= "Date"
    name="visitDate"
    />
    <label className='flex flex-col'>
    Patient Name
    <select name="" id="">
    <option>Select</option>
    {patientNames.map((name,index) => (<option key={index}>{name}</option>))}
    </select>
    </label>

    <Input 
    label= "Attendant Name"
    name="attendantName"
    />
    <label className='flex flex-col'>
    Observation
    <textarea className='border rounded'></textarea>
    </label>
    <Input 
    label= "Drugs"
    name="drugs"
    />
    
    </form>
    </div>
  )
}

export default Form