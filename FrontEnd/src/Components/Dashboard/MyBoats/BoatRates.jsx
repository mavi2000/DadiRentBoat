import React, { useState, useContext, useEffect } from "react";
import BoatsNavbar from "./BoatsNavbar";
import { FiEdit3 } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import RatePopup from "./RatePopup";
import { AdminContext } from "../../../../Context/AdminContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import baseURL from "../../../../APi/BaseUrl";
import { useTranslation } from "react-i18next";

const BoatRates = () => {
  const { t } = useTranslation();
  const id = localStorage.getItem("id");
  const [popup, setPopup] = useState(id ? true : false);
  const { addRate, navigate, boatId } = useContext(AdminContext);

  const initialFormData = {
    startDate: "",
    endDate: "",
    applyRatesOfAnotherPeriod: "",
    minimumRentalDuration: "",
    maximumRentalDuration: "",
    restrictDays: {
      allowedDaysToDepart: [],
      allowedDaysToReturn: [],
    },
    oneHourRate: "",
    oneDayRate: "",
    oneWeekRate: "",
    advanceRates: {
      twoDays: "",
      threeDays: "",
      fiveDays: "",
      sixDays: "",
      twoWeeks: "",
    },
  };

  const [formData, setFormData] = useState(initialFormData);
  const [selectedDates, setSelectedDates] = useState([]);

  useEffect(() => {
    if (id) {
      const getBoatRates = async () => {
        try {
          const res = await baseURL.get(`/Rate/get-rate/${id}`);
          const {
            data: { rate },
          } = res;
          const {
            dates,
            startDate,
            endDate,
            applyRatesOfAnotherPeriod,
            minimumRentalDuration,
            maximumRentalDuration,
            restrictDays,
            oneHourRate,
            oneDayRate,
            oneWeekRate,
            advanceRates,
          } = rate;
          setFormData({
            startDate,
            endDate,
            applyRatesOfAnotherPeriod,
            minimumRentalDuration,
            maximumRentalDuration,
            restrictDays,
            oneHourRate,
            oneDayRate,
            oneWeekRate,
            advanceRates,
          });
          setSelectedDates(dates);
        } catch (error) {
          console.log(error);
        }
      };
      getBoatRates();
    }
  }, [id]);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setFormData((prevFormData) => ({
      ...prevFormData,
      startDate: start,
      endDate: end,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value, type, options } = e.target;
    const [field, subField] = name.split(".");

    if (type === "select-multiple") {
      const selectedValues = Array.from(options)
        .filter((option) => option.selected)
        .map((option) => option.value);

      setFormData((prevFormData) => ({
        ...prevFormData,
        [field]: {
          ...prevFormData[field],
          [subField]: selectedValues,
        },
      }));
    } else if (subField) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [field]: {
          ...prevFormData[field],
          [subField]: type === "checkbox" ? e.target.checked : value,
        },
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.minimumRentalDuration) {
      toast.error(t("boatMinimumRentalDurationRequired"));
      return;
    }
    if (!id) {
      try {
        await addRate({ ...formData, boatId });
        toast.success(t("boatRatesAddedSuccessfully"));
        setSelectedDates([formData.startDate, formData.endDate]);
        setPopup(false);
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          const errorMessage = error.response.data.error;
          toast.error(errorMessage);
        } else {
          toast.error(t("boatFailedToAddRates"));
        }
      }
    } else {
      try {
        await baseURL.patch(`/Rate/update-rate/${id}`, { ...formData });
        toast.success(t("boatRatesUpdatedSuccessfully"));
        localStorage.removeItem("id");
        setTimeout(() => {
          navigate("/Dashboard/my-boats");
        }, 3000);
      } catch (error) {
        toast.error(t("boatFailedToUpdateRates"));
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
        <div>{t("boatRates")}</div>
        <div className="mx-4 w-[85%]">
          {/* Existing rates display */}
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="my-4 flex items-center sm:justify-between text-sm flex-wrap gap-3 border-b py-8"
            >
              <div className="flex flex-col gap-1">
                <div className="font-medium">May 1st - June 30th</div>
                <div className="font-normal">{t("boatTariff")} 1</div>
                <div className="font-light">{t("boatClearPeriod")}</div>
              </div>
              <div className="flex flex-col gap-1">
                <div>{t("boatConditions")}</div>
                <div>{t("boatMinimum")}: 1 {t("boatDay")}</div>
              </div>
              <div className="flex flex-col gap-1">
                <div>{t("boatDay")}</div>
                <div className="font-bold">€54</div>
              </div>
              <div className="flex flex-col gap-1">
                <div>{t("boatWeek")}</div>
                <div>-</div>
              </div>
              <div className="w-[15%]">
                <button className="text-[#CBA557] font-semibold flex items-center gap-2 text-[15px] border border-[#CBA557] rounded-md py-2 px-4">
                  <FiEdit3 />
                  {t("boatEdit")}
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
            {t("boatAddPeriod")}
          </button>
        </div>
      </form>
      {popup && (
        <RatePopup
          formData={formData}
          setFormData={setFormData}
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
