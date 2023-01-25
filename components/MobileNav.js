import Link from "next/link"
import { FaTimes } from "react-icons/fa"
function MobileNav({showNav, active}){
    return(
        <ul className={active ? "flex flex-col gap-10 items-center text-xl font-bold fixed bg-black/5 backdrop-blur-sm inset-0 justify-center left-1/4 md:hidden" : "hidden"}>
            <FaTimes className="absolute top-7 right-5 text-3xl" onClick={showNav}/>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/patients">Patients</Link></li>
            <li><Link href="/visits">Visits</Link></li>
        </ul>
    )
}
export default MobileNav