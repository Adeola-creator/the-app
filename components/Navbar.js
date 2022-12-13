import Image from "next/image"

function Navbar (){
    return <nav >
        <Image src="/logo.png" alt="GPI Logo" width={300} height= {80}/>
        <ul>
            <li><a>Patients</a></li>
            <li><a>Stock</a></li>
        </ul>
    </nav>
}
export default Navbar