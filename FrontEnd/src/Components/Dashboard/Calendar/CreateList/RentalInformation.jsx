import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const RentalInformation = () => {
  return (
    <div className="flex flex-col w-[95%] gap-20">
      <form className="flex flex-wrap flex-col w-[90%]  gap-5">
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
            className="border border-[#DBDADE] p-2 rounded-md text-sm"
          />
        </div>
        <div className="grid grid-cols-2 gap-5  w-[100%]">
          <div className="flex flex-col gap-2 w-[100%]">
            <div className="text-[#4B465C] font-light">Place</div>
            <div className=" w-[80%] border border-[#DBDADE] text-gray-400 rounded">
              <select class=" w-[100%] bg-transparent border-none  py-3 px-4 rounded 1000px:text-sm 300px:text-xs ">
                <option>Atlantica</option>
                <option>Germany</option>
                <option>England</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%]">
            <div className="text-[#4B465C] font-light">City</div>
            <div className=" w-[80%] border border-[#DBDADE] text-gray-400 rounded">
              <select class=" w-[100%] bg-transparent border-none  py-3 px-4 rounded 1000px:text-sm 300px:text-xs ">
                <option>Atlantica</option>
                <option>Germany</option>
                <option>England</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%]">
            <div className="text-[#4B465C] font-light">Minimun Price</div>
            <div className=" w-[80%] border border-[#DBDADE] text-gray-400 rounded">
              <select class=" w-[100%] bg-transparent border-none  py-3 px-4 rounded 1000px:text-sm 300px:text-xs ">
                <option>Atlantica</option>
                <option>Germany</option>
                <option>England</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-[100%]">
            <div className="text-[#4B465C] font-light">Duration</div>
            <div className=" w-[80%] border border-[#DBDADE] text-gray-400 rounded">
              <select class=" w-[100%] bg-transparent border-none  py-3 px-4 rounded 1000px:text-sm 300px:text-xs ">
                <option>Atlantica</option>
                <option>Germany</option>
                <option>England</option>
              </select>
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
