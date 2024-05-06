import React from 'react';
import { Link } from 'react-router-dom';

const BoatsNavbar = () => {
  return (
    <div className="overflow-auto bg-white mt-4 rounded-md px-3 md:ml-0 md:mr-0">
      <table className="px-4 whitespace-nowrap text-[#74828F] overflow-auto min-w-full text-left">
        <tr className="w-fit text-black rounded-xl border-b-2 border-[#01365914]">
          <th className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
            <Link to={"/Dashboard/my-boats/overview"}>Overview</Link>
          </th>
          <th className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
            <Link>Description</Link>
          </th>
          <th className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
            <Link to={"/Dashboard/my-boats/photo"}>Photo</Link>
          </th>
          <th className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
            <Link to={"/Dashboard/my-boats/info-access"}>Information & Access</Link>
          </th>
          <th className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
            <Link>Calendar</Link>
          </th>
          <th className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
            <Link>My Rates</Link>
          </th>
          <th className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
            <Link>Damage Deposit</Link>
          </th>
          <th className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
            <Link>Promotions</Link>
          </th>
        </tr>
      </table>
    </div>
  );
};

export default BoatsNavbar;
