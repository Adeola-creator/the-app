import { React, useEffect, useState} from "react"
import Search from "../components/Search"
import Card from "../components/Card"
import { api } from "../utils/api"

 function Patients(){
   const [patients, setPatients] =useState([])
   useEffect(() => {
      api.get("/patients")
      .then(({data}) => {
         setPatients(data.data)
      },[patients])
   })
   console.log(patients);
    return <>
        <Search />
        <button className="w-full max-w-[15ch] rounded text-white text-[#007560] font-medium border border-[#007560] p-1 ml-5 mt-5">Add Patients <i className="fa-regular fa-plus"></i></button>
        {/* {patients.map((patient, index) => <Card key={index}/>)} */}
        
    </>
 }
 export default Patients