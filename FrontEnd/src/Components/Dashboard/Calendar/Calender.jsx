import { useState ,useEffect} from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import WeeklyCalendar from "./WeeklyCalendar";
import MontlyCalendar from "./MontlyCalendar";
import baseURL from "../../../../APi/BaseUrl";


const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date()); // Initialize with current date
  const [changeCalendar, setChangeCalendar] = useState(true);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


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
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      date
    );
    [day, month, year] = formattedDate.split(" ");
    return `${month} ${day} ${year}`;
  };

  

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await baseURL.get('/checkout/getPayment'); // Corrected endpoint
        console.log('API Response:', response.data); // Logging response data for debugging

        const todayDate = new Date().setHours(0, 0, 0, 0); // Get today's date at midnight for accurate comparison
        const filteredBookings = response.data.filter(
          (booking) => new Date(booking?.availableDate).setHours(0, 0, 0, 0) < todayDate
        );

        setBookings(filteredBookings);
      } catch (error) {
        console.error('Error fetching upcoming bookings:', error); // Logging error for debugging
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []); // 

  console.log("Booking",bookings)

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
          <button
            onClick={() => {
              setChangeCalendar(false);
            }}
            className={`py-3 px-5 text-[#CBA557] text-sm text-center bg-[#CBA557] bg-opacity-15 rounded-l-md  ${
              changeCalendar ? "" : "bg-opacity-30"
            }`}
          >
            Month
          </button>
          <button
            onClick={() => {
              setChangeCalendar(true);
            }}
            className={`py-3 px-5 text-[#CBA557] text-sm text-center bg-[#CBA557]  bg-opacity-15 rounded-r-md ${
              changeCalendar ? "bg-opacity-30" : ""
            }`}
          >
            Week
          </button>
        </div>
      </div>
      {changeCalendar ? (
        <WeeklyCalendar />
      ) : (
        <MontlyCalendar
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
        />
      )}
    </div>
  );
};

export default Calendar;
