import axios from "axios";
import React, { useEffect } from "react";
import NavbarHome from "../components/Navbar";
import Flights from "../components/Flights";
import SearchForm from "../components/SearchForm";
import Plans from "../components/Plans";
import SortC from "../components/SortC";

export default function Home() {
  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/");
      console.log(response.data);
    } catch (error) {
      console.log("API isteği başarısız oldu.");
    }
  };
  getData();
  return (
    <div className="bg-[#E6DBFF] h-[100vh] flex items-center">
      <div className="w-[1400px] max-h-[800px]  mx-auto bg-[#F6F4F8] px-6 py-9 rounded-2xl">
        <NavbarHome />
        <div className="flex flex-row  gap-7 ">
          <div className="w-full">
            <SearchForm />
            <div className="mt-3 flex gap-8 flex-row w-full">
              <div className=" overflow-y-auto w-[77%] h-[430px] px-4">
                <Flights />
                <Flights />
                <Flights />
                <Flights />
                <Flights />
              </div>

              <SortC />
            </div>
          </div>
          <Plans />
        </div>
      </div>
    </div>
  );
}
