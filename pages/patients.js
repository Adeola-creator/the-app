import { React, useState } from "react"
import Search from "../components/Search"
import Box from "../components/Box"
import axios from "axios"


function Patients() {
   const [isSearching, setIsSearching] = useState(false)
   const [patientData, setPatientData] = useState([])
   const [searchPatients, setSearchPatients] = useState([])
   axios.get('http://localhost:3000/api/patients')
      .then((res) => {
         const data = res.data.patients;
         setPatientData(data)
      })
      .catch(err => {
         console.log(err);
      })
   function handleSearch(search) {
      if(search){
         setIsSearching(true)
        const  newPatientList = patientData.filter((patient) => {
            Object.values(patient)
            .join(" ")
            .toLowerCase()
            .includes(search.toLowerCase())
         })
         setSearchPatients(newPatientList)
         console.log(newPatientList)
      }
   }
   return <>
      <Search onSearch={handleSearch} />
      <button className="w-full max-w-[15ch] rounded text-[#007560] font-medium border border-[#007560] p-1 ml-5 mt-5"><a href="/create">Add Patients <i className="fa-regular fa-plus"></i></a></button>
      <Box 
         data= {isSearching? searchPatients :patientData}
      />
   </>
}
export default Patients