import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";

const BoatsNavbar = () => {
  const [promotionDropdown, setPromotionDropdown] = useState(false);
  const togglePromotionDropdown = () => {
    setPromotionDropdown((prev) => !prev);
  };
  return (
    <div className="overflow-auto min-w-full bg-white mt-4 rounded-md px-3 md:ml-0 md:mr-0">
      <div className=" flex items-center w-max gap-3 text-black">
        <div className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
          <Link to={"/Dashboard/my-boats/overview"}>Overview</Link>
        </div>
        <div className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
          <Link to={"/Dashboard/my-boats/information"}>Description</Link>
        </div>
        <div className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
          <Link to={"/Dashboard/my-boats/photo"}>Photo</Link>
        </div>
        <div className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
          <Link to={"/Dashboard/my-boats/info-access"}>
            Information & Access
          </Link>
        </div>
        <div className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
          <Link to={"/Dashboard/my-boats/boatDocuments"}>Boat Documents</Link>
        </div>
        <div className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
          <Link to={"/Dashboard/my-boats/calender"}>Calendar</Link>
        </div>
        <div className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
          <Link to={"/Dashboard/my-boats/termscondition"}>Conditions</Link>
        </div>
        <div className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
          <Link to={"/Dashboard/my-boats/rates"}>My Rates</Link>
        </div>
        <div className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
          <Link to={"/Dashboard/my-boats/deposit"}>Damage Deposit</Link>
        </div>
        <div className="py-3 px-3 gap-2 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
          <Link to={"/Dashboard/my-boats/promotion"}>Promotions</Link>
        </div>
        <div className="py-3 px-3 gap-2 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
          <button
            onClick={togglePromotionDropdown}
            className="flex items-center "
          >
            <FaAngleDown
              className={`${promotionDropdown ? "rotate-180" : ""}`}
            />
          </button>
          {promotionDropdown && (
            <div className="absolute z-10 flex flex-col right-0 mt-2 mr-4 w-48 bg-white shadow-lg rounded-lg py-2 pl-2">
              <div className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
                <Link to={"/Dashboard/my-boats/extra-services"}>
                  Extra Services
                </Link>
              </div>
              <div className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
                <Link to={"/Dashboard/my-boats/insurance"}>Insurance</Link>
              </div>
              <div className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
                <Link to={"/Dashboard/my-boats/address"}>Addresses</Link>
              </div>
              <div className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
                <Link to={"/Dashboard/my-boats/equipments"}>
                  Equipment and Uses
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BoatsNavbar;
