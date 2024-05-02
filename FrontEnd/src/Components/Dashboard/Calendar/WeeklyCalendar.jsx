import { useState } from 'react';
import StatusDropdown from './StatusDropdown';
const WeeklyCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date()); // Initialize with current date
  const statusArray = [
    { day: 'Mon', time: '6pm', status: 'confirmed' },
    { day: 'Fri', time: '6:45pm', status: 'pending' },
    { day: 'Fri', time: '6:45pm', status: 'pending' },
    { day: 'Fri', time: '1:50am', status: 'confirmed' },
    { day: 'Sun', time: '2:39am', status: 'pending' },
  ];
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
    <div className="overflow-auto">
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
    </div>
  );
};
export default WeeklyCalendar;
