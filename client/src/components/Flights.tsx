import {
  faPlaneArrival,
  faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { AirplaneInterfaces } from "../interfaces/airInterface";

export default function Flights() {
  return (
    <div className="w-[100%] flex flex-col mb-4">
      <div className="bg-white rounded-tl-2xl rounded-tr-2xl rounded-br-2xl   w-full  pl-4 pt-4  ">
        <h1 className=" text-[18px] p-3">Milano - Madrid</h1>
        <div className="flex flex-row justify-between items-center">
          <div className="p-3 flex flex-col items-start">
            <div className="text-gray-500 text-[14px]">
              <span className="mr-1">
                <FontAwesomeIcon icon={faPlaneDeparture} />
              </span>
              Departure
            </div>
            <div className="text-[16px] text-black">7:30 AM</div>
            <div className="text-[14px] text-[#9E9E9E]">Airport:MXP</div>
          </div>
          <div className="w-20 h-[2px] bg-[#A5A5A5]" />
          <div className="p-3 flex flex-col items-center">
            <div>
              <img src="/images/alitalia.png" width={43} alt="" />
            </div>
            <div>plane</div>
            <p className="text-[15px] text-[#9E9E9E]">2h 25m (Nonstop)</p>
          </div>
          <div className="w-20 h-[2px] bg-[#A5A5A5]" />
          <div className="p-3 flex flex-col items-start">
            <div className="text-gray-500 text-[14px]">
              <span className="mr-1">
                <FontAwesomeIcon icon={faPlaneArrival} />
              </span>
              Departure
            </div>
            <div className="text-[16px] text-black">7:30 AM</div>
            <div className="text-[14px] text-[#9E9E9E]">Airport:Mad</div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className=" p-3">
            <p className="text-[#4B0097] text-[19px]">Price:$200</p>
            <p className="text-[12px] text-[#9E9E9E]">Round Trip</p>
          </div>
          <div>
            <button className="mt-4 bg-[#4B0097] hover:bg-white text-white font-bold py-4 px-5 rounded-lg hover:text-[#4B0097]  border-transparent hover:border-[#4B0097] border-2 text-[16px] transition-colors duration-500 transform ease-out ">
              Book FLight
            </button>
          </div>
        </div>
      </div>
      <div className="w-full ">
        <span className="block w-[156px] text-center text-[#4B0097]  p-3 bg-[#E6E0EB] rounded-b-xl">
          <Link
            to="/"
            className=" underline border-[#4B0097]  hover:text-blue-950 transition-colors duration-300 transform ease-in-out "
          >
            Check the details
          </Link>
        </span>
      </div>
    </div>
  );
}
