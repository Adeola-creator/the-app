import { React } from "react"
import Search from "../components/Search"
import Box from "../components/Box"


function Patients() {
   return <>
      <Search />
      <button className="w-full max-w-[15ch] rounded text-[#007560] font-medium border border-[#007560] p-1 ml-5 mt-5"><a href="/create">Add Patients <i className="fa-regular fa-plus"></i></a></button>
      <Box />
   </>
}
export default Patients