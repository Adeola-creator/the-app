
import React from "react";

function Input(props) {
  const {label, type, placeholder, name, value, onChange} = props
  return (
    <label className="flex flex-col w-full mb-2 font-medium">
      {label}
      <input required type={type} 
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className='border  bg-gray-50 rounded outline-none p-1 focus:border-[#006f5b] focus:bg-none'/>
    </label>
  );
}

export default Input;