import React from 'react'
import AddButton from './AddButton'

function EditArea(props) {
  return (
    <>
     <AddButton 
     route="#"
     onClick={props.onSave}
     title="Save"/>
    </>
  )
}

export default EditArea
