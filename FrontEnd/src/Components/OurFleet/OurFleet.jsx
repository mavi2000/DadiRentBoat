import React, { useContext, useEffect, useState } from "react";
import Filters from "./Filters";
import OurFleetCard from "./OurFleetCard";
import { UserContext } from "../../../Context/UserContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoPersonOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { LuCalendar } from "react-icons/lu";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import baseURL from "../../../APi/BaseUrl";
import { useTranslation } from 'react-i18next';

const dummyTimeSlots = [
  { id: 1, slot: "4h00", price: "$238.92", duration: "4h00", departure: "Time to be agreed with the owner" },
  { id: 2, slot: "Morning", price: "$179.19", duration: "4h00", departure: "8:00 AM" },
  { id: 3, slot: "Noon", price: "$238.92", duration: "4h00", departure: "12:00 PM" },
  { id: 4, slot: "Afternoon", price: "$238.92", duration: "4h00", departure: "2:00 PM" },
  { id: 5, slot: "Evening", price: "$238.92", duration: "5h00", departure: "6:00 PM" },
];

const OurFleet = () => {
  const { t } = useTranslation(); // Use translation hook
  const { fetchBoatDetails } = useContext(UserContext);
  const [boatDetails, setBoatDetails] = useState([]);
  const [availableDates, setAvailableDates] = useState([]);
  const [error, setError] = useState(null);
  const [isCheckInOpen, setIsCheckInOpen] = useState(false);
  const [checkInDate, setCheckInDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [numberOfPersons, setNumberOfPersons] = useState("");
  const [searchText, setSearchText] = useState("");
  const [filteredBoats, setFilteredBoats] = useState([]);
  const [filters, setFilters] = useState({
    boatType: "",
    priceRange: [0, 10000],
    length: [0, 100],
    enginePower: [0, 1000],
    accessories: [],
    location: "",
  });

  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleAccessoriesChange = (accessory) => {
    setFilters((prevFilters) => {
      const accessories = prevFilters.accessories.includes(accessory)
        ? prevFilters.accessories.filter((item) => item !== accessory)
        : [...prevFilters.accessories, accessory];
      return { ...prevFilters, accessories };
    });
  };

  useEffect(() => {
    const getBoatDetails = async () => {
      try {
        const details = await fetchBoatDetails();
        setBoatDetails(details);
      } catch (error) {
        setError(error.message || "Error loading boat details");
      }
    };

    getBoatDetails();
  }, [fetchBoatDetails]);

  useEffect(() => {
    const fetchAvailableDates = async () => {
      try {
        const response = await baseURL.get('/checkout/availableDates');
        const data = await response.data;
        const dates = data.flatMap(item => 
          item.availableDates.map(date => new Date(date).toISOString().split('T')[0])
        );
        setAvailableDates(dates);
      } catch (error) {
        console.error('Error fetching available dates:', error);
        setError(error.message || "Error loading available dates");
      }
    };
  
    fetchAvailableDates();
  }, [])

  useEffect(() => {
    const applyFilters = () => {
      let filtered = boatDetails;

      if (checkInDate) {
        const [startDate, endDate] = checkInDate;
        filtered = filtered.filter((boat) =>
          boat.boatBookings.every(
            (booking) =>
              new Date(booking.startDate) > endDate ||
              new Date(booking.endDate) < startDate
          )
        );
      }

      if (selectedTimeSlot) {
        filtered = filtered.filter((boat) =>
          boat.boatBookings.some((booking) =>
            booking.timeSlots.includes(selectedTimeSlot)
          )
        );
      }

      if (numberOfPersons) {
        filtered = filtered.filter(
          (boat) => boat.boat.boardingCapacity >= numberOfPersons
        );
      }

      if (searchText) {
        filtered = filtered.filter((boat) =>
          boat.rental[0].BoatName.toLowerCase().includes(
            searchText.toLowerCase()
          )
        );
      }

      filtered = filtered.filter((boat) => {
        return (
          (!filters.boatType || boat.boat.type === filters.boatType) &&
          boat.rental[0].minPrice >= filters.priceRange[0] &&
          boat.rental[0].minPrice <= filters.priceRange[1] &&
          boat.boat.lengthMeters >= filters.length[0] &&
          boat.boat.lengthMeters <= filters.length[1] &&
          boat.boat.totalEnginePowerHP >= filters.enginePower[0] &&
          boat.boat.totalEnginePowerHP <= filters.enginePower[1] &&
          (!filters.location ||
            boat.location.some((loc) =>
              loc.city.toLowerCase().includes(filters.location.toLowerCase())
            )) &&
          filters.accessories?.every((acc) =>
            boat.equipment[0]?.comfort?.includes(acc)
          )
        );
      });

      setFilteredBoats(filtered);
    };

    applyFilters();
  }, [
    boatDetails,
    checkInDate,
    selectedTimeSlot,
    numberOfPersons,
    searchText,
    filters,
  ]);

  const handleDateChange = (date) => {
    if (date && date.length > 0) {
      const [startDate, endDate] = date;
      const selectedDate = startDate.toISOString().split('T')[0];

      if (availableDates.includes(selectedDate)) {
        toast.error(t('bookedDateError'));
        setCheckInDate(null);
      } else {
        setCheckInDate(date);
        setIsCheckInOpen(false); 
      }
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!boatDetails.length) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="fleet-bg">
        <div className="mx-[3%] md:mx-[6%] flex flex-col justify-center h-[100svh]">
          <h1 className="text-[var(--primary-color)] text-[3rem] font-bold leading-[3rem]">
            {t('ourFleetTitle')}
          </h1>
          <p className="my-8 font-medium text-2xl text-white md:w-[60%]">
            {t('discoverVehicles')}
          </p>
        </div>
      </div>
      <section className="bg-[var(--primary-color)] px-12 py-6 mx-[3%] md:mx-[6%] rounded-2xl -mt-16">
        <h1 className="text-3xl font-bold text-white mb-5">{t('quickSearchTitle')}</h1>
        <div className="flex flex-wrap gap-4">
          <div className="rounded grow whitespace-nowrap bg-white p-4 relative">
            <button
              className="flex gap-2 items-center text-[#5B5B5B] text-sm"
              onClick={() => setIsCheckInOpen(!isCheckInOpen)}
            >
              <LuCalendar size={22} />
              {t('selectDate')} <FaAngleDown size={20} />
            </button>
            {isCheckInOpen && (
              <div className="calendar-container rounded bg-white p-4 absolute top-full left-0 z-50">
                <Calendar
                  onChange={handleDateChange}
                  value={checkInDate}
                  minDate={new Date()}
                  selectRange={true}
                  tileClassName={({ date, view }) => {
                    if (view === 'month') {
                      const dateString = date.toISOString().split('T')[0];
                      return availableDates.includes(dateString) ? 'booked-date' : null;
                    }
                    return null;
                  }}
                />
              </div>
            )}
          </div>

          <div className="relative grow rounded text-[#5B5B5B] text-sm">
            <LuCalendar size={22} className="absolute left-4 top-4" />
            <FaAngleDown size={20} className="absolute right-4 top-4" />
            <select
              name="timeSlot"
              id="timeSlot"
              className="rounded w-full bg-white p-4 px-12 outline-none appearance-none"
              onChange={(e) => setSelectedTimeSlot(e.target.value)}
            >
              <option value="">{t('timeSlot')}</option>
              {dummyTimeSlots.map((timeSlot) => (
                <option key={timeSlot.id} value={timeSlot.slot}>
                  {t(timeSlot.slot.toLowerCase())} - {timeSlot.duration}
                </option>
              ))}
            </select>
          </div>

          <div className="relative grow rounded text-[#5B5B5B] text-sm">
            <IoPersonOutline size={22} className="absolute left-4 top-4" />
            <FaAngleDown size={20} className="absolute right-4 top-4" />
            <select
              name="persons"
              id="persons"
              className="rounded w-full bg-white p-4 px-12 outline-none appearance-none"
              onChange={(e) => setNumberOfPersons(e.target.value)}
            >
              <option value="">{t('numberOfPersons')}</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
          </div>

          <input
            type="text"
            className="bg-white h-full p-4 w-full outline-none rounded-full text-[var(--primary-color)] placeholder:text-[var(--primary-color)] text-base font-bold"
            placeholder={t('searchPlaceholder')}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </section>

      <main className="mx-[3%] md:mx-[6%] mt-12 flex flex-col-reverse md:flex-row gap-12">
        <div>
          <div className="flex gap-2 justify-between items-center border-b-[1px] border-[#F5F5F5] mb-8 pb-6">
            <h2 className="text-[#676767] text-base font-semibold">
              {t('yachtsCount', { count: filteredBoats.length })}
            </h2>
          </div>
          {filteredBoats.map((boat, index) => (
            <OurFleetCard
              key={index}
              id={boat.boatImages[0]?.boatId}
              img={boat.boatImages[0]?.images[0]}
              boatName={boat.boat.title}
              totalPersons={boat.boat.boardingCapacity}
              length={boat.boat.lengthMeters}
              power={boat.boat.totalEnginePowerHP}
              licenseRequired={boat.boat.licenseRequired}
              location={boat.boat.region}
            />
          ))}
        </div>
        <Filters
          filters={filters}
          handleFilterChange={handleFilterChange}
          handleAccessoriesChange={handleAccessoriesChange}
        />
      </main>
      <ToastContainer />
    </>
  );
};

export default OurFleet;
