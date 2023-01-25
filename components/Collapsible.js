import { useState } from "react"

function Collapsible (props){
    const [isOpen, setIsOpen] = useState(false)
    return <div className="p-2 w-full">
        <button className="bg-[#007560] rounded-lg mb-1 p-2 text-white font-semibold hover:bg-white hover:text-[#007560] hover:border hover:border-[#007560]"onClick={() => setIsOpen(!isOpen)} >
        {isOpen? props.activeLabel: props.defaultLabel}
        </button>
      {isOpen && <div className="relative">
      {props.children}
      <button className="absolute right-0 top-0 font-bold hover:text-red-500" 
      onClick={() => setIsOpen(false)}>
      {props.closeText}</button>
        </div>}
    </div>
}

export default Collapsible