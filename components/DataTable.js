
import React, {useState, useEffect}from 'react'
import DataRow from './DataRow'
import axios from 'axios'
function DataTable(props) {
    const [visits, setVisits] = useState([])
    useEffect(() => {
        async function fetchData() {
          const res = await axios.get('http://localhost:3000/api/visits');
          const data = res.data
          setVisits(res.data);
          console.log(data);
        }
        fetchData();
      }, []);
    return (
        <div className='flex flex-col item-center justify-center p-5'>
           <h1 className='text-3xl font-bold my-2 m-auto'>{props.heading}</h1>
           <div className='overflow-auto rounded-lg shadow'>
            <table className='w-full border-2 border-[#007560]'>
            <thead className='text-[#007560] w-full p-3 tracking-wide text-left border-b-2 border-[#007560]'>
            <tr >
            <th className='w-10'>Date</th>
            <th className='w-30'>Patient Name</th>
            <th className='w-30'>Attendant Name</th>
            <th className='w-30'>Drugs</th>
            <th className='w-50'>0bservations</th>
            </tr>
            </thead>
            <tbody>
            <DataRow />
            {visits.map((visit, index) => {
                <DataRow 
                key={index}
                visitDate={visit.visitDate}
                patientName={visit.patientName}
                attendantName={visit.attendantName}
            />
            })} 
            </tbody>
            </table>
            </div>
        </div>

    )
}

export default DataTable