import axios from 'axios';
import { useState, useEffect } from 'react';
import CalendarDays from './CalendarDays';
import { monthsData, weekdaysData } from './data';
import UnavailabilityHours from './UnavailabilityHours';
import BoatsNavbar from '../BoatsNavbar';
import WinterizingPeriod from './WinterizingPeriod';
import "./Calender.css";
import baseURL from '../../../../../APi/BaseUrl';

const Calendar = () => {
  const weekdays = weekdaysData;
  const months = monthsData;

  const [currentDay, setCurrentDay] = useState(new Date());
  const [numMonths, setNumMonths] = useState(2);
  const [unavailableRanges, setUnavailableRanges] = useState([]);
  const [rangeStart, setRangeStart] = useState(null);
  const [hoverDate, setHoverDate] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showHours, setShowHours] = useState(false);
  const [winterizingPeriod, setWinterizingPeriod] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [unavailabilityHours, setUnavailabilityHours] = useState({});
  // const boatId = "2321321321321"; 

  const nextMonth = () => {
    setCurrentDay(new Date(currentDay.setMonth(currentDay.getMonth() + numMonths)));
  };

  const previousMonth = () => {
    setCurrentDay(new Date(currentDay.setMonth(currentDay.getMonth() - numMonths)));
  };

  const handleWinterizingPeriod = () => {
    setWinterizingPeriod(!winterizingPeriod);
  };

  const handleNumMonthsChange = (e) => {
    setNumMonths(Number(e.target.value));
  };

  const handleDayClick = (day) => {
    console.log('Day clicked:', day);
    if (!rangeStart) {
      setRangeStart(day.date);
      console.log('Range start set:', day.date);
    } else {
      setShowPopup(true);
      setSelectedDay(day);
      console.log('Popup shown, selected day set:', day);
    }
  };

  const handleDayHover = (day) => {
    if (rangeStart) {
      setHoverDate(day.date);
      console.log('Hover date set:', day.date);
    }
  };

  const handleDaySelection = (selectedTimeSlots) => {
    const key = selectedDay.date.toDateString();
    console.log('Selected time slots:', selectedTimeSlots);

    const data = {
      // boatId,
      startDate: rangeStart,
      endDate: selectedDay.date,
      timeSlots: selectedTimeSlots.length > 0 ? selectedTimeSlots : ['Full-day'],
      type: 'booking'
    };

    console.log('Data to be sent:', data);

    baseURL.post('/Booking/Book-boat', data)
      .then(response => {
        console.log('Unavailable period added successfully:', response.data);
        setUnavailableRanges(prev => [...prev, { start: rangeStart, end: selectedDay.date, timeSlots: selectedTimeSlots }]);
        setRangeStart(null);
        setHoverDate(null);
        setShowPopup(false);
      })
      .catch(error => {
        console.error('Error adding unavailable period:', error.response?.data || error.message);
      });
  };

  const handleSlotSelection = (hours) => {
    const key = selectedDay.date.toDateString();
    console.log('Selected hours:', hours);
    setUnavailabilityHours(prev => ({
      ...prev,
      [key]: hours.length > 0 ? hours : ['Full-day'],
    }));
    console.log('Unavailability hours to be updated:', { ...unavailabilityHours, [key]: hours.length > 0 ? hours : ['Full-day'] });
    setShowHours(false);
    handleDaySelection(hours.length > 0 ? hours : ['Full-day']);
  };

  useEffect(() => {
    console.log('Unavailability hours updated:', unavailabilityHours); // Use useEffect to see the updated state
  }, [unavailabilityHours]);

  const resetUnavailability = () => {
    setUnavailableRanges([]);
    setUnavailabilityHours({});
    console.log('Unavailability reset');
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
      <BoatsNavbar />
      <div className="bg-white rounded-md shadow-lg mt-4 p-4">
        <h1 className="text-2xl font-semibold">Calendar</h1>
        <div className="mt-4">
          Number of months to display
          <select
            name="numMonths"
            id="numMonths"
            value={numMonths}
            onChange={handleNumMonthsChange}
            className="px-3 py-2 border-2 rounded-md outline-none ml-4"
          >
            {[...Array(11).keys()].map((i) => (
              <option key={i + 2} value={i + 2}>
                {i + 2}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-between my-4 text-4xl">
          <button onClick={previousMonth}>{'<'}</button>
          <button onClick={nextMonth}>{'>'}</button>
        </div>
        <div className="grid grid-cols-2 gap-12 border pt-4 mb-8">
          {generateMonthGrids()}
        </div>
        {showPopup && !showHours && (
          <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg text-black">
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleDaySelection(['Full-day'])}
                  className="px-3 py-2 border"
                >
                  Day
                </button>
                <button
                  onClick={() => setShowHours(true)}
                  className="px-3 py-2 border"
                >
                  Slot
                </button>
              </div>
            </div>
          </div>
        )}
        {showPopup && showHours && (
          <UnavailabilityHours
            onCancel={() => {
              setShowHours(false);
              setShowPopup(false);
            }}
            onConfirm={handleSlotSelection}
          />
        )}
        <div className="unavailability-list">
          {Object.keys(unavailabilityHours).map((date) => (
            <div key={date}>
              <strong>{date}</strong>: {unavailabilityHours[date].join(', ')}
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={resetUnavailability}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Reset
          </button>
        </div>
        <button
          onClick={handleWinterizingPeriod}
          className="px-4 py-2 font-medium text-base border rounded-md hover:text-white hover:bg-[#CBA557]"
        >
          + Add a winterizing period
        </button>
        {winterizingPeriod && (
          <WinterizingPeriod onCancel={handleWinterizingPeriod} />
        )}
      </div>
    </>
  );
};

export default Calendar;
