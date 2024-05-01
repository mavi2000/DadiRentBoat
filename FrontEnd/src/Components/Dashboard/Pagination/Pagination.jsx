import React from 'react'

const Pagination = () => {
  return (
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
  )
}

export default Pagination
