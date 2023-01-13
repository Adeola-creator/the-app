import { React} from "react";

function Card(props) {
    const { initial, firstName, lastName, department, lastVisit,children, itemName, itemNumber} = props
    return (
        <div className="relative py-8 px-3 h-60 items-center justify-center w-full max-w-[30ch] flex flex-col shadow-lg rounded-lg ">
            <h1 className="text-2xl font-black text-[#007560]">{initial || itemName}</h1>
            <p className="font-medium py-1">{firstName} {lastName}</p>
            <p className="text-md">{department || itemNumber}</p>
           {children}
        </div>
    );
}
export default Card;
