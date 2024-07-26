import React, { useState, useEffect } from "react";
import StatusDropdownMonthly from "./StatusDropdownMonthly";

const MonthlyCalendar = ({ currentDate }) => {
  const [days, setDays] = useState([]);

  const bookings = [
    // Specific timeslot bookings
    {
      boat: "Boat 1",
      availableDate: "2024-08-05T18:00:00Z",
      status: "confirmed",
      userId: { username: "John" },
      _id: 1,
      boatName: "Boat 1",
      rateType: "Hourly",
    },
    {
      boat: "Boat 1",
      availableDate: "2024-08-05T19:00:00Z",
      status: "pending",
      userId: { username: "Jane" },
      _id: 2,
      boatName: "Boat 1",
      rateType: "Hourly",
    },
    // Whole day bookings
    {
      boat: "Boat 2",
      availableDate: "2024-08-06T00:00:00Z",
      status: "confirmed",
      userId: { username: "Mike" },
      _id: 3,
      boatName: "Boat 2",
      rateType: "Daily",
    },
    {
      boat: "Boat 2",
      availableDate: "2024-08-06T00:00:00Z",
      status: "pending",
      userId: { username: "Sara" },
      _id: 4,
      boatName: "Boat 2",
      rateType: "Daily",
    },
    // Multiple days bookings
    {
      boat: "Boat 3",
      availableDate: "2024-08-07T00:00:00Z",
      status: "confirmed",
      userId: { username: "Alex" },
      _id: 5,
      boatName: "Boat 3",
      rateType: "Multi-Day",
    },
    {
      boat: "Boat 3",
      availableDate: "2024-08-08T00:00:00Z",
      status: "confirmed",
      userId: { username: "Alex" },
      _id: 5,
      boatName: "Boat 3",
      rateType: "Multi-Day",
    },
    {
      boat: "Boat 3",
      availableDate: "2024-08-09T00:00:00Z",
      status: "confirmed",
      userId: { username: "Alex" },
      _id: 5,
      boatName: "Boat 3",
      rateType: "Multi-Day",
    },
    // Whole week bookings
    {
      boat: "Boat 4",
      availableDate: "2024-08-05T00:00:00Z",
      status: "confirmed",
      userId: { username: "Eve" },
      _id: 6,
      boatName: "Boat 4",
      rateType: "Weekly",
    },
    {
      boat: "Boat 4",
      availableDate: "2024-08-06T00:00:00Z",
      status: "confirmed",
      userId: { username: "Eve" },
      _id: 6,
      boatName: "Boat 4",
      rateType: "Weekly",
    },
    {
      boat: "Boat 4",
      availableDate: "2024-08-07T00:00:00Z",
      status: "confirmed",
      userId: { username: "Eve" },
      _id: 6,
      boatName: "Boat 4",
      rateType: "Weekly",
    },
    {
      boat: "Boat 4",
      availableDate: "2024-08-08T00:00:00Z",
      status: "confirmed",
      userId: { username: "Eve" },
      _id: 6,
      boatName: "Boat 4",
      rateType: "Weekly",
    },
    {
      boat: "Boat 4",
      availableDate: "2024-08-09T00:00:00Z",
      status: "confirmed",
      userId: { username: "Eve" },
      _id: 6,
      boatName: "Boat 4",
      rateType: "Weekly",
    },
    {
      boat: "Boat 4",
      availableDate: "2024-08-10T00:00:00Z",
      status: "confirmed",
      userId: { username: "Eve" },
      _id: 6,
      boatName: "Boat 4",
      rateType: "Weekly",
    },
    {
      boat: "Boat 4",
      availableDate: "2024-08-11T00:00:00Z",
      status: "confirmed",
      userId: { username: "Eve" },
      _id: 6,
      boatName: "Boat 4",
      rateType: "Weekly",
    },
    // Additional dummy data for other boats
    {
      boat: "Boat 5",
      availableDate: "2024-08-09T01:50:00Z",
      status: "confirmed",
      userId: { username: "Bob" },
      _id: 7,
      boatName: "Boat 5",
      rateType: "Daily",
    },
    {
      boat: "Boat 6",
      availableDate: "2024-08-10T02:39:00Z",
      status: "pending",
      userId: { username: "Frank" },
      _id: 8,
      boatName: "Boat 6",
      rateType: "Hourly",
    },
    {
      boat: "Boat 7",
      availableDate: "2024-08-08T00:00:00Z",
      status: "confirmed",
      userId: { username: "Matt" },
      _id: 9,
      boatName: "Boat 7",
      rateType: "Daily",
    },
    {
      boat: "Boat 8",
      availableDate: "2024-08-12T19:00:00Z",
      status: "confirmed",
      userId: { username: "Tom" },
      _id: 10,
      boatName: "Boat 8",
      rateType: "Hourly",
    },
    {
      boat: "Boat 9",
      availableDate: "2024-08-13T18:00:00Z",
      status: "confirmed",
      userId: { username: "Lucy" },
      _id: 11,
      boatName: "Boat 9",
      rateType: "Hourly",
    },
    {
      boat: "Boat 10",
      availableDate: "2024-08-14T18:30:00Z",
      status: "confirmed",
      userId: { username: "Sam" },
      _id: 12,
      boatName: "Boat 10",
      rateType: "Hourly",
    },
    {
      boat: "Boat 1",
      availableDate: "2024-08-15T00:00:00Z",
      status: "pending",
      userId: { username: "Nina" },
      _id: 13,
      boatName: "Boat 1",
      rateType: "Daily",
    },
    {
      boat: "Boat 2",
      availableDate: "2024-08-16T19:30:00Z",
      status: "confirmed",
      userId: { username: "Emma" },
      _id: 14,
      boatName: "Boat 2",
      rateType: "Hourly",
    },
  ];

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

    const todayDate = new Date().setHours(0, 0, 0, 0);

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        i
      ).setHours(0, 0, 0, 0);

      const dayBookings = bookings.filter(
        (booking) =>
          new Date(booking.availableDate).setHours(0, 0, 0, 0) === date
      );

      const statuses = dayBookings.map((booking) => ({
        status: booking.status,
        userId: booking.userId,
        boatName: booking.boatName,
        rateType: booking.rateType,
        bookingId: booking._id,
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
  }, [currentDate, bookings]);

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
                              <StatusDropdownMonthly
                                statuses={confirmedStatuses}
                              />
                            </div>
                          )}
                          {pendingStatuses.length > 0 && (
                            <div
                              className="mb-1 bg-yellow-500 w-full group h-5 cursor-pointer confirmed-pending-status"
                              style={{ height: "25px" }}
                            >
                              <StatusDropdownMonthly
                                statuses={pendingStatuses}
                              />
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
