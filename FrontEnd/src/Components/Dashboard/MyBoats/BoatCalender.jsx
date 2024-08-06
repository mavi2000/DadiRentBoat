import React, { useState, useContext, useEffect } from "react";
import BoatsNavbar from "./BoatsNavbar";
import { IoMdAdd } from "react-icons/io";
import CalenderPopup from "./CalnderPopup";
import Calendar from "react-calendar";
import { RiArrowGoBackLine } from "react-icons/ri";
import { AdminContext } from "../../../../Context/AdminContext.jsx";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import "react-toastify/dist/ReactToastify.css";

const BoatCalendar = () => {
  const { t } = useTranslation();
  const [popup, setPopup] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [highlightedDates, setHighlightedDates] = useState([]);
  const [timeSlot, setTimeSlot] = useState("Full Day");
  const { getUnavailableBoatDates } = useContext(AdminContext);

  useEffect(() => {
    // Example of fetching initial highlighted dates (if needed)
    // fetchHighlightedDates();
  }, []);

  const handleDateDoubleClick = (date) => {
    if (!selectedStartDate || (selectedStartDate && selectedEndDate)) {
      setSelectedStartDate(date);
      setSelectedEndDate(null);
      setHighlightedDates([]);
    } else if (!selectedEndDate) {
      setSelectedEndDate(date);
    }
  };

  const fetchUnavailableDates = async () => {
    try {
      const response = await getUnavailableBoatDates({
        startDate: selectedStartDate,
        endDate: selectedEndDate,
        timeSlot, // Ensure timeSlot is passed here
        // boatId: id // Replace with actual boatId or retrieve dynamically
      });
      console.log("Unavailable boat dates:", response);
      setHighlightedDates(response.unavailableDates || []);
    } catch (error) {
      console.error(t("fetchUnavailableDatesError"), error);
    }
  };

  const handleSubmit = async () => {
    if (!selectedStartDate || !selectedEndDate) {
      console.error(t("selectStartEndDateError"));
      return;
    }

    try {
      await fetchUnavailableDates();
      toast.success(t("datesAddedSuccess"));
    } catch (error) {
      console.error(t("addUnavailablePeriodError"), error);
    }
  };

  const tileClassName = ({ date, view }) => {
    if (view === "month" && highlightedDates) {
      const dateString = date.toISOString().split("T")[0];
      if (highlightedDates.includes(dateString)) {
        return "highlight";
      }
    }
    return null;
  };

  const handlePopup = (e) => {
    e.preventDefault();
    setPopup(!popup);
  };

  const resetSelection = () => {
    setSelectedStartDate(null);
    setSelectedEndDate(null);
    setHighlightedDates([]);
  };

  // Function to mark winter season dates as unavailable
  const markWinterSeason = () => {
    // Example: Marking winter season from December to February
    const winterDates = [];
    const currentYear = new Date().getFullYear();

    // December
    winterDates.push(new Date(currentYear, 11, 1));
    winterDates.push(new Date(currentYear, 11, 31));

    // January
    winterDates.push(new Date(currentYear, 0, 1));
    winterDates.push(new Date(currentYear, 0, 31));

    // February
    winterDates.push(new Date(currentYear, 1, 1));
    winterDates.push(new Date(currentYear, 1, 28)); // Considering non-leap year

    return winterDates;
  };

  // Fetch winter season dates and mark them as unavailable
  const fetchWinterSeason = async () => {
    try {
      const winterDates = markWinterSeason();
      setHighlightedDates(winterDates.map(date => date.toISOString().split("T")[0]));
    } catch (error) {
      console.error(t("fetchWinterSeasonError"), error);
    }
  };

  useEffect(() => {
    fetchWinterSeason(); // Fetch and mark winter season dates initially
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <BoatsNavbar />
      <form className="bg-white">
        <div className="mx-8 py-8 flex flex-col gap-6 text-[#4B465C] w-[80%]">
          <div className="font-medium">{t("calendar")}</div>
          <div className="text-sm">
            {t("calendarDescription")}
          </div>
          <div className="flex flex-col justify-between gap-10 items-center px-10 rounded-lg py-10 shadow-md">
            <Calendar
              className="border-none"
              onClickDay={handleDateDoubleClick}
              value={[selectedStartDate, selectedEndDate]}
              tileClassName={tileClassName}
            />
            <div className="flex items-center justify-end w-[95%] gap-1">
              <button onClick={resetSelection} className="flex items-center gap-1">
                <RiArrowGoBackLine />
                <div>{t("reset")}</div>
              </button>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div>{t("selectTimeSlot")}</div>
            <select
              className="border py-2 px-3 w-[15%] rounded-md text-sm text-[#8d87a4]"
              value={timeSlot}
              onChange={(e) => setTimeSlot(e.target.value)}
            >
              <option value="Full Day">{t("fullDay")}</option>
              <option value="Half Day">{t("halfDay")}</option>
            </select>
          </div>
          <div className="text-sm text-[#8d87a4]">
            {t("unavailableDescription")}
          </div>
          <div className="w-[80%] flex flex-col">
            <button
              type="button"
              onClick={handleSubmit}
              className="border w-[50%] py-3 border-[#CBA557] text-sm font-semibold rounded-lg text-[#CBA557] justify-center flex items-center gap-2"
            >
              <IoMdAdd className="text-lg" />
              {t("addUnavailablePeriod")}
            </button>
            {popup && (
              <CalenderPopup
                onClose={() => {
                  setPopup(false);
                }}
              />
            )}
          </div>
          <div>{t("unavailablePeriod")}</div>
          <div className="flex justify-between">
            <div className="text-sm">
              {t("unavailableFrom")} 10 Dec 2024 {t("to")} 10 March 2025
            </div>
            <div className="flex gap-8">
              <button className="py-1 px-4 border border-[#CBA557] text-[#CBA557] rounded-md text-sm font-medium">
                {t("edit")}
              </button>
              <button className="py-1 px-4 border border-[#FF6347] text-[#FF6347] rounded-md text-sm font-medium">
                {t("delete")}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BoatCalendar;
