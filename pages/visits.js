import React from 'react'
import Collapsible from '../components/Collapsible'
import DataTable from '../components/DataTable'
import Form from '../components/Form'

function visits() {
  return (
    <div>
        <Collapsible 
        label= "Record Visit"
        closeText=<i class="fa-regular fa-x"></i>>
        <Form />
        </Collapsible>
        <DataTable  
        heading="Visits"/>
    </div>
  )
}

export default visits