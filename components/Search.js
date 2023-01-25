import { useState, useEffect } from "react";

function Search(props) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    props.onSearch(searchTerm)
  }, [searchTerm]);
  
  return (
    <div className="flex bg-gray-50 p-10 w-full justify-center mb-5 shadow">
      <input
        name="searchTerm"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        className="w-full max-w-[60ch] p-3 rounded-md text-center text-sm mx-5 outline-none duration-300 hover:opacity-70 hover:mx-5 focus:outline-[#007560] focus:outline-1 shadow-lg"
        placeholder="Quick Search"
        type="text"
      />
    </div>
  );
}

export default Search;
