export default function Flights() {
  return (
    <div className="bg-white rounded-xl  w-[70%] ">
      <h1 className=" text-[18px] p-3">Milano - Madrid</h1>
      <div className="flex flex-row justify-between items-center">
        <div className="p-3 flex flex-col items-start">
          <div className="text-gray-500 text-[15px]">Departure</div>
          <div className="text-[17px] text-black">7:30 AM</div>
          <div className="text-[15px]">Airport:MXP</div>
        </div>
        <div className="p-3">-</div>
        <div className="p-3 flex flex-col items-center">
          <div>
            <img src="/images/alitalia.png" width={50} alt="" />
          </div>
          <div>plane</div>
          2h 25m (Nonstop)
        </div>
        <div className="p-3">-</div>
        <div className="p-3 flex flex-col items-start">
          <div className="text-gray-500 text-[15px]">Departure</div>
          <div className="text-[17px] text-black">7:30 AM</div>
          <div className="text-[15px]">Airport:MXP</div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className=" p-3">
          <p className="text-[#4B0097] text-[21px]">Price:$200</p>
          <p className="text-[12px] text-gray-500">Round Trip</p>
        </div>
        <div>
          <button className="mt-4 bg-[#4B0097] hover:bg-white text-white font-bold py-4 px-5 rounded-lg hover:text-[#4B0097]  border-transparent hover:border-[#4B0097] border-2 text-[16px] transition-all duration-500 transform ease-in-out ">
            Book FLight
          </button>
        </div>
      </div>
    </div>
  );
}
