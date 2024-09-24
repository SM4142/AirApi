import React from "react";
import UserNavbar from "../components/UserNavbar";
import Myflights from "../components/Myflights";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export default function UserPage() {
  return (
    <div className="bg-[#318AFB] h-[100vh] flex items-center">
      <div className="w-[1400px] h-[830px]  mx-auto bg-[#F4F4F5] rounded-2xl">
        <div>
          <UserNavbar />
          <div className="flex flex-col p-7">
            <div className="flex flex-row justify-between">
              <div className="mb-7 mt-2">
                Sort by:{" "}
                <span className="text-[17px] hover:cursor-pointer hover:text-blue-900">
                  Recommended{" "}
                  <span className="ml-1 text-[12px]">
                    {" "}
                    <FontAwesomeIcon icon={faChevronDown} />
                  </span>
                </span>
              </div>
              <div className="flex flex-row items-center gap-1">
                <FontAwesomeIcon
                  icon={faCircleInfo}
                  className="border-blue-500 text-blue-500 text-[22px] mr-2"
                />
                <span>Avg Fare: </span>
                <span className="text-[17px]">$225</span>
              </div>
            </div>
            <div className="overflow-y-auto ] h-[620px] pr-3 ">
              <Myflights />
              <Myflights />
              <Myflights />
              <Myflights />
              <Myflights />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
