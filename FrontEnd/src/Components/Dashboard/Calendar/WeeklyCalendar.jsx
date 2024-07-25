import { useState } from "react";
import StatusDropdownWeeekly from "./StatusDropdownWeekly";

const WeeklyCalendar = ({ currentDate }) => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const boats = [
    "Boat 1",
    "Boat 2",
    "Boat 3",
    "Boat 4",
    "Boat 5",
    "Boat 6",
    "Boat 7",
    "Boat 8",
    "Boat 9",
    "Boat 10",
  ];

  const statusArray = [
    // Specific timeslot bookings
    {
      boat: "Boat 1",
      date: "2024-07-29",
      time: "6pm",
      status: "confirmed",
      userId: { username: "John" },
      bookingId: 1,
      boatName: "Boat 1",
      rateType: "Hourly",
    },
    {
      boat: "Boat 1",
      date: "2024-07-29",
      time: "8pm",
      status: "confirmed",
      userId: { username: "Smith" },
      bookingId: 2,
      boatName: "Boat 1",
      rateType: "Hourly",
    },
    {
      boat: "Boat 1",
      date: "2024-07-29",
      time: "7pm",
      status: "pending",
      userId: { username: "Jane" },
      bookingId: 3,
      boatName: "Boat 1",
      rateType: "Hourly",
    },
    // Whole day bookings
    {
      boat: "Boat 1",
      date: "2024-07-30",
      time: "All Day",
      status: "confirmed",
      userId: { username: "Mike" },
      bookingId: 4,
      boatName: "Boat 1",
      rateType: "Daily",
    },
    {
      boat: "Boat 1",
      date: "2024-07-30",
      time: "All Day",
      status: "pending",
      userId: { username: "Sara" },
      bookingId: 5,
      boatName: "Boat 1",
      rateType: "Daily",
    },
    // Multiple days bookings
    {
      boat: "Boat 1",
      date: "2024-07-31",
      time: "All Day",
      status: "confirmed",
      userId: { username: "Alex" },
      bookingId: 6,
      boatName: "Boat 1",
      rateType: "Multi-Day",
    },
    {
      boat: "Boat 1",
      date: "2024-08-01",
      time: "All Day",
      status: "confirmed",
      userId: { username: "Alex" },
      bookingId: 6,
      boatName: "Boat 1",
      rateType: "Multi-Day",
    },
    {
      boat: "Boat 1",
      date: "2024-08-02",
      time: "All Day",
      status: "confirmed",
      userId: { username: "Alex" },
      bookingId: 6,
      boatName: "Boat 1",
      rateType: "Multi-Day",
    },
    // Whole week bookings
    {
      boat: "Boat 2",
      date: "2024-07-29",
      time: "All Week",
      status: "confirmed",
      userId: { username: "Eve" },
      bookingId: 7,
      boatName: "Boat 2",
      rateType: "Weekly",
    },
    {
      boat: "Boat 2",
      date: "2024-07-30",
      time: "All Week",
      status: "confirmed",
      userId: { username: "Eve" },
      bookingId: 7,
      boatName: "Boat 2",
      rateType: "Weekly",
    },
    {
      boat: "Boat 2",
      date: "2024-07-31",
      time: "All Week",
      status: "confirmed",
      userId: { username: "Eve" },
      bookingId: 7,
      boatName: "Boat 2",
      rateType: "Weekly",
    },
    {
      boat: "Boat 2",
      date: "2024-08-01",
      time: "All Week",
      status: "confirmed",
      userId: { username: "Eve" },
      bookingId: 7,
      boatName: "Boat 2",
      rateType: "Weekly",
    },
    {
      boat: "Boat 2",
      date: "2024-08-02",
      time: "All Week",
      status: "confirmed",
      userId: { username: "Eve" },
      bookingId: 7,
      boatName: "Boat 2",
      rateType: "Weekly",
    },
    {
      boat: "Boat 2",
      date: "2024-08-03",
      time: "All Week",
      status: "confirmed",
      userId: { username: "Eve" },
      bookingId: 7,
      boatName: "Boat 2",
      rateType: "Weekly",
    },
    {
      boat: "Boat 2",
      date: "2024-08-04",
      time: "All Week",
      status: "confirmed",
      userId: { username: "Eve" },
      bookingId: 7,
      boatName: "Boat 2",
      rateType: "Weekly",
    },
    // Additional dummy data for other boats
    {
      boat: "Boat 3",
      date: "2024-08-02",
      time: "1:50am",
      status: "confirmed",
      userId: { username: "Bob" },
      bookingId: 8,
      boatName: "Boat 3",
      rateType: "Daily",
    },
    {
      boat: "Boat 4",
      date: "2024-08-04",
      time: "2:39am",
      status: "pending",
      userId: { username: "Frank" },
      bookingId: 9,
      boatName: "Boat 4",
      rateType: "Hourly",
    },
    {
      boat: "Boat 5",
      date: "2024-07-31",
      time: "All Day",
      status: "confirmed",
      userId: { username: "Matt" },
      bookingId: 10,
      boatName: "Boat 5",
      rateType: "Daily",
    },
    {
      boat: "Boat 6",
      date: "2024-08-03",
      time: "7pm",
      status: "confirmed",
      userId: { username: "Tom" },
      bookingId: 11,
      boatName: "Boat 6",
      rateType: "Hourly",
    },
    {
      boat: "Boat 7",
      date: "2024-08-01",
      time: "6pm",
      status: "confirmed",
      userId: { username: "Lucy" },
      bookingId: 12,
      boatName: "Boat 7",
      rateType: "Hourly",
    },
    {
      boat: "Boat 8",
      date: "2024-07-29",
      time: "6:30pm",
      status: "confirmed",
      userId: { username: "Sam" },
      bookingId: 13,
      boatName: "Boat 8",
      rateType: "Hourly",
    },
    {
      boat: "Boat 9",
      date: "2024-07-30",
      time: "All Day",
      status: "pending",
      userId: { username: "Nina" },
      bookingId: 14,
      boatName: "Boat 9",
      rateType: "Daily",
    },
    {
      boat: "Boat 10",
      date: "2024-07-31",
      time: "7:30pm",
      status: "confirmed",
      userId: { username: "Emma" },
      bookingId: 15,
      boatName: "Boat 10",
      rateType: "Hourly",
    },
  ];

  const getStatusForDayAndBoat = (boat, date, status) => {
    return statusArray.filter(
      (booking) =>
        booking.boat === boat &&
        booking.date === date &&
        booking.status === status
    );
  };

  const getFormattedDate = (dayIndex) => {
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay() + 1 + dayIndex);
    return `${startOfWeek.getFullYear()}-${(startOfWeek.getMonth() + 1).toString().padStart(2, '0')}-${startOfWeek.getDate().toString().padStart(2, '0')}`;
  };

  return (
    <div className="overflow-auto">
      <table className="text-[#4b465cb8] w-full mt-6">
        <thead>
          <tr className="border-[1px] border-[#DBDADE]">
            <th className="border-[1px] border-[#DBDADE]"></th>
            {days.map((day, index) => (
              <th
                key={index}
                className="px-3 py-1 font-semibold text-sm border-[1px] border-[#DBDADE]"
              >
                {day} {getFormattedDate(index)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {boats.map((boat, boatIndex) => (
            <tr key={boatIndex} className="border-[1px] border-[#DBDADE]">
              <td className="px-3 py-1 text-right font-semibold text-sm border-[1px] border-[#DBDADE]">
                {boat}
              </td>
              {days.map((day, dayIndex) => {
                const date = getFormattedDate(dayIndex);
                const confirmedStatuses = getStatusForDayAndBoat(
                  boat,
                  date,
                  "confirmed"
                );
                const pendingStatuses = getStatusForDayAndBoat(
                  boat,
                  date,
                  "pending"
                );
                return (
                  <td
                    key={dayIndex}
                    className="border-[1px] relative text-center border-[#DBDADE] h-24"
                  >
                    <div className="flex gap-2 px-2">
                      {confirmedStatuses.length > 0 && (
                        <div
                          className="mb-1 bg-green-500 w-full group h-5 cursor-pointer confirmed-pending-status"
                          style={{ height: "25px" }}
                        >
                          <StatusDropdownWeeekly statuses={confirmedStatuses} />
                        </div>
                      )}
                      {pendingStatuses.length > 0 && (
                        <div
                          className="mb-1 bg-yellow-500 w-full group h-5 cursor-pointer confirmed-pending-status"
                          style={{ height: "25px" }}
                        >
                          <StatusDropdownWeeekly statuses={pendingStatuses} />
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
