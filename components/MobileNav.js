import Link from "next/link"
import { FaTimes } from "react-icons/fa"
function MobileNav({showNav, active}){
    return(
        <ul  onClick={showNav} className={active ? "flex flex-col gap-10 items-center z-5 text-2xl font-bold fixed bg-black/10 backdrop-blur-sm inset-0 justify-center left-1/4 md:hidden" : "hidden"}>
            <FaTimes className="absolute top-7 right-5 text-3xl hover:text-red-700 cursor-pointer" onClick={showNav}/>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/patients">Patients</Link></li>
            <li><Link href="/visits">Visits</Link></li>
        </ul>
    )
}
export default MobileNav