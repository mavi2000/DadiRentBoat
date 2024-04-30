import { useState } from 'react';
import { RiListCheck2 } from 'react-icons/ri';

const Pickups = ({ title, opt3 }) => {
  const [selectDay, setSelectDay] = useState('Today');
  return (
    <div className="bg-white rounded-md shadow-lg px-8 py-4 grow mb-8">
      <div className="flex gap-2 justify-between flex-wrap items-center">
        <h1 className="text-[#4b465cd4] font-medium text-lg flex gap-2 items-center">
          <RiListCheck2 size={20} />
          {title}
        </h1>
        <select
          name="day"
          id="day"
          className="border-[1px] border-[#7B7B7B] rounded-md px-3 py-2 text-[#7B7B7B] outline-none"
          onChange={(e) => {
            setSelectDay(e.target.value);
          }}
        >
          <option value="Today">Today</option>
          <option value="Tomorrow">Tomorrow</option>
          <option value={opt3}>{opt3}</option>
        </select>
      </div>

      <div className="border-l-[1.5px] relative border-[#A8AAAE]">
        <div className="absolute size-[12px] bg-[#A8AAAE] rounded-full -top-[6px] -left-[7px]"></div>
        <div className="flex gap-2 justify-between flex-wrap items-start mt-4 p-6">
          <div className="">
            <h1 className="text-[#4b465cd4] font-medium text-base">
              Lester McCarthy
            </h1>
            <p className="text-base text-[--primary-color]">$50</p>
          </div>
          <p className="text-[#4b465c94] text-sm ">{selectDay}</p>
        </div>
      </div>
      <div className="border-l-[1.5px] relative border-[#A8AAAE]">
        <div className="absolute size-[12px] bg-[#A8AAAE] rounded-full -top-[6px] -left-[7px]"></div>
        <div className="flex gap-2 justify-between flex-wrap items-start p-6">
          <div className="">
            <h1 className="text-[#4b465cd4] font-medium text-base">
              Lester McCarthy
            </h1>
            <p className="text-base text-[--primary-color]">$50</p>
          </div>
          <p className="text-[#4b465c94] text-sm ">{selectDay}</p>
        </div>
      </div>
      <div className="border-l-[1.5px] relative border-[#A8AAAE]">
        <div className="absolute size-[12px] bg-[#A8AAAE] rounded-full -top-[6px] -left-[7px]"></div>
        <div className="flex gap-2 justify-between flex-wrap items-start p-6">
          <div className="">
            <h1 className="text-[#4b465cd4] font-medium text-base">
              Lester McCarthy
            </h1>
            <p className="text-base text-[--primary-color]">$50</p>
          </div>
          <p className="text-[#4b465c94] text-sm ">{selectDay}</p>
        </div>
      </div>
    </div>
  );
};
export default Pickups;
