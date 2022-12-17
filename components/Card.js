import { React} from "react";

function Card(props) {
    const {id} = props
    return (
        <div className="relative py-8 px-3 h-60 items-center justify-center w-full max-w-[25ch] flex flex-col shadow-lg rounded-lg ">
            <h1 className="text-2xl font-black text-[#007560]">{props.initial}</h1>
            <p className="font-medium py-1">{props.firstName} {props.lastName}</p>
            <p className="text-md">{props.department}</p>
            <p className="text-sm py-1"><span className="font-medium">Last Visit:</span>{props.lastVisit}</p>
            <hr className="w-20 h-0.5 m-1 bg-[#007560] border border-[#007560] rounded-md"/>
            <div>
            <button className="p-1 my-2 text-xs text-white bg-[#007560] rounded w-20"><a  href='#'>More</a></button>
            </div>
           
        </div>
    );
}
export default Card;
