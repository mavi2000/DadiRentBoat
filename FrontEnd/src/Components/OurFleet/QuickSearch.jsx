import React, { useState } from 'react';
import { IoPersonOutline } from 'react-icons/io5';
import { FaAngleDown } from 'react-icons/fa6';
import { LuCalendar } from 'react-icons/lu';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const QuickSearch = () => {
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(null); // Initially no Check Out date
  const [isCheckInOpen, setIsCheckInOpen] = useState(false);
  const [isCheckOutOpen, setIsCheckOutOpen] = useState(false);

  const handleCalendarClick = (isOpenState, setIsOpenState) => () => {
    if (isCheckInOpen !== isOpenState) setIsCheckInOpen(false);
    if (isCheckOutOpen !== isOpenState) setIsCheckOutOpen(false);
    setIsOpenState(!isOpenState);
  };

  return (
    <section className="bg-[var(--primary-color)]  px-12 py-6 mx-[3%] md:mx-[6%] rounded-2xl -mt-16">
      <h1 className="text-3xl font-bold text-white mb-5">Quick Search </h1>
      <div className="flex flex-wrap gap-4">
        <div className="rounded grow whitespace-nowrap bg-white p-4 relative">
          <button
            className="flex gap-2 items-center text-[#5B5B5B] text-sm"
            onClick={handleCalendarClick(isCheckInOpen, setIsCheckInOpen)}
          >
            <LuCalendar size={22} />
            Check In <FaAngleDown size={20} />
          </button>
          {isCheckInOpen && (
            <div className="calendar-container rounded bg-white p-4 absolute top-full left-0 z-50">
              <Calendar
                onChange={setCheckInDate}
                value={checkInDate}
                selectRange={true}
              />
            </div>
          )}
        </div>

        {/* checkout calendar */}
        <div className="rounded grow whitespace-nowrap  bg-white p-4 relative">
          <button
            className="flex gap-2 items-center text-[#5B5B5B] text-sm"
            onClick={handleCalendarClick(isCheckOutOpen, setIsCheckOutOpen)}
          >
            <LuCalendar size={22} />
            <span className="mr-auto block">Check Out</span>
            <FaAngleDown size={20} className="ml-auto mr-0" />
          </button>
          {isCheckOutOpen && (
            <div className="calendar-container rounded bg-white p-4 absolute top-full left-0 z-50">
              <Calendar
                onChange={setCheckOutDate}
                value={checkOutDate}
                selectRange={true}
              />
            </div>
          )}
        </div>

        {/* select day */}
        <div className="relative grow rounded text-[#5B5B5B] text-sm">
          <LuCalendar size={22} className="absolute left-4 top-4" />
          <FaAngleDown size={20} className="absolute right-4 top-4" />
          <select
            name="day"
            id="day"
            className="rounded w-full bg-white p-4 px-12 outline-none appearance-none"
          >
            <option value="Half Day Morning">Half Day Morning</option>
            <option value="Half Day Afternoon">Half Day Afternoon</option>
            <option value="Full Day">Full Day</option>
          </select>
        </div>

        {/* select persons */}
        <div className="relative grow rounded text-[#5B5B5B] text-sm">
          <IoPersonOutline size={22} className="absolute left-4 top-4" />
          <FaAngleDown size={20} className="absolute right-4 top-4" />
          <select
            name="day"
            id="day"
            className="rounded w-full bg-white p-4 px-12 outline-none appearance-none"
          >
            <option value="No of Persons">No of Persons</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="10">10</option>
          </select>
        </div>

        {/* search */}

        <input
          type="text"
          className="bg-white h-full p-4 grow w-fit outline-none rounded-full text-[var(--primary-color)] placeholder:text-[var(--primary-color)] text-base font-bold"
          placeholder="Search"
        />
      </div>
    </section>
  );
};

export default QuickSearch;
