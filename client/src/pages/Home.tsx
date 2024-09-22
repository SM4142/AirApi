import axios from "axios";
import React, { useEffect } from "react";
import NavbarHome from "../components/Navbar";
import Flights from "../components/Flights";
import SearchForm from "../components/SearchForm";
import Plans from "../components/Plans";

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
      <div className="w-[1200px] max-h-[800px]  mx-auto bg-[#F6F4F8] px-6 py-9 rounded-lg">
        <NavbarHome />
        <div className="flex flex-row  gap-10 ">
          <div className="w-full">
            <SearchForm />
            <div className="mt-3 flex flex-row">
              <Flights />
            </div>
          </div>
          <Plans />
        </div>
      </div>
    </div>
  );
}
