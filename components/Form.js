import axios from 'axios'
import React, {useState} from 'react'
import Input from './Input'
import Swal from 'sweetalert2'

function Form() {
  const [visitForm, setVisitForm] = useState({
    visitDate: "",
    patientName: "",
    attendantName: "",
    drugs:  "",
    observation: "",
  })
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})
  const addVisit = () => {
    axios.post("http://localhost:3000/api/visits",{
      ...visitForm})
      .then((response) => {
        Toast.fire({
          icon: 'success',
          title: 'Visit saved successfully'
      })
        console.log(response);
      })
      .catch((error) => {
         console.log(error);
      })
  }
  function handleChange(e){
    const {name, value}= e.target
    setVisitForm((prevValue) => ({
      ...prevValue,
      [name]:value
    }))
  }
  return (
    <div>
    <form 
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
    className='border rounded focus:outline-none p-2'></textarea>
    </label>
   <button onClick={()=>addVisit()} className='rounded-lg border p-1 my-2 px-3'>Save Visit</button>
    </form>
    </div>
  )
}

export default Form