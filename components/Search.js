import { useState } from "react";
function Search(props) {
  const [searchTerm, setSearchTerm] = useState("")
  return (
    <div className="flex bg-gray-50 p-10 w-full justify-center shadow">
      <input name="searchTerm" 
      value= {searchTerm} 
      onChange={(e)=> {setSearchTerm(e.target.value)
      props.onSearch(searchTerm)
      }} className="w-full max-w-[60ch] p-3 rounded-md text-center text-sm mx-5 outline-none duration-300 hover:opacity-70 hover:mx-5 focus:outline-[#007560] focus:outline-1 shadow-lg" placeholder="Quick Search" type="text" />
      {/* <button className="w-full max-w-[30ch] bg-[#007560] text-white text-sm text-extrabold  duration-200 hover:bg-white hover:text-[#006f5b] hover:border hover:border-[#006f5b] shadow">Search</button> */}
    </div>
  );
}

export default Search;
