import React, { useState, useEffect } from "react";
import StatusDropdownWeekly from "./StatusDropdownWeekly";

const WeeklyCalendar = ({ currentDate, newbookings }) => {
  const [days, setDays] = useState([]);
  const [boats, setBoats] = useState([]);

  useEffect(() => {
    // Get unique boat names from newbookings
    const uniqueBoats = [...new Set(newbookings.map((booking) => booking.boatName))];
    setBoats(uniqueBoats);

    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay() + 1);

    const displayedDays = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      displayedDays.push(date);
    }
    setDays(displayedDays);
  }, [currentDate, newbookings]);

  const getStatusForDayAndBoat = (boat, date) => {
    const dateString = date.toISOString().split("T")[0];
    return newbookings
      .filter(
        (booking) =>
          booking.boatName === boat &&
          new Date(booking.availableDate).toISOString().split("T")[0] === dateString
      )
      .map((booking) => {
        const isToday = new Date(booking.availableDate).toDateString() === new Date().toDateString();
        return {
          ...booking,
          status: isToday ? "confirmed" : "pending",
        };
      });
  };

  const getFormattedDate = (date) => {
    return `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
  };

  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="overflow-auto">
      <table className="text-[#4b465cb8] w-full mt-6">
        <thead>
          <tr className="border-[1px] border-[#DBDADE]">
            <th className="border-[1px] border-[#DBDADE]"></th>
            {days.map((day, index) => (
              <th
                key={index}
                className="px-3 py-1 font-semibold text-sm border-[1px] border-[#DBDADE] text-center"
              >
                {weekdays[index]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {boats.map((boat, boatIndex) => (
            <tr key={boatIndex} className="border-[1px] border-[#DBDADE]">
              <td className="px-3 py-1 font-semibold text-sm border-[1px] border-[#DBDADE]">
                {boat}
              </td>
              {days.map((day, dayIndex) => {
                const date = getFormattedDate(day);
                const dayBookings = getStatusForDayAndBoat(boat, day);

                const confirmedStatuses = dayBookings.filter(
                  (booking) => booking.status === "confirmed"
                );
                const pendingStatuses = dayBookings.filter(
                  (booking) => booking.status === "pending"
                );

                return (
                  <td
                    key={dayIndex}
                    className="border-[1px] relative text-center border-[#DBDADE] h-24"
                  >
                    <div className="flex flex-col items-center gap-2 px-2">
                      {confirmedStatuses.length > 0 && (
                        <div
                          className="mb-1 bg-green-500 w-full h-5 cursor-pointer group confirmed-pending-status"
                          style={{ height: "25px" }}
                        >
                          <StatusDropdownWeekly statuses={confirmedStatuses} />
                        </div>
                      )}
                      {pendingStatuses.length > 0 && (
                        <div
                          className="mb-1 bg-yellow-500 w-full h-5 cursor-pointer group confirmed-pending-status"
                          style={{ height: "25px" }}
                        >
                          <StatusDropdownWeekly statuses={pendingStatuses} />
                        </div>
                      )}
                    </div>
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
