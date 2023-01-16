import { React } from "react";
import Link from "next/link";

function Card(props) {
    const { id, initial, firstName, lastName, department, lastVisit} = props
    return (
        <div className="relative py-8 px-3 h-60 items-center justify-center w-full max-w-[30ch] flex flex-col shadow-lg rounded-lg ">
            <h1 className="text-2xl font-black text-[#007560]">{initial}</h1>
            <p className="font-medium py-1">{firstName} {lastName}</p>
            <p className="text-md">{department}</p>
            <p className="text-sm py-1"><span className="font-medium">Last Visit:</span>{lastVisit}</p>
            <hr className="w-20 h-0.5 m-1 bg-[#007560] border border-[#007560] rounded-md" />
            <div>
                <Link href={{
                    pathname: `/patients/${encodeURIComponent(id)}`
                }} className="py-1 px-5 mt-20 text-xs font-bold text-white bg-[#007560] rounded">More</Link>
            </div>
        </div>
    );
}
export default Card;
