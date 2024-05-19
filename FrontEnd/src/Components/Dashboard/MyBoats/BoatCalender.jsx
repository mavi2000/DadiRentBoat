import React, { useState } from "react";
import BoatsNavbar from "./BoatsNavbar";
import { IoMdAdd } from "react-icons/io";
import CalenderPopup from "./CalnderPopup";
const BoatCalender = () => {
  const [popup, setPopup] = useState(false);
  const handelPopup = (e) => {
    e.preventDefault();
    setPopup(!popup);
  };
  return (
    <div className="flex flex-col gap-3">
      <BoatsNavbar />
      <form className="bg-white ">
        <div className="mx-8 py-8 flex flex-col gap-6 text-[#4B465C] w-[80%]">
          <div className="font-medium">Calender</div>
          <div className="text-sm">
            By default, your boat is always available. Add the dates on your
            calendar when your boat is not available. By clicking on 2 dates,
            you will add a period of unavailability of several days
          </div>
          <div className="w-[100%] shadow-md">Hello</div>
          <div className="flex items-center gap-3">
            <div>Select Time Slot</div>
            <select className="border py-2 px-3 w-[15%] rounded-md text-sm text-[#8d87a4]">
              <option>Full Day</option>
              <option>Half Day</option>
            </select>
          </div>
          <div>Add Unavailable Period</div>
          <div className="text-sm text-[#8d87a4]">
            Unavailable is an extended period of unavailability that will be
            added to your unavailability list and repeated each year.
          </div>
          <div className=" w-[80%] flex flex-col gap-5">
            <button
              type="button"
              onClick={handelPopup}
              className="border w-[45%] py-3 border-[#CBA557] text-sm font-semibold rounded-lg text-[#CBA557] justify-center flex items-center gap-3"
            >
              <IoMdAdd className="text-lg" />
              Add winter Unavailable period
            </button>
            {popup && (
              <CalenderPopup
                onClose={() => {
                  setPopup(false);
                }}
              />
            )}
          </div>
          <div>Unavailable Period</div>
          <div className="flex justify-between">
            <div className="text-sm">
              Unavailable from 10 Dec 2024 to 10 March 2025
            </div>
            <div className="flex gap-8">
              <button className="py-1 px-4 border border-[#CBA557] text-[#CBA557] rounded-md text-sm font-medium">
                Edit
              </button>
              <button className="py-1 px-4 border border-[#FF6347] text-[#FF6347] rounded-md text-sm font-medium">
                Delete
              </button>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-sm">
              Unavailable from 10 Dec 2024 to 10 March 2025
            </div>
            <div className="flex gap-8">
              <button className="py-1 px-4 border border-[#CBA557] text-[#CBA557] rounded-md text-sm font-medium">
                Edit
              </button>
              <button className="py-1 px-4 border border-[#FF6347] text-[#FF6347] rounded-md text-sm font-medium">
                Delete
              </button>
            </div>
          </div>
          <button className="border w-[15%] py-3 border-[#CBA557] text-sm font-semibold rounded-lg bg-[#CBA557] text-white justify-center flex items-center gap-3">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default BoatCalender;
