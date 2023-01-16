import React from 'react'
import Collapsible from '../components/Collapsible'
import Form from '../components/Form'

function visits() {
  return (
    <div>
        <Collapsible label= "Record Visit">
        <Form />
       
        </Collapsible>
        <Collapsible label= "Record Visit">
        <input type="date" name="" id="" />
        <input type="color" name="" id="" />
        </Collapsible>
    </div>
  )
}

export default visits