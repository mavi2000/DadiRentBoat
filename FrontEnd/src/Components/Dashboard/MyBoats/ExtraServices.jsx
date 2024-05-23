import React from "react";
import BoatsNavbar from "./BoatsNavbar";

const ExtraServices = () => {
  return (
    <div className="flex flex-col gap-3">
      <BoatsNavbar />
      <div className="bg-white rounded-md   text-[#4B465C]">
        <form className="flex flex-col gap-8 w-[80%] mx-2 py-8 px-12">
          <div className="font-medium">Extra Services</div>
          <div className="gap-4 flex flex-col">
            <div className="font-normal text-sm">Create a new option</div>
            <div className="font-light text-sm">
              Here you can enter your extras on rentals, such as equipment, fuel
              or a galley. 
            </div>
          </div>
          <div className="flex flex-col text-sm gap-4">
            <label className="text-lg font-light">Name of the extra*</label>
            <select className="border p-3 rounded-md ">
              <option>Name of the extra</option>
              <option>Name of the extra</option>
              <option>Name of the extra</option>
              <option>Name of the extra</option>
            </select>
            <div>0 / 50</div>
          </div>
          <div className="flex gap-8">
            <div className="flex items-center gap-3">
              <input type="checkbox" />
              <div>Optional</div>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" />
              <div>Obligatory</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <input type="checkbox" />
            <div>Extra option offered</div>
          </div>
          <div className="flex flex-col gap-2">
            <div>Price</div>
            <div className="border w-[30%]  rounded-md">
              <select className="border-r py-3 px-2 w-[20%] bg-transparent">
                <option>€</option>
                <option>$</option>
                <option>€</option>
              </select>
              <input
                className="px-3 w-[80%] py-3 bg-transparent"
                type="number"
                placeholder="Enter"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <input type="checkbox" />
            <div>Per person</div>
          </div>
          <button className="bg-[#CBA557] w-[15%] py-4 rounded-lg text-white">
            Add
          </button>
        </form>
        <div className="w-[100%] h-0.5 bg-[#E8E8E8]"></div>
        <div className="flex flex-col gap-8 w-[80%] mx-2 py-8 px-12">
          <div className="font-medium">Extra Services</div>
          <div className="font-normal text-sm">Option extra</div>
          <div className="text-sm flex">
            <div className=" py-5 px-4 font-medium w-[35%]">
              Extra Name here
            </div>
            <div className=" py-5 px-4 w-[30%] font-light ">
              <span className="font-medium">€34 </span>/ rental
            </div>
            <div className=" flex gap-7 py-5 px-4 w-[35%] text-sm">
              <button className="border border-[#CBA557] px-4 py-1 rounded-lg text-[#CBA557]">
                Edit
              </button>
              <button className="border border-[#E51F1F] px-4 py-1 rounded-lg text-[#E51F1F]">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraServices;
