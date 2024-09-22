import { useState } from "react";
import { Form } from "react-router-dom";

export default function SearchForm() {
  const [tripType, setTripType] = useState("round-trip");
  return (
    <div className="w-full bg-white px-6 py-4 rounded-xl shadow-md mb-8">
      <Form method="get" className="flex flex-col">
        <div className="flex flex-row justify-between items-center mb-4 items-center">
          <h1 className="text-[18px] font-semibold">BOOK YOUR FLIGHT</h1>
          <div className="inline-flex rounded-full bg-gray-200 p-1 ">
            <button
              type="button"
              onClick={() => setTripType("round-trip")}
              className={`py-2 px-4 rounded-full ${
                tripType === "round-trip"
                  ? "bg-[#4B0097] text-white"
                  : "text-[#4B0097]"
              } transition duration-300 ease-in-out`}
            >
              Round trip
            </button>
            <button>One way</button>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center gap-3">
          <div className="flex flex-row gap-1 py-2 w-full">
            <div className="w-full">
              <input
                type="text"
                name="from"
                className="border-2 border-gray-500 rounded-l-xl p-1 w-full hover:border-[#4B0097] focus:outline-none focus:ring-2 focus:ring-[#4B0097] transition-all duration-300 transform ease-in-out"
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                name="to"
                className="border-2 border-gray-500 rounded-r-xl p-1 w-full hover:border-[#4B0097] focus:outline-none focus:ring-2 focus:ring-[#4B0097] transition-all duration-300 transform ease-in-out"
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
                name="return"
                defaultValue={""}
                className="border-2 border-gray-500 rounded-r-xl p-1 w-full hover:border-[#4B0097] focus:outline-none focus:ring-2 focus:ring-[#4B0097] transition-all duration-300 transform ease-in-out"
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
