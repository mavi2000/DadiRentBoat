import { useState, useEffect } from "react";
import { RiListCheck2 } from "react-icons/ri";
import baseURL from "../../../../APi/BaseUrl";
import { useTranslation } from 'react-i18next';

const Pickups = ({ title, opt3 }) => {
  const { t } = useTranslation();
  const [selectDay, setSelectDay] = useState("Today");
  const [bookings, setBookings] = useState({
    today: [],
    tomorrow: [],
    dayAfterTomorrow: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await baseURL.get("/checkout/getUpcomingBookings");
        setBookings(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching bookings:", error);
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const getBookingsForSelectedDay = () => {
    if (selectDay === "Today") return bookings.today;
    if (selectDay === "Tomorrow") return bookings.tomorrow;
    return bookings.dayAfterTomorrow;
  };

  const selectedBookings = getBookingsForSelectedDay();

  return (
    <div className="bg-white rounded-md shadow-lg px-4 sm:px-8 py-4 grow mb-8">
      <div className="flex gap-2 justify-between flex-wrap items-center">
        <h1 className="text-[#4b465cd4] font-medium text-lg flex gap-2 items-center">
          <RiListCheck2 size={20} />
          {title}
        </h1>
        <select
          name="day"
          id="day"
          className="border-[1px] border-[#7B7B7B] rounded-md px-3 py-2 text-[#7B7B7B] outline-none"
          onChange={(e) => {
            setSelectDay(e.target.value);
          }}
        >
          <option value="Today">{t('today')}</option>
          <option value="Tomorrow">{t('tomorrow')}</option>
          <option value={opt3}>{opt3}</option>
        </select>
      </div>

      {loading ? (
        <p>{t('loading')}</p>
      ) : selectedBookings.length > 0 ? (
        selectedBookings.map((booking, index) => (
          <div
            key={index}
            className="border-l-[1.5px] relative border-[#A8AAAE]"
          >
            <div className="absolute size-[12px] bg-[#A8AAAE] rounded-full -top-[6px] -left-[7px]"></div>
            <div className="flex gap-2 justify-between flex-wrap items-start mt-4 p-6">
              <div>
                <h1 className="text-[#4b465cd4] font-medium text-base">
                  {booking.userId?.username}
                </h1>
                <p className="text-base text-[--primary-color]">
                  ${booking?.amount}
                </p>
              </div>
              <p className="text-[#4b465c94] text-sm ">{selectDay}</p>
            </div>
          </div>
        ))
      ) : (
        <p>{t('noBookingAvailable')}</p>
      )}
    </div>
  );
};

export default Pickups;
