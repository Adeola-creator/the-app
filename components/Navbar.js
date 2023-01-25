import Image from "next/image"
import { useState } from "react"
import MobileNav from "./MobileNav"
import NavLink from "./NavLink"
import { FaBars} from "react-icons/fa"

function Navbar() {
    const [active, setActive] = useState(false)
    const showNav = () =>{
        setActive(!active)
    }
    return <header>
         <div className="flex justify-between item-center w-full text-[#007560] top-0 px-10 py-3">
        <Image className="" src="/logo.png" alt="GPI Logo" width={150} height={50} />
        <nav>
            <div className="absolute right-5 top-7 text-2xl justify-center items-center md:hidden">
                <FaBars onClick={showNav}/>
            </div>
        <ul className="hidden md:flex">
            <NavLink
            title="Home"
            route="/"/>
            <NavLink
            title="Patients"
            route="/patients"/>
           <NavLink 
           title="Visits"
            route="/visits"/>
        </ul>
        <MobileNav 
        showNav={showNav} 
        active= {active}/>
        </nav>
    </div>
    <hr/>
    </header>
   
}
export default Navbar