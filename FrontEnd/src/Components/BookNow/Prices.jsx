import React from 'react'

const Prices = ({
month,
normalDay,
normalHalfMorning,
normalHalfAfternoon,

weekend,
weekendHalfMorning,
weekendHalfAfternoon,


}) => {
  return (
    <table className="border border-[#CBA557] rounded-xl bg-white w-[46%] sm:w-1/3 md:w-1/4 lg:w-1/5 overflow-hidden border-separate">
    <thead>
      <tr>
        <th className="bg-[#CBA557] bg-opacity-30 text-sm text-[#676767] font-normal text-start px-3 py-2">
          {month}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className=''>
        <td className="text-sm font-normal flex flex-col px-4 py-3 gap-3">
          
          <div className="flex justify-between">
            <span className="text-[#CBA557]">Normal Day:</span>
          </div>

          
          <div className="flex justify-between">
            <span className="text-[#676767]">Full Day:</span>
            <span className="text-sm font-normal text-[#676767]">
            {normalDay}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-[#676767]">Half Day Morning:</span>
            <span className="text-sm font-normal text-[#676767]">
            {normalHalfMorning}
            </span>
          </div>


          <div className="flex justify-between">
            <span className="text-[#676767]">Half Day Afternoon:</span>
            <span className="text-sm font-normal text-[#676767]">
              {normalHalfAfternoon}
            </span>
          </div>

          <div className="flex justify-between">
            <span className='text-[#CBA557]'>Weekend:</span>
          </div>


          <div className="flex justify-between">
            <span className='text-[#676767]'>Full Day:</span>
            <span className="text-sm font-normal text-[#676767]">
              {weekend}
            </span>
          </div>


          <div className="flex justify-between">
            <span className='text-[#676767]'>Half Day Morning:</span>
            <span className="text-sm font-normal text-[#676767]">
              {weekendHalfMorning}
            </span>
          </div>


          <div className="flex justify-between">
            <span className='text-[#676767]'>Half Day Afternoon:</span>
            <span className="text-sm font-normal text-[#676767]">
              {weekendHalfAfternoon}
            </span>
          </div>


        </td>
      </tr>
    </tbody>
  </table>
  )
}

export default Prices
