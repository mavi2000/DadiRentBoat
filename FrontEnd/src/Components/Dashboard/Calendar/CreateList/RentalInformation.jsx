import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const RentalInformation = () => {
  return (
    <div className="flex flex-col w-[95%] gap-20">
      <form className="flex flex-wrap flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-normal text-[#4b465c]">
            Model or name of the boat
          </label>
          <input
            type="text"
            required
            autoComplete="off"
            name="text"
            placeholder="Write boat name"
            className="border border-[#DBDADE] p-2 rounded-md"
          />
        </div>
        <div className="flex  w-[100%]">
          <div className="flex flex-col gap-2 w-[100%]">
            <div className="text-[#4B465C] font-light">Place</div>
            <div className="relative w-[80%]">
              <select class="block appearance-none w-[100%] bg-transparent border border-[#DBDADE] text-gray-400 py-2 px-4 rounded text-sm font-light">
                <option>Port</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <div className=" absolute inset-y-0 right-0 flex items-center px-2">
                <IoIosArrowDown className="text-[#DBDADE]" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%]">
            <div className="text-[#4B465C] font-light">City</div>
            <div className="relative w-[80%]">
              <select class="block appearance-none w-[100%] bg-transparent border border-[#DBDADE] text-gray-400 py-2 px-4 rounded text-sm font-light">
                <option>Port</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <div className=" absolute inset-y-0 right-0 flex items-center px-2">
                <IoIosArrowDown className="text-[#DBDADE]" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%]">
            <div className="text-[#4B465C] font-light">Minimun Price</div>
            <div className="relative w-[80%]">
              <select class="block appearance-none w-[100%] bg-transparent border border-[#DBDADE] text-gray-400 py-2 px-4 rounded text-sm font-light">
                <option>$50</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <div className=" absolute inset-y-0 right-0 flex items-center px-2">
                <IoIosArrowDown className="text-[#DBDADE]" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-[100%]">
            <div className="text-[#4B465C] font-light">Duration</div>
            <div className="relative w-[80%]">
              <select class="block appearance-none w-[100%] bg-transparent border border-[#DBDADE] text-gray-400 py-2 px-4 rounded text-sm font-light">
                <option>Full Day</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <div className=" absolute inset-y-0 right-0 flex items-center px-2">
                <IoIosArrowDown className="text-[#DBDADE]" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <button className=" py-2 px-8 bg-[#cba557] text-sm text-white rounded-lg">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default RentalInformation;
