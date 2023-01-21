
import React, {useState, useEffect}from 'react'
import DataRow from './DataRow'
import axios from 'axios'
function DataTable(props) {
    const [visits, setVisits] = useState(null)
    useEffect(() => {
        async function fetchData() {
          const response = await axios.get('http://localhost:3000/api/visits');
          setVisits(response.data);
        }
        fetchData();
      }, []);
    return (
        <div className='flex flex-col item-center justify-center p-5'>
           <h1 className='text-3xl font-bold my-2 m-auto'>{props.heading}</h1>
            <table className='w-full border-2 border-[#007560]'>
            <thead className='text-[#007560] w-full p-3 border-b-2 border-[#007560]'>
            <tr >
            <th>Date</th>
            <th>Patient Name</th>
            <th>Attendant Name</th>
            <th colSpan="2">Options</th>
            </tr>
            </thead>
            <tbody>
            <DataRow />
            {/* {visits.map((item, index) => {
                <DataRow 
                key={index}
                itemName={item.itemName}
                itemNumber={item.itemNumber}
            />
            })} */}
            </tbody>
            </table>
        </div>

    )
}

export default DataTable