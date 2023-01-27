import React from 'react'

function DataRow(props) {
  return (
    <tr className='text-center divide-x-2 divide-[#007560] p-2'>
    <td>{props.visitDate}1</td>
    <td>{props.patientName}1</td>
    <td>{props.attendantName}1</td>
    <td>{props.drugs}1</td>
    <td>{props.observations}1</td>
    </tr>
  )
}

export default DataRow