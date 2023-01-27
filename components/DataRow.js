import React from 'react'

function DataRow(props) {
  return (
    <tr className='text-center divide-x-2 divide-[#007560] p-2'>
    <td className='whitespace-nowrap'>{props.visitDate}1</td>
    <td className='whitespace-nowrap'>{props.patientName}1</td>
    <td className='whitespace-nowrap'>{props.attendantName}1</td>
    <td className='whitespace-nowrap'>{props.drugs}1</td>
    <td className='whitespace-nowrap'>{props.observations}1</td>
    </tr>
  )
}

export default DataRow