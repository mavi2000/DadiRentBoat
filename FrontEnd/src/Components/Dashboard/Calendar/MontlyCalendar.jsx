import React, { useState, useEffect } from 'react';
import StatusDropdown from './StatusDropdown';

const MonthlyCalendar = ({ currentDate, bookings }) => {
  const [days, setDays] = useState([]);

  console.log("monthly bookings", bookings);

  useEffect(() => {
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const firstDayOfWeek = firstDay.getDay();

    const emptyDaysBefore = firstDayOfWeek;
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    const displayedDays = [];
    for (let i = 0; i < emptyDaysBefore; i++) {
      displayedDays.push({ day: null, isCurrentMonth: false, status: null });
    }

    const todayDate = new Date().setHours(0, 0, 0, 0);

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
      const booking = bookings.find(
        (booking) => new Date(booking.availableDate).setHours(0, 0, 0, 0) === date.setHours(0, 0, 0, 0)
      );

      const status = booking ? {
        status: date.setHours(0, 0, 0, 0) === todayDate ? 'confirmed' : 'pending',
        userId: booking.userId,
        boatName: booking.boatName,
        rateType: booking.rateType
      } : null;

      displayedDays.push({
        day: i,
        isCurrentMonth: true,
        status,
      });
    }

    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), daysInMonth);
    const lastDayOfWeek = lastDay.getDay();
    const emptyDaysAfter = (6 - lastDayOfWeek) % 7;

    for (let i = 0; i < emptyDaysAfter; i++) {
      displayedDays.push({ day: null, isCurrentMonth: false, status: null });
    }

    setDays(displayedDays);
  }, [currentDate, bookings]);

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="w-full mt-8 overflow-auto">
      <table className="text-[#4b465cb8] w-full">
        <thead>
          <tr className="text-left">
            {weekdays.map((day, index) => (
              <th
                className="px-3 py-1 font-semibold text-sm border-[1px] border-[#DBDADE]"
                key={index}
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(Math.ceil(days.length / 7))].map((_, rowIndex) => (
            <tr key={rowIndex}>
              {days.slice(rowIndex * 7, (rowIndex + 1) * 7).map((dayObj, colIndex) => (
                <td
                  className={`px-3 py-1 font-semibold text-sm border-[1px] border-[#DBDADE] ${
                    dayObj.isCurrentMonth ? '' : ''
                  }`}
                  key={colIndex}
                >
                  {dayObj.day ? (
                    <div className="flex flex-col items-start justify-start gap-2">
                      {dayObj.day}
                      {dayObj.status && (
                        <span
                          className={`relative w-full h-[38px] rounded cursor-pointer confirmed-pending-status ${
                            dayObj
                              ? dayObj.status.status === 'confirmed'
                                ? 'bg-[#5BAA7380] cursor-pointer confirmed-pending-status'
                                : 'bg-[#F9DB7B80] cursor-pointer confirmed-pending-status'
                              : ''
                          }`}
                        >
                          <StatusDropdown status={dayObj.status} />
                        </span>
                      )}
                    </div>
                  ) : (
                    <div className="h-6"></div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MonthlyCalendar;
