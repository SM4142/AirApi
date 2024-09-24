import { faChevronDown, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function UserNavbar() {
  return (
    <div className="w-full bg-white px-12 py-5 rounded-tl-2xl rounded-tr-2xl">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-5 items-center">
          <ul className="flex flex-row gap-4 items-center">
            <li className="text-black border-2 text-[14px] border-gray-500 border-opacity-50 rounded-lg px-5 py-2 hover:cursor-pointer hover:border-gray-700 transition shadow-lg hover:shadow-xl">
              Times
            </li>
            <li className="text-black border-2 text-[14px] border-gray-500 border-opacity-50 rounded-lg px-5 py-2 hover:cursor-pointer hover:border-gray-700 transition shadow-lg hover:shadow-xl">
              Stops
            </li>
            <li className="text-black border-2 text-[14px] border-gray-500 border-opacity-50 rounded-lg px-5 py-2 hover:cursor-pointer hover:border-gray-700 transition shadow-lg hover:shadow-xl">
              Airlines
            </li>
            <li className="text-black border-2 text-[14px] border-gray-500 border-opacity-50 rounded-lg px-5 py-2 hover:cursor-pointer hover:border-gray-700 transition shadow-lg hover:shadow-xl">
              Airports
            </li>
            <li className="text-black border-2 text-[14px] border-gray-500 border-opacity-50 rounded-lg px-5 py-2 hover:cursor-pointer hover:border-gray-700 transition shadow-lg hover:shadow-xl">
              Amenties
            </li>
          </ul>
          <p className="text-blue-500 hover:cursor-pointer hover:text-blue-900 transition-colors duration-300 transform ease-in-out ">
            Edit Search{" "}
            <span className="ml-1 text-[12px]">
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
          </p>
        </div>
        <div className="hover:cursor-pointer ">
          <div className="flex flex-row gap-10 flex-start">
            <div className="hover:cursor-pointer ">
              <div>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div></div>
            </div>
            <div>
              <div>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div></div>
            </div>
            <div className="hover:cursor-pointer ">
              <div>
                {" "}
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div>
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
            <div className="hover:cursor-pointer ">
              <div>
                {" "}
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div>
                {" "}
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
            <div className="hover:cursor-pointer ">
              <div>
                {" "}
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div>
                {" "}
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
