
import React, {useState }from 'react'
import DataRow from './DataRow'
import axios from 'axios'
function DataTable(props) {
    const [visits, setVisits] = useState([])
     axios.get('http://localhost:3000/api/visits')
       .then((res) => {
          const data = res.data.visits;
          setItems(data)
       })
       .catch(err => {
          console.log(err);
       })
    return (
        <div className='flex flex-col item-center justify-center p-5'>
           <h1 className='text-3xl font-bold my-2 m-auto'>{props.heading}</h1>
            <table className='w-full border border-2 border-[#007560]'>
            <thead className='bg-[#007560] text-white w-full p-2'>
            <tr >
            <th>Item Name</th>
            <th>Item Number</th>
            <th></th>
            <th></th>
            </tr>
            </thead>
            <tbody>
            <DataRow />
            {/* {items.map((item, index) => {
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