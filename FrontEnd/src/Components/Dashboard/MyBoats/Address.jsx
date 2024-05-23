import React from "react";
import BoatsNavbar from "./BoatsNavbar";
import { MdCancel } from "react-icons/md";
import { TbAlertCircleFilled } from "react-icons/tb";

const Address = () => {
  return (
    <div className="flex flex-col gap-3">
      <BoatsNavbar />
      <form className="bg-white mx-2 py-8 px-12  text-[#4B465C]">
        <div className="flex flex-col gap-10 w-[80%]">
          <div className="">Addresses</div>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label>Place</label>
              <select className="border  p-3 rounded-md font-light">
                <option>Select</option>
                <option>Select</option>
                <option>Select</option>
                <option>Select</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label>City</label>
              <div className="border flex items-center  rounded-md font-light">
                <input type="map" className=" p-3 w-[85%] bg-transparent" />
                <MdCancel className="text-xl text-[#CBA557] flex w-[15%] items-center justify-center" />
              </div>
            </div>
          </div>
          <div className="">Exact location</div>
          <div className="flex items-center font-light gap-2">
            Ads with a specific location receive more rental requests!{" "}
            <TbAlertCircleFilled className="text-lg" />
          </div>
          <button className="bg-[#CBA557] w-[15%] py-4 rounded-lg text-white">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Address;
