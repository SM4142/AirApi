import React from "react";

export default function Plans() {
  return (
    <div className="">
      <div className="bg-fixed">
        <div className="relative mb-6 ">
          <img
            src="/images/cars3.jpg"
            className="w-[340px] h-[210px] object-center rounded-2xl"
            alt=""
          />
          <h1 className="absolute left-2 bottom-4  text-[21px] text-white font-extrabold">
            CAR RENTALS
          </h1>
        </div>
        <div className="relative mb-6">
          <img
            src="/images/car.jpg"
            className="w-[300px] h-[210px] object-center rounded-2xl"
            alt=""
          />
          <h1 className="absolute left-2 bottom-4  text-[21px] text-white font-extrabold">
            CAR RENTALS
          </h1>
        </div>
        <div className="relative mb-6">
          <img
            src="/images/car.jpg"
            className="w-[300px] h-[210px] object-center rounded-2xl"
            alt=""
          />
          <h1 className="absolute left-2 bottom-4  text-[21px] text-white font-extrabold">
            CAR RENTALS
          </h1>
        </div>
      </div>
    </div>
  );
}
