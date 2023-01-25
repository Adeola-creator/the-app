import React from 'react'
import Link from 'next/link'

function DataRow(props) {
  return (
    <tr className='text-center divide-x-2 divide-[#007560] p-2'>
    <td>{props.visitDate} Date</td>
    <td>{props.patientName} Patient Name</td>
    <td>{props.attendantName} Attendant Name</td>
    <td><Link className="" href="#">View Patient  <i className="fa-regular fa-user"></i> </Link></td>
    <td><Link href="#">View Patient Visits</Link></td>
    </tr>
  )
}

export default DataRow