import React, { useState, useEffect } from 'react';
import StatusDropdown from './StatusDropdown';

const MonthlyCalendar = ({ currentDate, setCurrentDate }) => {
  const [days, setDays] = useState([]);
  const [statusArray, setStatusArray] = useState([]);

  useEffect(() => {
    const firstDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const firstDayOfWeek = firstDay.getDay(); // 0 (Sunday) to 6 (Saturday)

    const emptyDaysBefore = firstDayOfWeek;
    const daysInMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate(); // Get number of days in the month

    const displayedDays = [];
    // Add empty days before the first day of the month
    for (let i = 0; i < emptyDaysBefore; i++) {
      displayedDays.push({ day: null, isCurrentMonth: false, status: null });
    }

    // Generate random statuses (replace with your logic to fetch or generate statuses)
    const generatedStatuses = [];
    for (let i = 1; i <= daysInMonth; i++) {
      // Simulate a random chance (adjust probability as needed)
      if (Math.random() < 0.3) {
        // 30% chance of having a status
        const randomStatus = Math.random() < 0.5 ? 'confirmed' : 'pending';
        generatedStatuses.push({
          date: new Date(currentDate.getFullYear(), currentDate.getMonth(), i),
          status: randomStatus,
        });
      }
    }

    // Add days for the current month with potential statuses
    for (let i = 1; i <= daysInMonth; i++) {
      const matchingStatus = generatedStatuses.find(
        (status) => new Date(status.date).getDate() === i
      );
      displayedDays.push({
        day: i,
        isCurrentMonth: true,
        status: matchingStatus?.status,
      });
    }

    // Add empty days after the last day of the month to fill the table
    const lastDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      daysInMonth
    );
    const lastDayOfWeek = lastDay.getDay();
    const emptyDaysAfter = (6 - lastDayOfWeek) % 7; // Calculate remaining days to fill the last row

    for (let i = 0; i < emptyDaysAfter; i++) {
      displayedDays.push({ day: null, isCurrentMonth: false, status: null });
    }

    setDays(displayedDays);
    setStatusArray(generatedStatuses); // Set generated statuses
  }, [currentDate]);

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
          {/* Split the displayedDays array into rows (7 days per row) */}
          {[...Array(Math.ceil(days.length / 7))].map((_, rowIndex) => (
            <tr key={rowIndex}>
              {days
                .slice(rowIndex * 7, (rowIndex + 1) * 7)
                .map((dayObj, colIndex) => (
                  <td
                    className={`px-3 py-1 font-semibold text-sm border-[1px] border-[#DBDADE] ${
                      dayObj.isCurrentMonth ? '' : '' // Optional style for non-current month days
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
                                ? dayObj.status === 'confirmed'
                                  ? 'bg-[#5BAA7380] cursor-pointer confirmed-pending-status'
                                  : 'bg-[#F9DB7B80] cursor-pointer confirmed-pending-status'
                                : ''
                            }`}
                          >
                            <StatusDropdown status={dayObj} />
                          </span>
                        )}
                      </div>
                    ) : (
                      <div className="h-6"></div> // Placeholder for empty cells
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
