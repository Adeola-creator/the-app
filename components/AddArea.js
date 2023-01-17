import React from 'react'

function AddArea(props) {
  return (
    <>
    <button onClick={props.onAdd} className="max-w-[10ch] text-white bg-[#007560] text-sm font-bold w-20 rounded-3xl p-1"><a>Add <i className="fa-solid fa-user-plus"></i></a></button>
    <button className="max-w-[10ch] text-[#007560] text-sm font-bold border border-[#007560] w-20 rounded-3xl p-1"><a href="../patients">Cancel</a></button>
</>
  )
}

export default AddArea