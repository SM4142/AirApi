import axios from "axios";
import NavbarHome from "../components/Navbar";
import Flights from "../components/Flights";
import SearchForm from "../components/SearchForm";
import Plans from "../components/Plans";
import SortC from "../components/SortC";

export default function Home() {
  return (
    <div className="bg-[#E6DBFF] h-[100vh] flex items-center">
      <div className="w-[1400px] h-[830px]  mx-auto bg-[#F6F4F8] px-6 py-9 rounded-xl">
        <NavbarHome />
        <div className="flex flex-row  gap-7 ">
          <div className="w-full">
            <div>
              <SearchForm />
            </div>

            <div className="mt-3 flex gap-8 flex-row w-full">
              <div className=" overflow-y-auto w-[77%] h-[470px] pr-3">
                <Flights />
                <Flights />
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
