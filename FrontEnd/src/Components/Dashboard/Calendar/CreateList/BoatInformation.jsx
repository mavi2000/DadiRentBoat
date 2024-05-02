import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const BoatInformation = () => {
  return (
    <div className="flex flex-col w-[95%] border gap-20">
      <div className="flex justify-center flex-col gap-4 w-[100%]  ">
        <div>Type of Boat</div>
        <div className="flex flex-wrap gap-5 w-[90%] justify-between ">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-5 h-5" />
            <div className=" font-normal text-[#676767] text-sm">Sail Boat</div>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-5 h-5" />
            <div className=" font-normal text-[#676767] text-sm">Motorboat</div>
          </label>{" "}
          <label className="flex items-center gap-2">
            <input type="checkbox" className=" w-5 h-5 " />
            <div className=" font-normal text-[#676767] text-sm">
              Ruber dinghy
            </div>
          </label>{" "}
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-5 h-5" />
            <div className=" font-normal text-[#676767] text-sm">Jet Skis</div>
          </label>{" "}
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-5 h-5" />
            <div className=" font-normal text-[#676767] text-sm">
              Luxury yachts
            </div>
          </label>{" "}
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-5 h-5" />
            <div className=" font-normal text-[#676767] text-sm">
              Houseboat/Riverboat
            </div>
          </label>{" "}
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-5 h-5" />
            <div className=" font-normal text-[#676767] text-sm">
              Catamaran/Trimaran
            </div>
          </label>
        </div>
      </div>
      <form className="flex flex-col gap-5">
        <div className="flex border flex-row justify-between">
          <div className="flex flex-col gap-2 w-1/3">
            <div className="text-[#4B465C] font-light">Type of boat</div>
            <div className="relative w-[80%]">
              <select class="block appearance-none w-[100%] bg-transparent border border-gray-400 text-gray-400 py-2 px-4 rounded text-sm font-light">
                <option>Choose a type</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <div className=" absolute inset-y-0 right-0 flex items-center px-2">
                <IoIosArrowDown className="text-gray-700" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-1/3">
            <div className="text-[#4B465C] font-light">Type of boat</div>
            <div className="relative w-[80%]">
              <select class="block appearance-none w-[100%] bg-transparent border border-gray-400 text-gray-400 py-2 px-4 rounded text-sm font-light">
                <option>Choose a type</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <div className=" absolute inset-y-0 right-0 flex items-center px-2">
                <IoIosArrowDown className="text-gray-700" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-1/3">
            <div className="text-[#4B465C] font-light">Type of boat</div>
            <div className="relative w-[80%]">
              <select class="block appearance-none w-[100%] bg-transparent border border-gray-400 text-gray-400 py-2 px-4 rounded text-sm font-light">
                <option>Choose a type</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <div className=" absolute inset-y-0 right-0 flex items-center px-2">
                <IoIosArrowDown className="text-gray-700" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-1/3">
            <div className="text-[#4B465C] font-light">Type of boat</div>
            <div className="relative w-[80%]">
              <select class="block appearance-none w-[100%] bg-transparent border border-gray-400 text-gray-400 py-2 px-4 rounded text-sm font-light">
                <option>Choose a type</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <div className=" absolute inset-y-0 right-0 flex items-center px-2">
                <IoIosArrowDown className="text-gray-700" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-1/3">
            <div className="text-[#4B465C] font-light">Type of boat</div>
            <div className="relative w-[80%]">
              <select class="block appearance-none w-[100%] bg-transparent border border-gray-400 text-gray-400 py-2 px-4 rounded text-sm font-light">
                <option>Choose a type</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <div className=" absolute inset-y-0 right-0 flex items-center px-2">
                <IoIosArrowDown className="text-gray-700" />
              </div>
            </div>
          </div>
        </div>
        <div className="border">
          <button className="border py-2 px-8 bg-[#cba557] text-sm text-white rounded-lg">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default BoatInformation;
