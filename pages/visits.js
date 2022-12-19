import React from 'react'
import CollasibleForm from '../components/CollasibleForm'
import DataTable from '../components/DataTable'

function visits() {
  return (
    <div>
        <CollasibleForm 
            buttonName= "Add Visits"
        />
        <DataTable 
          heading="Clinic Visits"  
        />
    </div>
  )
}

export default visits