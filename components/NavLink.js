import Link from "next/link";

function NavLink (props){
    return (<Link className="duration-300 hover:opacity-75 font-medium text-[#007560] text-lg m-4 px-5 focus:border-b-4 focus:border-b-[#007560]" href={`${props.route}`}>{props.title}</Link>)
}

export default NavLink