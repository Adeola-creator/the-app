import { React, useState, useEffect } from "react";
import Search from "/components/Search"
import Box from "/components/Box";
import axios from "axios";
import Link from "next/link";

function Patients() {
  const [isSearching, setIsSearching] = useState(false);
  const [patientData, setPatientData] = useState([]);
  const [searchPatients, setSearchPatients] = useState([]);
  const [searchData, setSearchData] = useState("");
  const keys = ["firstName", "lastName", "department"];
  useEffect(() => {
    const fetchData = async () => {
      axios
        .get("http://localhost:3000/api/patients")
        .then((res) => {
          const data = res.data;
          setPatientData(data);
          setPatientData(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  function handleSearch(search) {
    setSearchData(search);
    console.log(search)
  }

  const handleSearchResults = () => {
    if (searchData !== "") {
      return patientData.filter((patient) => {
        for (const key of keys) {
          if (patient[key].toLowerCase().includes(searchData.toLowerCase())) {
            return true;
          }
        }
        return false;
      });
    }
  };

  useEffect(() => {
    const searchResults = handleSearchResults();
    if (searchResults) {
      setSearchPatients(searchResults);
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
  }, [searchData]);

  return (
    <>
      <Search onSearch={handleSearch} />
      <button className="w-full max-w-[15ch] rounded text-[#007560] font-medium border border-[#007560] p-1 ml-5 mt-5">
        <Link href="/create">
          Add Patients <i className="fa-regular fa-plus"></i>
        </Link>
      </button>
      <Box data={isSearching ? searchPatients : patientData} />
    </>
  );
}
export default Patients;