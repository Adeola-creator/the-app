import React from 'react'
import AddButton from './AddButton'

function EditArea(props) {
  return (
    <>
     <AddButton 
     route={props.link}
     onClick={props.onSave}
     title="Save"/>
    </>
  )
}

export default EditArea
