import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { GrFormPrevious } from 'react-icons/gr';
import { GrFormNext } from 'react-icons/gr';

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  // Dummy data for events, replace it with actual data
  const events = [
    {
      date: new Date(2024, 4, 17),
      title: 'Confirmed',
      time: '7:00am',
      deposit: '$40',
    },
    {
      date: new Date(2024, 4, 20),
      title: 'Confirmed',
      time: '7:00am',
      deposit: '$40',
    },
  ];

  // Function to format events for a specific date
  const getEventsForDate = (date) => {
    return events.filter(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear()
    );
  };

  // Function to render day cell with events
  const renderDay = (props) => {
    const { date } = props;
    const eventsForDate = getEventsForDate(date);
    return (
      <div className=" mx-[6%] my-[4%]">
        <div className="relative h-full border-r border-gray-300">
          <div className="absolute top-0 left-0 ml-1 mt-1">
            {date.getDate()}
          </div>
          <div className="absolute bottom-0 right-0 mr-1 mb-1 text-xs text-gray-500">
            {date.getDate()}
          </div>
          {eventsForDate.map((event, index) => (
            <div key={index} className="absolute top-0 left-0 m-1">
              <div className="flex items-center">
                <div className="bg-green-500 rounded-full w-4 h-4 mr-2"></div>
                <div className="bg-yellow-500 rounded-full w-4 h-4 mr-2"></div>
                <div className="text-sm text-[#4B465C]">+2 more</div>
              </div>
              <div className="bg-yellow-300 p-2 rounded mt-2 absolute left-0 top-full z-10">
                <div className="bg-green-300 p-2 rounded mb-2">Green Box</div>
                <div className="flex items-center">
                  <div className="bg-yellow-300 rounded-full w-4 h-4 mr-2"></div>
                  <div className="text-[#008000] text-sm">John Doe</div>
                </div>
                <div className="text-[#008000] text-sm">Confirmed</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Array of days starting from Sunday to Saturday
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className=" mx-[6%] my-[4%]">
      <div className=" flex justify-between items-center">
        <div className=" flex justify-center items-center">
          <span>
            <GrFormPrevious />
          </span>
          <span>
            <GrFormNext />
          </span>
          {new Date().toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </div>

        <div className=" flex">
          <button className=" py-3 px-5 text-[#CBA557] text-sm text-center bg-[#CBA557] bg-opacity-15 rounded-l-md">
            Month
          </button>
          <button className=" py-3 px-5 text-[#CBA557] text-sm text-center bg-[#CBA557] bg-opacity-30 rounded-r-md">
            Week
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center mt-4">
        <div className="w-full h-full flex flex-col items-center">
          <Calendar
            onChange={setDate}
            value={date}
            className="mb-6 w-full"
            renderDay={renderDay}
            calendarType="US"
            locale="en-US"
            formatLongDate={(locale, date) =>
              date.toLocaleDateString(locale, {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
              })
            }
            formatShortWeekday={(locale, date) => days[date.getDay()]}
          />
        </div>
      </div>
    </div>
  );
};

export default MyCalendar;
