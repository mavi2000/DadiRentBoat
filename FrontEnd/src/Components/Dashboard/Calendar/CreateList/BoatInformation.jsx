import React from "react";

const BoatInformation = () => {
  return (
    <div className="flex flex-col w-[100%]  gap-20">
      <div className="flex justify-center flex-col gap-4 w-[100%]  ">
        <div>Type of Boat</div>
        <div className=" grid 1200px:grid-cols-6 500px:grid-cols-3 500px:grid-rows-3 300px:grid-cols-2 300px:grid-rows-4  1200px:gap-3 300px:gap-4 w-[90%] justify-between ">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" />
            <div className=" font-normal text-[#676767] 500px:text-sm 300px:text-xs">
              Sail Boat
            </div>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" />
            <div className=" font-normal text-[#676767] 500px:text-sm 300px:text-xs">
              Motorboat
            </div>
          </label>{" "}
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" />
            <div className=" font-normal text-[#676767] 500px:text-sm 300px:text-xs">
              Ruber dinghy
            </div>
          </label>{" "}
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" />
            <div className=" font-normal text-[#676767] 500px:text-sm 300px:text-xs">
              Jet Skis
            </div>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" />
            <div className=" font-normal text-[#676767] 500px:text-sm 300px:text-xs">
              Luxury yachts
            </div>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" />
            <div className=" font-normal text-[#676767] 500px:text-sm 300px:text-xs">
              Houseboat/Riverboat
            </div>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" />
            <div className=" font-normal text-[#676767] 500px:text-sm 300px:text-xs">
              Catamaran/Trimaran
            </div>
          </label>
        </div>
      </div>
      <form className="flex flex-col gap-12 ">
        <div className="grid 600px:grid-cols-3 600px:grid-rows-4 300px:grid-cols-2  1000px:text-sm 300px:text-xs  gap-8 flex-row justify-between">
          <div className="flex flex-col gap-2 w-[100%] font-normal ">
            <div className="text-[#4B465C] ">Type of boat</div>
            <div className=" w-[90%]">
              <select class=" w-[100%] bg-transparent border border-gray-400 text-gray-400 py-3 px-4 rounded 1000px:text-sm 300px:text-xs ">
                <option>Choose a type</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <div className="inset-y-0 right-0 flex items-center px-2"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%] font-normal">
            <div className="text-[#4B465C] ">Boat Brand</div>
            <div className=" w-90%]">
              <select class=" w-[90%] bg-transparent border border-gray-400 text-gray-400 py-3 px-4 rounded 1000px:text-sm 300px:text-xs ">
                <option>Choose a brand</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <div className="inset-y-0 right-0 flex items-center px-2"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%] font-normal">
            <div className="text-[#4B465C] ">Model</div>
            <div className=" w-[90%]">
              <select class=" w-[100%] bg-transparent border border-gray-400 text-gray-400 py-3 px-4 rounded 1000px:text-sm 300px:text-xs ">
                <option>Choose a model</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <div className="inset-y-0 right-0 flex items-center px-2"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%] font-normal">
            <div className="text-[#4B465C] ">Year</div>
            <div className="flex justify-between w-[90%] bg-transparent border border-gray-400 text-gray-400 rounded 1000px:text-sm 300px:text-xs">
              <input
                type="number"
                min={2010}
                max={2024}
                value={2017}
                className=" w-[100%] h-[100%] py-3 px-4 bg-transparent"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%] font-normal ">
            <div className="text-[#4B465C] ">Region</div>
            <div className="flex justify-between w-[90%] bg-transparent border border-gray-400 text-gray-400 rounded 1000px:text-sm 300px:text-xs">
              <select class=" w-[100%] bg-transparent border-none xw  py-3 px-4 rounded 1000px:text-sm 300px:text-xs ">
                <option>Atlantica</option>
                <option>Germany</option>
                <option>England</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%] font-normal ">
            <div className="text-[#4B465C] ">Boarding Capacity</div>
            <div className="flex justify-between w-[90%] bg-transparent border border-gray-400 text-gray-400 rounded 1000px:text-sm 300px:text-xs">
              <input
                type="number"
                min={0}
                max={100}
                value={20}
                className=" w-[100%] h-[100%] py-3 px-4 bg-transparent"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%] font-normal ">
            <div className="text-[#4B465C]">Total Engine power (in hp)</div>
            <div className="flex justify-between w-[90%] bg-transparent border border-gray-400 text-gray-400 rounded 1000px:text-sm 300px:text-xs">
              <input
                type="number"
                min={2010}
                max={2024}
                value={2017}
                className=" w-[100%] h-[100%] py-3 px-4 bg-transparent"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%] font-normal ">
            <div className="text-[#4B465C] ">Length (in meters)</div>
            <div className="flex justify-between w-[90%] bg-transparent border border-gray-400 text-gray-400 rounded 1000px:text-sm 300px:text-xs">
              <input
                type="number"
                min={0}
                max={50}
                value={5}
                className=" w-[100%] h-[100%] py-3 px-4 bg-transparent"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%] font-normal ">
            <div className="text-[#4B465C] ">Telephone</div>
            <div className="flex justify-between w-[90%] bg-transparent border border-gray-400 text-gray-400 rounded 1000px:text-sm 300px:text-xs">
              <input
                type="text"
                name="telephone"
                value={7183638911}
                className=" w-[100%] h-[100%] py-3 px-4 bg-transparent"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%] font-normal ">
            <div className="text-[#4B465C] ">Water Tank (in liter)</div>
            <div className="flex justify-between w-[90%] bg-transparent border border-gray-400 text-gray-400 rounded 1000px:text-sm 300px:text-xs">
              <input
                type="number"
                min={0}
                max={100}
                value={20}
                className=" w-[100%] h-[100%] py-3 px-4 bg-transparent"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%] font-normal ">
            <div className="text-[#4B465C] ">Fuel Tank (in liter)</div>
            <div className="flex justify-between w-[90%] bg-transparent border border-gray-400 text-gray-400 rounded 1000px:text-sm 300px:text-xs">
              <input
                type="number"
                min={0}
                max={50}
                value={17}
                className=" w-[100%] h-[100%] py-3 px-4 bg-transparent"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%] font-normal ">
            <div className="text-[#4B465C] ">Drought (in meters)</div>
            <div className="flex justify-between w-[90%] bg-transparent border border-gray-400 text-gray-400 rounded 1000px:text-sm 300px:text-xs">
              <input
                type="number"
                min={0}
                max={100}
                value={10}
                className=" w-[100%] h-[100%] py-3 px-4 bg-transparent"
              />
            </div>
          </div>
        </div>
        <div className="">
          <button className=" py-3 px-8 bg-[#cba557] text-sm text-white rounded-lg">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default BoatInformation;
