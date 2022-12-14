import Image from "next/image"

function Navbar (){
    return <nav className="flex justify-between item-center w-full sticky top-0 bg-gray-100 px-10 py-5">
        <Image className="" src="/logo.png" alt="GPI Logo" width={150} height= {50}/>
        <ul className="flex">
            <li className="m-4 px-5"><a className="duration-300 hover:opacity-50" href="#">Patients</a></li>
            <li className="m-4 px-5"><a className="duration-300 hover:opacity-50" href="#">Stock</a></li>
            <li className="m-4 px-5"><a className="duration-300 hover:opacity-50" href="#">Visits</a></li>
        </ul>
    </nav>
}
export default Navbar