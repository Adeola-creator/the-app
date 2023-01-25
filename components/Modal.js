import React, {useState} from 'react'
import axios from 'axios';

function Modal(props) {
    const [modal, setModal]  = useState(false)
    function toggleModal (){
        setModal(!modal)
    }
  return (
    <div>
      <button className={`${props.className}`} onClick= {toggleModal}>{props.action}</button>
      {modal &&  <div onClick= {toggleModal} className='inset-0 fixed h-screen flex items-center justify-center bg-black/[.7]'>
      <div onClick= {toggleModal} className='fixed rounded text-center p-5 bg-white'>
      <p className="font-medium text-xl">{props.message}</p>
      <div className='flex gap-5 justify-center items-center my-2'>
      <button onClick={props.onDelete} className='w-20 p-1 bg-[#ff0000]/80 text-white text-sm font-medium rounded hover:opacity-70 duration-300'>Yes</button>
      <button className="bg-slate-500 p-1 w-20 text-white text-sm font-medium rounded hover:opacity-70 duration-300"onClick={toggleModal}>No</button>
      </div>
      
      </div>
    </div>}
     
    </div>
  )
}

export default Modal
