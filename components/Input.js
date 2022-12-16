
import React from "react";

function Input(props) {
  return (
    <label for={props.for} className="flex flex-col w-full mb-2 font-medium">
      {props.label}
      <input type={props.type} 
      placeholder={props.placeholder}
      name={props.name}
      value={props.value}
      className='border  bg-gray-100 rounded outline-none p-1 focus:border-[#006f5b]'/>
    </label>
  );
}

export default Input;
