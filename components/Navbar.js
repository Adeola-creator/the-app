import Image from "next/image"
import Link from "next/link"

function Navbar() {
    return <nav className="flex justify-between item-center w-full sticky top-0 px-10 py-3">
        <Image className="" src="/logo.png" alt="GPI Logo" width={150} height={50} />
        <ul className="flex">
            <Link className="duration-300 hover:opacity-50 text-bold text-lg m-4 px-5" href="/">Home</Link>
            <Link className="duration-300 hover:opacity-50 text-bold text-lg m-4 px-5" href="/patients">Patients</Link>
            <Link className="duration-300 hover:opacity-50 text-bold text-lg m-4 px-5" href="/stock">Stock</Link>
            <Link className="duration-300 hover:opacity-50 text-bold text-lg m-4 px-5" href="/visits">Visits</Link>
        </ul>
    </nav>
}
export default Navbar