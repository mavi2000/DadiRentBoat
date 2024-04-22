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
    <table className="border border-[#CBA557] rounded-xl bg-white w-1/2 sm:w-1/3 md:w-1/5 md:h-[294px] overflow-hidden border-separate">
    <thead>
      <tr>
        <th className="bg-[#CBA557] bg-opacity-30 text-sm text-[#000000]">
          {month}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="text-sm font-normal">
          <div className="flex justify-between">
            <span className="text-[#CBA557]">Normal Day:</span>
            <span className="text-sm font-normal text-[#676767]">
            {normalDay}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Half Day Morning:</span>
            <span className="text-sm font-normal text-[#676767]">
            {normalHalfMorning}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Half Day Afternoon:</span>
            <span className="text-sm font-normal text-[#676767]">
              {normalHalfAfternoon}
            </span>
          </div>
        </td>
      </tr>
      <tr>
        <td className="text-sm text-[#CBA557] font-normal">
          <div className="flex justify-between">
            <span>Weekend:</span>
            <span className="text-sm font-normal text-[#676767]">
              {weekend}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Half Day Morning:</span>
            <span className="text-sm font-normal text-[#676767]">
              {weekendHalfMorning}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Half Day Afternoon:</span>
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
