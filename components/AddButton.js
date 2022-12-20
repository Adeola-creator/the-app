import React from 'react'
import Link from 'next/link'

function AddButton(props) {
  return (
    <Link className="w-full max-w-[15ch] rounded text-[#007560] font-medium border border-[#007560] p-1 ml-5 mt-5" href={props.route}>
    {props.title} <i className="fa-regular fa-plus"></i>
  </Link>
  )
}

export default AddButton