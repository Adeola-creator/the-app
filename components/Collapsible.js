import { useState } from "react"

function Collapsible (props){
    const [isOpen, setIsOpen] = useState(false)
    return <div className="p-2">
        <button className="bg-[#007560] rounded-lg mb-1 p-2 text-white font-semibold hover:bg-white hover:text-[#007560] hover:border hover:border-[#007560]"onClick={() => setIsOpen(!isOpen)} >
        {props.label}
        </button>
      {isOpen && <div >
      {props.children}
        </div>}
    </div>
}

export default Collapsible