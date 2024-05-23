import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";

const BoatsNavbar = () => {
  const [promotionDropdown, setPromotionDropdown] = useState(false);
  const togglePromotionDropdown = () => {
    setPromotionDropdown((prev) => !prev);
  };
  return (
    <div className="overflow-auto bg-white mt-4 rounded-md px-3 md:ml-0 md:mr-0">
      <table className="px-4 whitespace-nowrap text-[#74828F] overflow-auto min-w-full text-left">
        <tr className="w-fit text-black rounded-xl border-b-2 border-[#01365914]">
          <th className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
            <Link to={"/Dashboard/my-boats/overview"}>Overview</Link>
          </th>
          <th className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
            <Link to={"/Dashboard/my-boats/information"}>Description</Link>
          </th>
          <th className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
            <Link to={"/Dashboard/my-boats/photo"}>Photo</Link>
          </th>
          <th className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
            <Link to={"/Dashboard/my-boats/info-access"}>
              Information & Access
            </Link>
          </th>
          <th className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
            <Link to={"/Dashboard/my-boats/calender"}>Calendar</Link>
          </th>
          <th className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
            <Link to={"/Dashboard/my-boats/termscondition"}>Conditions</Link>
          </th>
          <th className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
            <Link to={"/Dashboard/my-boats/rates"}>My Rates</Link>
          </th>
          <th className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
            <Link to={"/Dashboard/my-boats/deposit"}>Damage Deposit</Link>
          </th>
          <th className="py-3 px-3 gap-2 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
            <Link to={"/Dashboard/my-boats/promotion"}>Promotions</Link>
          </th>
          <th className="py-3 px-3 gap-2 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
            <button
              onClick={togglePromotionDropdown}
              className="flex items-center "
            >
              <FaAngleDown
                className={`${promotionDropdown ? "rotate-180" : ""}`}
              />
            </button>
            {promotionDropdown && (
              <tr className="absolute flex flex-col right-0 mt-2 mr-4 w-48 bg-white shadow-lg rounded-lg py-2 pl-2">
                <th className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
                  <Link to={"/Dashboard/my-boats/extra-services"}>
                    Extra Services
                  </Link>
                </th>
                <th className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
                  <Link to={"/Dashboard/my-boats/insurance"}>Insurance</Link>
                </th>
                <th className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
                  <Link to={"/Dashboard/my-boats/address"}>Addresses</Link>
                </th>
                <th className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
                  <Link to={"/Dashboard/my-boats/equipments"}>
                    Equipment and Uses
                  </Link>
                </th>
              </tr>
            )}
          </th>
        </tr>
      </table>
    </div>
  );
};

export default BoatsNavbar;
