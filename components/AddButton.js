import React from 'react'
import Link from 'next/link'

function AddButton(props) {
  return (
    <Link onClick={props.onClick} className="w-full max-w-[15ch] rounded text-[#007560] text-center font-medium border border-[#007560] p-1 ml-5 mt-5" href={props.route}>
    {props.title} {props.children}
  </Link>
  )
}

export default AddButton