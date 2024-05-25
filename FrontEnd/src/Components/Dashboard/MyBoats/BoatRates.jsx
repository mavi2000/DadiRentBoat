import React, { useState, useContext } from "react";
import BoatsNavbar from "./BoatsNavbar";
import { FiEdit3 } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import RatePopup from "./RatePopup";
import { AdminContext } from "../../../../Context/AdminContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BoatRates = () => {
  const [popup, setPopup] = useState(false);
  const { addRate } = useContext(AdminContext);

  const initialFormData = {
    startDate: "",
    endDate: "",
    normalDayRates: {
      fullDay: "",
      halfDayMorning: "",
      halfDayEvening: "",
    },
    weekendRates: {
      fullDay: "",
      halfDayMorning: "",
      halfDayEvening: "",
    },
  };

  const [formData, setFormData] = useState(initialFormData);
  const [selectedDates, setSelectedDates] = useState([]);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setFormData((prevFormData) => ({
      ...prevFormData,
      startDate: start,
      endDate: end,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;
    const [field, subField] = name.split(".");

    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: {
        ...prevFormData[field],
        [subField]: type === "checkbox" ? checked : value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addRate(formData);
      setSelectedDates(response.dates);
      setPopup(false);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        const errorMessage = error.response.data.error;
        toast.error(errorMessage);
      } else {
        toast.error("Failed to add rates");
      }
    }
  };

  const handlePopup = () => {
    setPopup(!popup);
  };
  return (
    <div className="flex flex-col gap-3">
      <BoatsNavbar />
      <form className="bg-white mx-2 py-8 px-8 flex flex-col gap-10 text-[#4B465C]">
        <div>Rates</div>
        <div className="mx-4 w-[85%]">
          {/* Existing rates display */}
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="my-4 flex items-center text-sm w-[100%] border-b py-8"
            >
              <div className="w-[30%] flex flex-col gap-1">
                <div className="font-medium">May 1st - June 30th</div>
                <div className="font-normal">Tariff 1</div>
                <div className="font-light">Clear Period</div>
              </div>
              <div className="w-[25%] flex flex-col gap-1">
                <div>Conditions</div>
                <div>Minimum: 1 day</div>
              </div>
              <div className="w-[15%] flex flex-col gap-1">
                <div>Day</div>
                <div className="font-bold">€54</div>
              </div>
              <div className="w-[15%] flex flex-col gap-1">
                <div>Week</div>
                <div>-</div>
              </div>
              <div className="w-[15%]">
                <button className="text-[#CBA557] font-semibold flex items-center gap-2 text-[15px] border border-[#CBA557] rounded-md py-2 px-4">
                  <FiEdit3 />
                  Edit
                </button>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={handlePopup}
            className="text-[#CBA557] font-semibold flex items-center gap-2 text-[15px] border border-[#CBA557] rounded-md py-2 px-4"
          >
            <IoMdAdd />
            Add Period
          </button>
        </div>
      </form>
      {popup && (
        <RatePopup
          formData={formData}
          selectedDates={selectedDates}
          handleDateChange={handleDateChange}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          onClose={handlePopup}
        />
      )}
    </div>
  );
};

export default BoatRates;
