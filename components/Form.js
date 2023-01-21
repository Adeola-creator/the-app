import axios from 'axios'
import React, {useEffect, useState} from 'react'
import Input from './Input'

function Form(props) {
  const [visitForm, setVisitForm] = useState({
    visitDate: "",
    patientName: "",
    attendantName: "",
    drugs:  "",
    observation: "",
  })
  const addVisit = (visitForm) => {
    axios.post("http://localhost/3000/visits",{
      ...visitForm})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  const handleEnter= (e) => {
    console.log(e.key);
    if (e.key === "Enter") {	
      addVisit()
    }
  }
  function handleChange(e){
    const {name, value}= e.target
    setVisitForm(prevValue => ({
      ...prevValue,
      [name]:value
    }))
  }
  return (
    <div>
    <form 
    onKeyDown={handleEnter}
    className='mx-2 pt-4'>
    <label 
    className='flex flex-col font-medium w-full'
    >
    Date:
    <input 
    required
    type="date"
    name="visitDate"
    value={visitForm.visitDate}
    onChange={handleChange}	
    className="select-none outline-none border"/>
    </label>
    <Input 
    label="Patient Name:" 
    name="patientName"
    value={visitForm.patientName}
    onChange={handleChange}/>

    <Input 
    label= "Attendant Name:"
    name="attendantName"
    value={visitForm.attendantName}
    onChange={handleChange}
    />
    <Input 
    label= "Drugs Administered:"
    name="drugs"
    value={visitForm.drugs}
    onChange={handleChange}
    />
    <label className='flex flex-col'>
    Observation:
    <textarea 
    required
    name="observation"
    value={visitForm.observation}
    placeholder="Note down observations"
    onChange={handleChange}
    className='border rounded focus:outline-none'></textarea>
    </label>
    </form>
    </div>
  )
}

export default Form