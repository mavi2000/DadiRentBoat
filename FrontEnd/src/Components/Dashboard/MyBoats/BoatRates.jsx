import React, { useState } from "react";
import BoatsNavbar from "./BoatsNavbar";
import { FiEdit3 } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { FiInfo } from "react-icons/fi";
import RatePopup from "./RatePopup";

const BoatRates = () => {
  const [popup, setPopup] = useState();
  const handelPopup = (e) => {
    e.preventDefault();
    setPopup(!popup);
  };
  return (
    <div className="flex flex-col gap-3">
      <BoatsNavbar />
      <form className="bg-white mx-2 py-8 px-8 flex flex-col gap-10 text-[#4B465C]">
        <div>Rates</div>
        <div className=" mx-4 w-[85%]">
          <div className=" my-4 flex items-center text-sm w-[100%] border-b py-8">
            <div className=" w-[30%] flex flex-col gap-1">
              <div className="font-medium">Base price</div>
              <div className="font-normal">low season</div>
              <div className="font-light">Default rate</div>
            </div>
            <div className="w-[25%] flex flex-col gap-1 ">
              <div>Conditions</div>
              <div>Minimum: 1 day</div>
            </div>
            <div className="w-[15%]  flex flex-col gap-1">
              <div>Day</div>
              <div className="font-bold">€54</div>
            </div>
            <div className="w-[15%]  flex flex-col gap-1">
              <div>Week</div>
              <div>-</div>
            </div>
            <div className="w-[15%]">
              <button className=" text-[#CBA557] font-semibold flex items-center gap-2 text-[15px] border border-[#CBA557] rounded-md py-2 px-4">
                <FiEdit3 />
                Edit
              </button>
            </div>
          </div>
          <div className=" my-4 flex items-center text-sm w-[100%] border-b py-8">
            <div className=" w-[30%] flex flex-col gap-1">
              <div className="font-medium">May 1st - June 30th</div>
              <div className="font-normal">Tariff 1</div>
              <div className="font-light">Clear Period</div>
            </div>
            <div className="w-[25%] flex flex-col gap-1 ">
              <div>Conditions</div>
              <div>Minimum: 1 day</div>
            </div>
            <div className="w-[15%]  flex flex-col gap-1">
              <div>Day</div>
              <div className="font-bold">€54</div>
            </div>
            <div className="w-[15%]  flex flex-col gap-1">
              <div>Week</div>
              <div>-</div>
            </div>
            <div className="w-[15%]">
              <button className=" text-[#CBA557] font-semibold flex items-center gap-2 text-[15px] border border-[#CBA557] rounded-md py-2 px-4">
                <FiEdit3 />
                Edit
              </button>
            </div>
          </div>
          <div className=" my-4 flex items-center text-sm w-[100%] border-b py-8">
            <div className=" w-[30%] flex flex-col gap-1">
              <div className="font-medium">May 1st - June 30th</div>
              <div className="font-normal">Tariff 1</div>
              <div className="font-light">Clear Period</div>
            </div>
            <div className="w-[25%] flex flex-col gap-1 ">
              <div>Conditions</div>
              <div>Minimum: 1 day</div>
            </div>
            <div className="w-[15%]  flex flex-col gap-1">
              <div>Day</div>
              <div className="font-bold">€54</div>
            </div>
            <div className="w-[15%]  flex flex-col gap-1">
              <div>Week</div>
              <div>-</div>
            </div>
            <div className="w-[15%]">
              <button className=" text-[#CBA557] font-semibold flex items-center gap-2 text-[15px] border border-[#CBA557] rounded-md py-2 px-4">
                <FiEdit3 />
                Edit
              </button>
            </div>
          </div>
          <div className=" my-4 flex items-center text-sm w-[100%] border-b py-8">
            <div className=" w-[30%] flex flex-col gap-1">
              <div className="font-medium">May 1st - June 30th</div>
              <div className="font-normal">Tariff 1</div>
              <div className="font-light">Clear Period</div>
            </div>
            <div className="w-[25%] flex flex-col gap-1 ">
              <div>Conditions</div>
              <div>Minimum: 1 day</div>
            </div>
            <div className="w-[15%]  flex flex-col gap-1">
              <div>Day</div>
              <div className="font-bold">€54</div>
            </div>
            <div className="w-[15%]  flex flex-col gap-1">
              <div>Week</div>
              <div>-</div>
            </div>
            <div className="w-[15%]">
              <button className=" text-[#CBA557] font-semibold flex items-center gap-2 text-[15px] border border-[#CBA557] rounded-md py-2 px-4">
                <FiEdit3 />
                Edit
              </button>
            </div>
          </div>
          <button
            onClick={handelPopup}
            className=" text-[#CBA557] font-semibold flex items-center gap-2 text-[15px] border border-[#CBA557] rounded-md py-2 px-6"
          >
            <IoMdAdd className="text-[18px]" />
            Add Rates
          </button>
          {popup && <RatePopup />}
        </div>
        <div>Other prices</div>
        <div className="bg-[#CBA55714] p-4 flex items-center gap-3 w-[60%] rounded-md">
          <FiInfo className="text-[#CBA557]" />
          <div className="font-medium text-[#4B465C]">
            New: 
            <span className="font-light">
              Skipper rates are now managed in the
            </span>
            <span className="text-[#CBA557]"> Extra Options.</span>
          </div>
        </div>
        <button className="bg-[#CBA557] w-[15%] py-4 rounded-lg text-white">
          Save
        </button>
      </form>
    </div>
  );
};

export default BoatRates;