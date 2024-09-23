export default function SortC() {
  return (
    <div className="flex flex-col items-start justify-start text-[14px] w-[25%] ">
      <h1 className="text-black mb-3 font-bold">Sort by:</h1>
      <select className="mb-3 w-full p-2">
        <option>lowest Price</option>
        <option>Rating</option>
      </select>
      <div className="flex flex-col justify-start items-start">
        <h1 className="mb-3 text-black font-bold">Arrival Time</h1>
        <div className="mb-3">
          <input type="radio" name="timeZone" id="am" className="mr-2" />
          <label htmlFor="am">5:00 AM - 11-59 AM</label>
        </div>
        <div className="mb-3">
          <input type="radio" name="timeZone" id="pm" className="mr-2" />
          <label htmlFor="pm">12:00 PM - 5-59 PM</label>
        </div>
      </div>
      <div></div>
      <div className="w-full">
        <h1 className="mb-3 text-black font-bold">Airlines Included</h1>
        <div>
          <div className="flex flex-row justify-between items-center mb-2">
            <div className="flex flex-row items-center">
              <input type="radio" name="stops" id="nonstop" className="mr-2" />
              <label htmlFor="nonstop">Nonstop</label>
            </div>
            <div>$230</div>
          </div>
          <div className="flex flex-row justify-between items-center mb-2">
            <div className="flex flex-row items-center">
              <input type="radio" name="stops" id="1stop" className="mr-2" />
              <label htmlFor="1stop">1 Stop</label>
            </div>
            <div>$230</div>
          </div>
          <div className="flex flex-row justify-between items-center mb-2">
            <div className="flex flex-row items-center">
              <input type="radio" name="stops" id="2+stops" className="mr-2" />
              <label htmlFor="2+stops">2+ Stops</label>
            </div>
            <div>$230</div>
          </div>
        </div>
      </div>
    </div>
  );
}
