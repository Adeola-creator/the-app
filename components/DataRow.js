import React from 'react'

function DataRow(props) {
  console.log(props)
  return (
    <tr className='text-center divide-x-2 divide-[#007560] p-2'>
    <td className='whitespace-nowrap'>{props.visitDate}</td>
    <td className='whitespace-nowrap'>{props.patientName}</td>
    <td className='whitespace-nowrap'>{props.attendantName}</td>
    <td className='whitespace-nowrap'>{props.drugs}</td>
    <td className='whitespace-nowrap'>{props.observations}</td>
    </tr>
  )
}

export default DataRow