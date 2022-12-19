import React from 'react'

function DataRow(props) {
  return (
    <tr className='text-center divide-x-2 divide-[#007560] p-2'>
    <td>{props.itemName} Drug name</td>
    <td>{props.itemNumber} Available Number</td>
    <td><button onClick><i className="fa-regular fa-pen-to-square"></i></button></td>
    <td><button><i className="fa-solid fa-trash"></i></button></td>
    </tr>
  )
}

export default DataRow