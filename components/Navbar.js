import Image from "next/image"
import NavLink from "./NavLink"

function Navbar() {
    return <nav className="flex justify-between item-center w-full max-w-screen sticky top-0 px-10 py-3">
        <Image className="" src="/logo.png" alt="GPI Logo" width={150} height={50} />
        <ul className="flex">
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
    </nav>
}
export default Navbar