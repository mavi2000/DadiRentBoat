import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { IoMdSwap } from "react-icons/io";

const Booking = () => {
  return (
    <div className='mx-[3%] md:mx-[6%] mt-[4%] md:mt-[7%] mb-[1%]'>
   
   <div className=' flex justify-between'>
    <div className='flex gap-2 items-center py-2 pl-3 pr-4 bg-[#ffff] w-[35%] rounded-xl border border-[#DBDADE]'>
      <IoSearchOutline className='text-gray-500' />
      <input
        type="text"
        placeholder='Search'
        className='bg-transparent outline-none focus:ring-0 w-full'
      />
    </div>

    <div className='flex gap-2 items-center px-3 py-1 md:py-2 md:pl-3 md:pr-4 border border-[#DBDADE] rounded-xl w-[30%] md:w-[16%] bg-[#ffff]'>
      <span>
        <IoMdSwap />
      </span>
      <select name="filter" className='bg-[#ffff] rounded-md outline-none focus:ring-0 appearance-none w-full'>
        <option value="">Filter</option>
        {/* Add more options as needed */}
      </select>
    </div>

    </div>

    <div class="overflow-x-auto">
    <table className="w-full my-[3%] border border-[#DBDADE]">
  <thead className=' bg-[#CBA557]'>
    <tr className=" text-gray-600 text-left uppercase font-medium">
      <th className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#FFFFFF] font-medium">BOAT NAME</th>
      <th className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#FFFFFF] font-medium">DATE</th>
      <th className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#FFFFFF] font-medium">DURATION</th>
      <th className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#FFFFFF] font-medium">PAYMENT</th>
      <th className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#FFFFFF] font-medium">INVOICE</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-b border-[#DBDADE] hover:bg-gray-100">
      <td className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#4B465C]">Lady Gio</td>
      <td className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#4B465C]">10. MAR 2022</td>
      <td className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#4B465C]">HALF DAY MORNING</td>
      <td className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#4B465C]">
        <span className=" text-[#0074FF]">
        $120</span>/499
        <p className=' text-[#4B465C] text-[13px]'>Deposit Paid</p>
        </td>
      <td className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#4B465C]">
        <a href="#" className="text-blue-500 underline">VIEW INVOICE</a>
      </td>
    </tr>
    <tr className="border-b border-[#DBDADE] hover:bg-gray-100">
      <td className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#4B465C]">Lady Gio</td>
      <td className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#4B465C]">10 MAR 2022</td>
      <td className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#4B465C]">HALF DAY MORNING</td>
      <td className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#4B465C]">
        <span className=" text-[#0074FF]">
        $120</span>/499
        <p className=' text-[#4B465C] text-[13px]'>Deposit Paid</p>
        </td>
      <td className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#4B465C]">
        <a href="#" className="text-blue-500 underline">VIEW INVOICE</a>
      </td>
    </tr>
    <tr className="border-b border-[#DBDADE] hover:bg-gray-100">
      <td className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#4B465C]">Lady Gio</td>
      <td className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#4B465C]">10 MAR 2022</td>
      <td className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#4B465C]">HALF DAY MORNING</td>
      <td className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#4B465C]">
        <span className=" text-[#0074FF]">
        $120</span>/499
        <p className=' text-[#4B465C] text-[13px]'>Deposit Paid</p>
        </td>
      <td className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#4B465C]">
        <a href="#" className="text-blue-500 underline">VIEW INVOICE</a>
      </td>
    </tr>
    <tr className="border-b border-[#DBDADE] hover:bg-gray-100">
      <td className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#4B465C]">Lady Gio</td>
      <td className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#4B465C]">10 MAR 2022</td>
      <td className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#4B465C]">HALF DAY MORNING</td>
      <td className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#4B465C]">
        <span className=" text-[#0074FF]">
        $120</span>/499
        <p className=' text-[#4B465C] text-[13px]'>Deposit Paid</p>
        </td>
      <td className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#4B465C]">
        <a href="#" className="text-blue-500 underline">VIEW INVOICE</a>
      </td>
    </tr>
    <tr className="border-b border-[#DBDADE] hover:bg-gray-100">
      <td className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#4B465C]">Lady Gio</td>
      <td className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#4B465C]">10 MAR 2022</td>
      <td className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#4B465C]">HALF DAY MORNING</td>
      <td className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#4B465C]">
        <span className=" text-[#0074FF]">
        $120</span>/499
        <p className=' text-[#4B465C] text-[13px]'>Deposit Paid</p>
        </td>
      <td className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#4B465C]">
        <a href="#" className="text-blue-500 underline">VIEW INVOICE</a>
      </td>
    </tr>
    <tr className="border-b border-[#DBDADE] hover:bg-gray-100">
      <td className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#4B465C]">Lady Gio</td>
      <td className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#4B465C]">10 MAR 2022</td>
      <td className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#4B465C]">HALF DAY MORNING</td>
      <td className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#4B465C]">
        <span className=" text-[#0074FF]">
        $120</span>/499
        <p className=' text-[#4B465C] text-[13px]'>Deposit Paid</p>
        </td>
      <td className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#4B465C]">
        <a href="#" className="text-blue-500 underline">VIEW INVOICE</a>
      </td>
    </tr>
    <tr className="border-b border-[#DBDADE] hover:bg-gray-100">
      <td className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#4B465C]">Lady Gio</td>
      <td className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#4B465C]">10 MAR 2022</td>
      <td className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#4B465C]">HALF DAY MORNING</td>
      <td className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#4B465C]">
        <span className=" text-[#0074FF]">
        $120</span>/499
        <p className=' text-[#4B465C] text-[13px]'>Deposit Paid</p>
        </td>
      <td className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#4B465C]">
        <a href="#" className="text-blue-500 underline">VIEW INVOICE</a>
      </td>
    </tr>
    </tbody>
</table>
</div>


    <div className=' mt-[5%] flex flex-col md:flex-row space-y-3 md:space-y-0 md:justify-between items-center'>

      <p className=' text-[#4B465C] text-sm font-semibold font-[Manrope]'>Showing 1 to 7 of 100 entries</p>


      <div class="flex items-center justify-between md:justify-center space-x-2">
            <button class="px-2 py-1 md:px-3 md:py-2  text-[#4B465C] text-opacity[8%] rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none focus:border focus:border-[#CBA557] focus:bg-[#CBA557] focus:text-[#FFFFFF] disabled:opacity-50" disabled>Previous</button>
            <button class="px-2 py-1 md:px-3 md:py-2  text-[#4B465C] text-opacity[8%] rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none focus:border focus:border-[#CBA557] focus:bg-[#CBA557] focus:text-[#FFFFFF]">1</button>
            <button class="px-2 py-1 md:px-3 md:py-2  text-[#4B465C] text-opacity[8%] rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none focus:border focus:border-[#CBA557] focus:bg-[#CBA557] focus:text-[#FFFFFF]">2</button>
            <button class="px-2 py-1 md:px-3 md:py-2  text-[#4B465C] text-opacity[8%] rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none focus:border focus:border-[#CBA557] focus:bg-[#CBA557] focus:text-[#FFFFFF]">3</button>
            <button class="px-2 py-1 md:px-3 md:py-2  text-[#4B465C] text-opacity[8%] rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none focus:border focus:border-[#CBA557] focus:bg-[#CBA557] focus:text-[#FFFFFF]">4</button>
            <button class="px-2 py-1 md:px-3 md:py-2  text-[#4B465C] text-opacity[8%] rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none focus:border focus:border-[#CBA557] focus:bg-[#CBA557] focus:text-[#FFFFFF]">5</button>
            <button class="px-2 py-1 md:px-3 md:py-2  text-[#4B465C] text-opacity[8%] rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none focus:border focus:border-[#CBA557] focus:bg-[#CBA557] focus:text-[#FFFFFF]">Next</button>
    </div>

      
    </div>

  </div>
  )
}

export default Booking
