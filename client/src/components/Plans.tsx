import React from "react";

export default function Plans() {
  return (
    <div>
      <div className="relative">
        <img
          src="/images/cars3.jpg"
          className="w-[340px] h-[220px] object-center rounded-2xl"
          alt=""
        />
        <h1 className="absolute left-2 bottom-4  text-[21px] text-white font-extrabold">
          CAR RENTALS
        </h1>
      </div>
      <div className="relative mt-6">
        <img
          src="/images/car.jpg"
          className="w-[300px] h-[220px] object-center rounded-2xl"
          alt=""
        />
        <h1 className="absolute left-2 bottom-4  text-[21px] text-white font-extrabold">
          CAR RENTALS
        </h1>
      </div>
      <div className="relative mt-6">
        <img
          src="/images/car.jpg"
          className="w-[300px] h-[220px] object-center rounded-2xl"
          alt=""
        />
        <h1 className="absolute left-2 bottom-4  text-[21px] text-white font-extrabold">
          CAR RENTALS
        </h1>
      </div>
    </div>
  );
}
