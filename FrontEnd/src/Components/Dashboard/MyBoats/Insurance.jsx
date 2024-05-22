import React from "react";
import BoatsNavbar from "./BoatsNavbar";

const Insurance = () => {
  return (
    <div className="flex flex-col gap-3">
      <BoatsNavbar />
      <form className="bg-white mx-2 py-8 px-14 text-[#4B465C]">
        <div className="w-[80%] flex flex-col gap-10">
          <div className="font-medium">Insurance</div>
          <div className="gap-4 flex flex-col">
            <div className="font-normal text-sm">
              Click below to declare that you are in compliance with your
              insurance obligations
            </div>
            <div className="font-medium text-center py-2 rounded-sm text-sm bg-[#CBA55714]">
              My boat is insured
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label>Boarding capacity</label>
            <input
              type="text"
              placeholder="Name of your Insurer"
              className="border p-3 rounded-md font-light"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div>Price</div>
            <div className="border   rounded-md">
              <select className="border-r py-3 px-2 w-[10%] bg-transparent">
                <option>€</option>
                <option>$</option>
                <option>€</option>
              </select>
              <input
                className="px-3 w-[90%] py-3 bg-transparent"
                type="number"
                placeholder="Enter"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>Price</div>
            <div className="border   rounded-md">
              <select className="border-r py-3 px-2 w-[10%] bg-transparent">
                <option>€</option>
                <option>$</option>
                <option>€</option>
              </select>
              <input
                className="px-3 w-[90%] py-3 bg-transparent"
                type="number"
                placeholder="Enter"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label>Boarding capacity</label>
            <input
              type="text"
              placeholder="Name of your Insurer"
              className="border p-3 rounded-md font-light"
            />
            <div className="text-sm">
              With this self-certification I confirm that I am in compliance
              with the insurance obligations in force in my country
            </div>
          </div>

          <button className="bg-[#CBA557] w-[15%] py-4 rounded-lg text-white">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Insurance;
