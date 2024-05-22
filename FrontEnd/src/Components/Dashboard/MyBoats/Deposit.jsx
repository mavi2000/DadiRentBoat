import React, { useState } from "react";
import BoatsNavbar from "./BoatsNavbar";

const Deposit = () => {
  const [checkbox, setCheckbox] = useState(false);
  const handelCheckbox = (event) => {
    setCheckbox(event.target.checked);
  };
  return (
    <div className="flex flex-col gap-3">
      <BoatsNavbar />
      <div className="bg-white mx-2 py-8 mb-10 px-12 flex flex-col gap-10 text-[#4B465C]">
        <div className="font-medium">Damage Deposit</div>
        <form className="flex flex-col  gap-8">
          <div className="flex items-center gap-3">
            <input type="checkbox" />
            <div className="text-sm">No damage deposit required</div>
          </div>
          <div className="flex flex-col gap-2">
            <div>Damage Deposit</div>
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
          <div className="flex items-start  gap-4">
            <input
              type="checkbox"
              checked={checkbox}
              onChange={handelCheckbox}
              className="mt-1"
            />
            <div>
              <div>Deposit managed directly </div>
              <div className="font-light">
                By indicating the types of deposits accepted, you reduce the
                risk of last-minute cancellations
              </div>
            </div>
          </div>{" "}
          {checkbox && (
            <div className="flex flex-col gap-3 pl-8">
              <div>What type of deposits do you accept?</div>
              <div className="flex items-center gap-3">
                <input type="checkbox" />
                <div>Check</div>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" />
                <div>Cash</div>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" />
                <div>Card preauthorization</div>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" />
                <div>Other</div>
              </div>
            </div>
          )}
          <button className="bg-[#CBA557] w-[15%] py-4 rounded-lg text-white">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Deposit;
