import React from 'react'

function AddArea(props) {
  return (
    <div className='m-5 flex justify-center gap-10'>
    <button onClick={props.onAdd} className="max-w-[10ch] text-white bg-[#007560] text-sm font-bold w-20 rounded-3xl p-1 hover:bg-white hover:text-[#007560] hover:border-[#007560] hover:border"><a>Add <i className="fa-solid fa-user-plus"></i></a></button>
    <button className="max-w-[10ch] text-red-700 text-sm font-bold border border-red-700 w-20 rounded-3xl p-1 hover:opacity-50"><a href="../patients">Cancel</a></button>
</div>
  )
}

export default AddArea