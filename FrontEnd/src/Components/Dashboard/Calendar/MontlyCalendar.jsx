import React, { useState, useEffect } from "react";
import StatusDropdownMonthly from "./StatusDropdownMonthly";

const MonthlyCalendar = ({ currentDate, newbookings }) => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    const firstDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const firstDayOfWeek = firstDay.getDay();

    const emptyDaysBefore = firstDayOfWeek;
    const daysInMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();

    const displayedDays = [];
    for (let i = 0; i < emptyDaysBefore; i++) {
      displayedDays.push({ day: null, isCurrentMonth: false, statuses: [] });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        i
      ).setHours(0, 0, 0, 0);

      const dayBookings = newbookings.filter(
        (booking) =>
          new Date(booking.availableDate).setHours(0, 0, 0, 0) === date
      );

      const statuses = dayBookings.map((booking) => ({
        status: booking.status || "pending", // Default to "pending" if status is undefined
        userId: booking.userId || { username: "Unknown" }, // Default to "Unknown" if userId is undefined
        boatName: booking.boatName || "Unknown Boat", // Default to "Unknown Boat" if boatName is undefined
        rateType: booking.rateType || "Unknown Rate", // Default to "Unknown Rate" if rateType is undefined
        bookingId: booking._id || "Unknown", // Default to "Unknown" if bookingId is undefined
      }));

      displayedDays.push({
        day: i,
        isCurrentMonth: true,
        statuses,
      });
    }

    const lastDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      daysInMonth
    );
    const lastDayOfWeek = lastDay.getDay();
    const emptyDaysAfter = (6 - lastDayOfWeek) % 7;

    for (let i = 0; i < emptyDaysAfter; i++) {
      displayedDays.push({ day: null, isCurrentMonth: false, statuses: [] });
    }

    setDays(displayedDays);
  }, [currentDate, newbookings]);

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="w-full mt-8 min-h-[60vh] overflow-auto">
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
              {days
                .slice(rowIndex * 7, (rowIndex + 1) * 7)
                .map((dayObj, colIndex) => {
                  const confirmedStatuses = dayObj.statuses.filter(
                    (booking) => booking.status === "confirmed"
                  );
                  const pendingStatuses = dayObj.statuses.filter(
                    (booking) => booking.status === "pending"
                  );
                  return (
                    <td
                      className={`px-3 py-1 font-semibold text-sm border-[1px] border-[#DBDADE] ${
                        dayObj.isCurrentMonth ? "" : ""
                      }`}
                      key={colIndex}
                    >
                      {dayObj.day ? (
                        <div className=" grid sm:grid-cols-3 items-center gap-2">
                          {dayObj.day}
                          {confirmedStatuses.length > 0 && (
                            <div
                              className="mb-1 bg-green-500 w-full group h-5 cursor-pointer confirmed-pending-status"
                              style={{ height: "25px" }}
                            >
                              <StatusDropdownMonthly statuses={confirmedStatuses} />
                            </div>
                          )}
                          {pendingStatuses.length > 0 && (
                            <div
                              className="mb-1 bg-yellow-500 w-full group h-5 cursor-pointer confirmed-pending-status"
                              style={{ height: "25px" }}
                            >
                              <StatusDropdownMonthly statuses={pendingStatuses} />
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="h-6"></div>
                      )}
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

export default MonthlyCalendar;
