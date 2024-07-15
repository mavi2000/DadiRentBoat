import { useState } from 'react';
import CalendarDays from './CalendarDays';
import { monthsData, weekdaysData } from './data';
import "./Calender.css"

const WinterizingCalendar = ({ onCancel, onSelectRange }) => {
  const weekdays = weekdaysData;
  const months = monthsData;

  const [currentDay, setCurrentDay] = useState(new Date());
  const [numMonths, setNumMonths] = useState(2);
  const [unavailableRanges, setUnavailableRanges] = useState([]);
  const [rangeStart, setRangeStart] = useState(null);
  const [hoverDate, setHoverDate] = useState(null);

  const nextMonth = () => {
    setCurrentDay(
      new Date(currentDay.setMonth(currentDay.getMonth() + numMonths))
    );
  };

  const previousMonth = () => {
    setCurrentDay(
      new Date(currentDay.setMonth(currentDay.getMonth() - numMonths))
    );
  };

  const handleDayClick = (day) => {
    if (!rangeStart) {
      setRangeStart(day.date);
    } else {
      setUnavailableRanges([
        ...unavailableRanges,
        { start: rangeStart, end: day.date },
      ]);
      setRangeStart(null);
      setHoverDate(null);
      onSelectRange({ start: rangeStart, end: day.date });
    }
  };

  const handleDayHover = (day) => {
    if (rangeStart) {
      setHoverDate(day.date);
    }
  };

  const resetUnavailability = () => {
    setUnavailableRanges([]);
    setRangeStart(null);
    setHoverDate(null);
    onSelectRange(null);
  };

  const generateMonthGrids = () => {
    const grids = [];
    for (let i = 0; i < numMonths; i++) {
      const monthDate = new Date(currentDay);
      monthDate.setMonth(currentDay.getMonth() + i);

      grids.push(
        <div key={i} className="">
          <h2 className="mb-4 text-center font-medium text-lg">
            {months[monthDate.getMonth()]} {monthDate.getFullYear()}
          </h2>
          <div className="grid grid-cols-7 gap-0 text-center text-gray-500">
            {weekdays.map((weekday, index) => (
              <p key={index}>{weekday}</p>
            ))}
          </div>
          <CalendarDays
            day={monthDate}
            handleDayClick={handleDayClick}
            handleDayHover={handleDayHover}
            unavailableRanges={unavailableRanges}
            rangeStart={rangeStart}
            hoverDate={hoverDate}
          />
        </div>
      );
    }
    return grids;
  };

  return (
    <>
      <div className="bg-white rounded-md shadow-lg mt-4 p-4">
        <h1 className="text-2xl font-semibold flex justify-between gap-12">
          Winterizing calendar
          <button
            className="rounded-full px-3 py-1 bg-[#CBA557] font-medium"
            onClick={onCancel}
          >
            x
          </button>
        </h1>
        <div className="flex justify-between my-4 text-4xl">
          <button onClick={previousMonth}>{'<'}</button>
          <button onClick={nextMonth}>{'>'}</button>
        </div>
        <div className="grid grid-cols-2 gap-12 border pt-4 mb-8">
          {generateMonthGrids()}
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={resetUnavailability}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default WinterizingCalendar;
