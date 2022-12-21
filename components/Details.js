import React from 'react'

function Details(props) {
  return (
    <div className='flex flex-col w-full'>
        <h1 className='text-xl font-bold'>
            {props.title}
        </h1>
        <h2 className='text-xl p-1'>
        {props.content}
    </h2>
    </div>
    
  )
}

export default Details