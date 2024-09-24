import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Myflights() {
  return (
    <div className="flex flex-row justify-between bg-white px-9 mb-4 py-9 rounded-lg items-center">
      <div className="flex flex-row gap-10 items-start">
        <div className="p-3">
          <img src="/images/alitalia.png" width={50} alt="" />
        </div>
        <div className="flex flex-col ">
          <h1 className="text-[23px] text-[#777D85]">7:40 AM - 9:12 AM</h1>
          <div className="flex flex-row justify-between gap-16 mt-2">
            <div>
              <h2>Delta Air Lines</h2>
              <p className="text-blue-500 text-[14px] hover:cursor-pointer  hover:text-blue-900 transition-colors duration-300 transform ease-in-out  ">
                Flight Details{" "}
                <span className="ml-2 text-[12px]">
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              </p>
            </div>
            <div className="flex flex-col">
              <h2 className="black">Nonstop</h2>
              <p className="text-[14px] text-[#A3A6AC]">1h 32m</p>
            </div>
            <div>
              <h2 className="black ">SFO to LAX</h2>
              <p className="text-[14px] text-[#A3A6AC]">DL 1443</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row  gap-3">
        <div className="px-7 py-8 shadow-2xl rounded-lg text-center">
          <h2 className="black mb-4 text-[20px]">$156</h2>
          <p className="text-[14px] text-[#A3A6AC]">Main</p>
        </div>
        <div className="px-7 py-8 shadow-2xl rounded-lg text-center">
          <h2 className="black mb-4 text-[20px] ">$204</h2>
          <p className="text-[14px]  text-[#A3A6AC]">Comfort+</p>
        </div>
        <div className="px-7 py-8 shadow-2xl rounded-lg text-center">
          <h2 className="black mb-4 text-[20px]">$156</h2>
          <p className="text-[14px] text-[#A3A6AC]">Main</p>
        </div>
        <div className="px-7 py-8 shadow-2xl rounded-lg text-center">
          <h2 className="black mb-4 text-[20px]">$156</h2>
          <p className="text-[14px] text-[#A3A6AC]">Main</p>
        </div>
        <div className="px-7 py-8 shadow-2xl rounded-lg text-center">
          <h2 className="black mb-4 text-[20px]">$156</h2>
          <p className="text-[14px] text-[#A3A6AC]">Main</p>
        </div>
      </div>
    </div>
  );
}
