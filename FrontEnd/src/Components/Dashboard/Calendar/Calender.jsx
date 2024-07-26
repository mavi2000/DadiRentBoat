import { useState, useEffect } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import WeeklyCalendar from "./WeeklyCalendar";
import baseURL from "../../../../APi/BaseUrl";
import MonthlyCalendar from "./MontlyCalendar";



const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [changeCalendar, setChangeCalendar] = useState(true); // true for Weekly, false for Monthly
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getNextWeek = () => {
    const nextWeek = new Date(currentDate);
    nextWeek.setDate(nextWeek.getDate() + 7);
    setCurrentDate(nextWeek);
  };

  const getPreviousWeek = () => {
    const previousWeek = new Date(currentDate);
    previousWeek.setDate(previousWeek.getDate() - 7);
    setCurrentDate(previousWeek);
  };

  const getNextMonth = () => {
    const nextMonth = new Date(currentDate);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    setCurrentDate(nextMonth);
  };

  const getPreviousMonth = () => {
    const previousMonth = new Date(currentDate);
    previousMonth.setMonth(previousMonth.getMonth() - 1);
    setCurrentDate(previousMonth);
  };

  const formatDate = (date) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
    return formattedDate;
  };

  const expandAvailableDates = (bookings) => {
    return bookings.flatMap((booking) => {
      const startDate = new Date(booking.availableDates[0]);
      const endDate = new Date(booking.availableDates[1]);
      const dates = [];
      for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
        dates.push({
          availableDate: new Date(d),
          boat: booking.boat,
          userId: booking.userId,
          status: booking.status,
          boatName: booking.boatName,
          rateType: booking.rateType,
          bookingId: booking._id,
        });
      }
      return dates;
    });
  };

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await baseURL.get("/checkout/getPayment");
        const todayDate = new Date().setHours(0, 0, 0, 0);
        const filteredBookings = response.data.filter(
          (booking) =>
            new Date(booking.availableDates[0]).setHours(0, 0, 0, 0) >= todayDate
        );
        setBookings(expandAvailableDates(filteredBookings));
      } catch (error) {
        console.error("Error fetching bookings:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);



  return (
    <div className="bg-white rounded-md shadow-lg px-8 py-4 grow my-4 mb-[210px]">
      <div className="flex justify-between flex-wrap gap-3 items-center">
        <div className="flex gap-4 items-center">
          <button onClick={changeCalendar ? getPreviousWeek : getPreviousMonth}>
            <GrFormPrevious size={25} className="text-[#4b465cc1]" />
          </button>
          <button onClick={changeCalendar ? getNextWeek : getNextMonth}>
            <GrFormNext size={25} className="text-[#4b465cc1]" />
          </button>
          <p>{formatDate(currentDate)}</p>
        </div>

        <div className="flex">
          <button
            onClick={() => setChangeCalendar(!changeCalendar)}
            className={`py-3 px-5 text-[#CBA557] text-sm text-center bg-[#CBA557] bg-opacity-15 rounded-l-md ${
              !changeCalendar ? "bg-opacity-30" : ""
            }`}
          >
            Month
          </button>
          <button
            onClick={() => setChangeCalendar(!changeCalendar)}
            className={`py-3 px-5 text-[#CBA557] text-sm text-center bg-[#CBA557] bg-opacity-15 rounded-r-md ${
              changeCalendar ? "bg-opacity-30" : ""
            }`}
          >
            Week
          </button>
        </div>
      </div>
      {changeCalendar ? (
        <WeeklyCalendar currentDate={currentDate} newbookings={bookings} />
      ) : (
        <MonthlyCalendar currentDate={currentDate} newbookings={bookings} />
      )}
    </div>
  );
};

export default Calendar;