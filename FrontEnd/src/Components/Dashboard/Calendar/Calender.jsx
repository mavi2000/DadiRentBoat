import { useState } from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import StatusDropdown from './StatusDropdown';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date()); // Initialize with current date

  const statusArray = [
    { day: 'Mon', time: '6pm', status: 'confirmed' },
    { day: 'Fri', time: '6:45pm', status: 'pending' },
    { day: 'Fri', time: '6:45pm', status: 'pending' },
    { day: 'Fri', time: '1:50am', status: 'confirmed' },
    { day: 'Sun', time: '2:39am', status: 'pending' },
  ];

  const getNextWeek = () => {
    const nextWeek = new Date(currentDate);
    nextWeek.setDate(nextWeek.getDate() + 7); // Add 7 days
    setCurrentDate(nextWeek);
  };

  const getPreviousWeek = () => {
    const previousWeek = new Date(currentDate);
    previousWeek.setDate(previousWeek.getDate() - 7); // Subtract 7 days
    setCurrentDate(previousWeek);
  };

  let day;
  let month;
  let year;
  const formatDate = (date) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(
      date
    );
    [day, month, year] = formattedDate.split(' ');
    return `${month} ${day} ${year}`;
  };

  const generateTable = () => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const hours = [
      '6pm',
      '6:30pm',
      '7pm',
      '7:30pm',
      '8pm',
      '8:30pm',
      '9pm',
      '9:30pm',
      '10pm',
      '10:30pm',
      '11pm',
      '11:30pm',
      '12am',
      '12:30am',
      '1am',
      '1:30am',
      '2am',
      '2:30am',
      '3am',
      '3:30am',
      '4am',
    ];

    return (
      <table className="text-[#4b465cb8] w-full mt-6 ">
        <thead>
          <tr className="border-[1px] border-[#DBDADE]">
            <th className="border-[1px] border-[#DBDADE]"></th>
            {days.map((day, index) => {
              const columnDate = new Date(currentDate);
              columnDate.setDate(currentDate.getDate() + index);
              return (
                <th
                  key={index}
                  className="px-3 py-1 font-semibold text-sm border-[1px] border-[#DBDADE]"
                >
                  {day} {columnDate.getMonth() + 1}/{columnDate.getDate()}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr className="border-[1px] border-[#DBDADE] text-right">
            {' '}
            <td className="px-3 py-1 font-semibold text-sm text-[#4b465c85] border-[1px] border-[#DBDADE]">
              Boats
            </td>
            <td className="border-[1px] border-[#DBDADE]"></td>
            <td className="border-[1px] border-[#DBDADE]"></td>
            <td className="border-[1px] border-[#DBDADE]"></td>
            <td className="border-[1px] border-[#DBDADE]"></td>
            <td className="border-[1px] border-[#DBDADE]"></td>
            <td className="border-[1px] border-[#DBDADE]"></td>
          </tr>
          {hours.map((hour, hourIndex) => (
            <tr key={hourIndex} className="border-[1px] border-[#DBDADE]">
              <td className="px-3 py-1  text-right font-semibold text-sm border-[1px] border-[#DBDADE]">
                {hour}
              </td>
              {days.map((day, dayIndex) => {
                const status = statusArray.find(
                  (status) =>
                    status.day === day && compareTimes(status.time, hour)
                );
                return (
                  <td
                    key={dayIndex}
                    className={`border-[1px] relative text-center border-[#DBDADE] ${
                      status
                        ? status.status === 'confirmed'
                          ? 'bg-[#5BAA7380] cursor-pointer confirmed-pending-status'
                          : 'bg-[#F9DB7B80] cursor-pointer confirmed-pending-status'
                        : ''
                    }`}
                  >
                    <StatusDropdown status={status} />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  // Function to compare two time strings
  const compareTimes = (time1, time2) => {
    const [hour1, minute1] = time1.split(':').map((str) => parseInt(str));
    const [hour2, minute2] = time2.split(':').map((str) => parseInt(str));

    if (hour1 === hour2 && minute1 === minute2) {
      return true; // Same hour and same minute
    } else if (
      hour1 === hour2 && // Same hour
      ((minute1 < 30 && minute2 < 30) || (minute1 >= 30 && minute2 >= 30))
    ) {
      return true; // Both times are in the same half-hour range
    } else if (
      Math.abs(hour1 - hour2) === 1 && // Difference of 1 hour
      ((minute1 >= 30 && minute2 < 30) || (minute1 < 30 && minute2 >= 30))
    ) {
      return true; // One time is in the first half-hour and the other in the second half-hour
    }

    return false;
  };

  return (
    <div className="bg-white rounded-md shadow-lg px-8 py-4 grow my-4 mb-[210px]">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <button onClick={getPreviousWeek}>
            <GrFormPrevious size={25} className="text-[#4b465cc1]" />
          </button>
          <button onClick={getNextWeek}>
            <GrFormNext size={25} className="text-[#4b465cc1]" />
          </button>
          <p>{formatDate(currentDate)}</p>
        </div>

        <div className="flex">
          <button className="py-3 px-5 text-[#CBA557] text-sm text-center bg-[#CBA557] bg-opacity-15 rounded-l-md">
            Month
          </button>
          <button className="py-3 px-5 text-[#CBA557] text-sm text-center bg-[#CBA557] bg-opacity-30 rounded-r-md">
            Week
          </button>
        </div>
      </div>

      {generateTable()}
    </div>
  );
};

export default Calendar;
