import React from 'react'

function Display(props) {
  return (
    <div>
     <h2>{props.firstName} {props.lastName}</h2>
    </div>
  )
}

export default Display