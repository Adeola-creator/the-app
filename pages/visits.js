import React from 'react'
import Collapsible from '../components/Collapsible'
import DataTable from '../components/DataTable'
import Form from '../components/Form'

function visits() {
  return (
    <div className='md:h-screen'>
        <Collapsible 
        defaultLabel= "Record Visit"
        activeLabel= "Close Form"
        closeText= "X">
        <Form />
        </Collapsible>
        <DataTable  
        heading="Visits"/>
    </div>
  )
}

export default visits