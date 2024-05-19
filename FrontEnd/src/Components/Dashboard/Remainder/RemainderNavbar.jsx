import React from 'react'
import { Link } from 'react-router-dom';

const RemainderNavbar = () => {
  return (
    <div className="overflow-auto bg-white mt-4 rounded-md px-3">
    <table className=" px-4 whitespace-nowrap text-[#74828F] overflow-auto min-w-full  text-left">
      <tr className="w-fit text-black rounded-xl border-b-2 border-[#01365914]">
        <div className='flex gap-14'>
        <th className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
          <Link to={"/Dashboard/reminders"}>Reminders</Link>
        </th>
        <th className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
          <Link to={"/Dashboard/booked-boats"}>Booked Boats</Link>
        </th>
        <th className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
          <Link to={"/Dashboard/unbooked-boats"}>Unbooked Boats</Link>
        </th>
        </div>
      </tr>
    </table>
  </div>
  )
}

export default RemainderNavbar
