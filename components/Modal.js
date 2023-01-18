import React, {useState} from 'react'

function Modal(props) {
    const [modal, setModal]  = useState(false)
    const [confirmDelete, setConfirmDelete] = useState(false)
    const {onDelete} = props
    function doDelete(){
        console.log("clicked delete")
       toggleModal
    }
       
    function approveDelete(){
        setConfirmDelete(true)
        {confirmDelete && onDelete}
    }
    function toggleModal (){
        setModal(!modal)
    }
  return (
    <div>
      <button className={`${props.className}`} onClick= {doDelete}>{props.action}</button>
      {modal &&  <div onClick= {toggleModal} className='left-0 right-0 top-0 bottom-0 w-screen fixed h-screen flex items-center justify-center bg-black/[.7]'>
      <div onClick= {toggleModal} className='fixed rounded  bg-white'>
      <p className="font-medium">{props.message}</p>
      <div>
      <button onClick={approveDelete}>Yes</button>
      <button onClick={toggleModal}>No</button>
      </div>
      
      </div>
    </div>}
     
    </div>
  )
}

export default Modal
