import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Form } from "react-router-dom";
import { faPlane, faPlaneArrival } from "@fortawesome/free-solid-svg-icons";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { ButtonInterface } from "../interfaces/htmlInterfaces";
import DatePicker from "react-datepicker";
export default function SearchForm() {
  const [tripType, setTripType] = useState("round-trip");
  const changeTripType = (e: ButtonInterface) => {
    const { value } = e.target as HTMLButtonElement;
    if (value === "round-trip") {
      setTripType("round-trip");
    } else {
      setTripType("one-way");
    }
  };
  const [value, setValue] = useState(null);
  return (
    <div className="w-full bg-white px-6 py-4 rounded-xl shadow-md mb-8">
      <Form method="get" className="flex flex-col">
        <div className="flex flex-row justify-between  mb-4 items-center">
          <h1 className="text-[16px] text-[#393939] font-semibold">
            <span className="  text-[#393939] text-[16px] mr-1">
              <FontAwesomeIcon icon={faPlane} />
            </span>
            BOOK YOUR FLIGHT
          </h1>
          <div className="inline-flex rounded-full bg-gray-200 ">
            <input type="hidden" id="tripType" value={tripType} />
            <button
              type="button"
              value={"round-trip"}
              className={
                "rounded-l-full text-[#4B0097] p-3 text-[15px]  transition-colors duration-700 transform" +
                (tripType === "round-trip" ? " bg-[#4B0097] text-white" : "")
              }
              onClick={(e) => changeTripType(e)}
            >
              Round trip
            </button>
            <button
              type="button"
              value={"one-way"}
              className={
                "rounded-r-full text-[#4B0097] p-3 text-[15px]  transition-colors duration-700 transform" +
                (tripType === "one-way" ? " bg-[#4B0097] text-white" : "")
              }
              onClick={(e) => changeTripType(e)}
            >
              One way
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center gap-3">
          <div className="flex flex-row gap-1 py-2 w-full">
            <div className="relative w-full">
              <span className="absolute left-3 z-10 top-1/2 transform -translate-y-1/2  text-[#4B0097]">
                <FontAwesomeIcon icon={faPlaneDeparture} />
              </span>
              <input
                type="text"
                name="from"
                className="border-2 border-gray-500 rounded-l-xl pl-10 p-1 w-full hover:border-[#4B0097] focus:outline-none focus:ring-2 focus:ring-[#4B0097] transition-all duration-300 transform ease-in-out"
              />
            </div>
            <div className="w-full relative">
              <span className="absolute left-3 z-10 top-1/2 transform -translate-y-1/2  text-[#4B0097]">
                <FontAwesomeIcon icon={faPlaneArrival} />
              </span>
              <input
                type="text"
                name="to"
                className="border-2 pl-10 border-gray-500 rounded-r-xl p-1 w-full hover:border-[#4B0097] focus:outline-none focus:ring-2 focus:ring-[#4B0097] transition-all duration-300 transform ease-in-out"
              />
            </div>
          </div>
          <div className="flex flex-row gap-1 py-2 w-full">
            <div className="w-full">
              <input
                type="date"
                name="departure"
                className="border-2 border-gray-500 rounded-l-xl p-1 w-full hover:border-[#4B0097] focus:outline-none focus:ring-2 focus:ring-[#4B0097] transition-all duration-300 transform ease-in-out"
              />
            </div>
            <div className="w-full">
              <input
                type="date"
                name="departure"
                className="border-2 border-gray-500 rounded-l-xl p-1 w-full hover:border-[#4B0097] focus:outline-none focus:ring-2 focus:ring-[#4B0097] transition-all duration-300 transform ease-in-out"
              />
            </div>
          </div>
        </div>
        <div className="">
          <button className="mt-4 bg-[#4B0097] hover:bg-white text-white font-bold py-2 px-5 rounded-lg hover:text-[#4B0097]  border-transparent hover:border-[#4B0097] border-2 text-[16px] transition-all duration-500 transform ease-in-out ">
            Show Flights
          </button>
        </div>
      </Form>
    </div>
  );
}
