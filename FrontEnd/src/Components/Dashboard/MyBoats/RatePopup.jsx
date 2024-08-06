import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import calendar CSS for styling
import { useTranslation } from "react-i18next";

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const RatePopup = ({
  formData,
  setFormData,
  selectedDates = [], // Default to an empty array if not provided
  handleDateChange,
  handleInputChange,
  handleSubmit,
  onClose,
}) => {
  const { t } = useTranslation();
  const [restrictDays, setRestrictDays] = useState(false);
  const [advanceRate, setAdvanceRate] = useState(false);

  const toggleRestrictDays = () => setRestrictDays(!restrictDays);
  const toggleAdvanceRate = () => setAdvanceRate(!advanceRate);

  const tileClassName = ({ date }) => {
    const dateStr = date.toISOString().split("T")[0];
    return selectedDates && selectedDates.includes(dateStr)
      ? "highlight"
      : null;
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    const [field, subField] = name.split(".");
    const newValues = checked
      ? [...formData[field][subField], e.target.value]
      : formData[field][subField].filter((value) => value !== e.target.value);

    handleInputChange({
      target: {
        name,
        value: newValues,
      },
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative w-full max-w-4xl max-h-full overflow-y-auto bg-white rounded-lg shadow-lg p-10">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="text-lg font-medium">{t("boatAddPeriod")}</div>
          <div className="text-sm font-light">{t("boatChooseDate")}</div>
          <div className="flex items-center justify-between bg-white shadow-md rounded-md">
            <Calendar
              className="border-none bg-transparent"
              selectRange={true}
              onChange={handleDateChange}
              tileClassName={tileClassName}
            />
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="block text-gray-700">{t("boatStartDate")}</label>
              <input
                type="text"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                className="border py-3 rounded-md px-3 font-light w-full"
                placeholder={t("boatStartDate")}
              />
            </div>
            <div>
              <label className="block text-gray-700">{t("boatEndDate")}</label>
              <input
                type="text"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
                className="border py-3 rounded-md px-3 font-light w-full"
                placeholder={t("boatEndDate")}
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700">{t("boatApplyRatesOfAnotherPeriod")}</label>
            <input
              type="text"
              name="applyRatesOfAnotherPeriod"
              value={formData.applyRatesOfAnotherPeriod}
              onChange={handleInputChange}
              className="border py-3 rounded-md px-3 font-light w-full"
              placeholder={t("boatApplyRatesOfAnotherPeriod")}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-gray-700">{t("boatMinimumRentalDuration")}</label>
              <select
                name="minimumRentalDuration"
                value={formData.minimumRentalDuration}
                onChange={handleInputChange}
                className="border py-3 rounded-md px-3 font-light w-full"
              >
                <option value="">{t("boatSelectMinimumDuration")}</option>
                {[...Array(6).keys()].map((day) => (
                  <option key={day} value={`${day + 1} day`}>{`${
                    day + 1
                  } ${t("boatDay")}`}</option>
                ))}
                <option value="1 week">{t("boatWeek")}</option>
                <option value="2 weeks">{t("boatTwoWeeks")}</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">{t("boatMaximumRentalDuration")}</label>
              <select
                name="maximumRentalDuration"
                value={formData.maximumRentalDuration}
                onChange={handleInputChange}
                className="border py-3 rounded-md px-3 font-light w-full"
              >
                <option value="">{t("boatSelectMaximumDuration")}</option>
                {[...Array(6).keys()].map((day) => (
                  <option key={day} value={`${day + 1} day`}>{`${
                    day + 1
                  } ${t("boatDay")}`}</option>
                ))}
                <option value="1 week">{t("boatWeek")}</option>
                <option value="2 weeks">{t("boatTwoWeeks")}</option>
              </select>
            </div>
          </div>

          <div className="mt-5">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={restrictDays}
                onChange={toggleRestrictDays}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-gray-700">{t("boatRestrictDepartureReturnDays")}</span>
            </label>
          </div>
          {restrictDays && (
            <div className="grid grid-cols-2 gap-5 mt-3">
              <div>
                <label className="block text-gray-700">{t("boatAllowedDaysToDepart")}</label>
                <div className="flex flex-wrap">
                  {daysOfWeek.map((day) => (
                    <label key={day} className="flex items-center mr-4">
                      <input
                        type="checkbox"
                        name="restrictDays.allowedDaysToDepart"
                        value={day}
                        checked={formData.restrictDays.allowedDaysToDepart.includes(
                          day
                        )}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-gray-700">{t(`boat${day}`)}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-gray-700">{t("boatAllowedDaysToReturn")}</label>
                <div className="flex flex-wrap">
                  {daysOfWeek.map((day) => (
                    <label key={day} className="flex items-center mr-4">
                      <input
                        type="checkbox"
                        name="restrictDays.allowedDaysToReturn"
                        value={day}
                        checked={formData.restrictDays.allowedDaysToReturn.includes(
                          day
                        )}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-gray-700">{t(`boat${day}`)}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="mt-5">
            <h1 className="text-xl font-semibold text-gray-800">{t("boatRates")}</h1>
            <p className="text-sm text-gray-600 mt-1">
              {t("boatPersonalizedPeriodWarning")}
            </p>
          </div>
          {(["1 day"].includes(formData.minimumRentalDuration) ||
            ["1 day"].includes(formData.maximumRentalDuration)) && (
            <div className="mt-3">
              <label className="block text-gray-700">{t("boatRatePerHour")}</label>
              <div className="relative">
                <input
                  type="number"
                  name="oneHourRate"
                  value={formData.oneHourRate}
                  onChange={(e) => {
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      oneDayRate: parseInt(24 * e.target.value),
                      oneWeekRate:
                        (["1 week", "2 week"].includes(
                          formData.minimumRentalDuration
                        ) ||
                          ["1 week", "2 week"].includes(
                            formData.maximumRentalDuration
                          )) &&
                        parseInt(7 * 24 * e.target.value),
                    }));
                    handleInputChange(e);
                  }}
                  className="border py-3  rounded-md px-3 font-light w-full"
                  placeholder={t("boatEnterRate")}
                />
                <span className="absolute right-3 top-2.5 text-gray-700">
                  €
                </span>
              </div>
            </div>
          )}

          <div className="mt-3 grid grid-cols-2 gap-5">
            {([
              "1 day",
              "2 day",
              "3 day",
              "4 day",
              "5 day",
              "6 day",
              "7 day",
            ].includes(formData.minimumRentalDuration) ||
              [
                "1 day",
                "2 day",
                "3 day",
                "4 day",
                "5 day",
                "6 day",
                "7 day",
              ].includes(formData.maximumRentalDuration)) && (
              <div>
                <label className="block text-gray-700">{t("boatRatePerDay")}</label>
                <div className="relative">
                  <input
                    type="number"
                    name="oneDayRate"
                    value={formData.oneDayRate}
                    onChange={(e) => {
                      handleInputChange(e);
                      setFormData((prevFormData) => ({
                        ...prevFormData,
                        oneWeekRate: parseInt(7 * e.target.value),
                      }));
                    }}
                    className="border py-3 rounded-md px-3 font-light w-full"
                    placeholder={t("boatEnterRate")}
                  />
                  <span className="absolute right-3 top-2.5 text-gray-700">
                    €
                  </span>
                </div>
              </div>
            )}
            {(["1 week", "2 week"].includes(formData.minimumRentalDuration) ||
              ["1 week", "2 week"].includes(
                formData.maximumRentalDuration
              )) && (
              <div>
                <label className="block text-gray-700">{t("boatRatePerWeek")}</label>
                <div className="relative">
                  <input
                    type="number"
                    name="oneWeekRate"
                    value={formData.oneWeekRate}
                    onChange={handleInputChange}
                    className="border py-3 rounded-md px-3 font-light w-full"
                    placeholder={t("boatEnterRate")}
                  />
                  <span className="absolute right-3 top-2.5 text-gray-700">
                    €
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="mt-5">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={advanceRate}
                onChange={toggleAdvanceRate}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-gray-700">{t("boatAdvanceRate")}</span>
            </label>
          </div>
          {advanceRate && (
            <div className="mt-3 grid grid-cols-2 gap-5">
              <div>
                <label className="block text-gray-700">{t("boatTwoDaysAdvanceRate")}</label>
                <input
                  type="number"
                  name="advanceRates.twoDays"
                  value={formData.advanceRates?.twoDays || ""}
                  onChange={handleInputChange}
                  className="border py-3 rounded-md px-3 font-light w-full"
                  placeholder={t("boatEnterRate")}
                />
              </div>
              <div>
                <label className="block text-gray-700">{t("boatThreeDaysAdvanceRate")}</label>
                <input
                  type="number"
                  name="advanceRates.threeDays"
                  value={formData.advanceRates?.threeDays || ""}
                  onChange={handleInputChange}
                  className="border py-3 rounded-md px-3 font-light w-full"
                  placeholder={t("boatEnterRate")}
                />
              </div>
              <div>
                <label className="block text-gray-700">{t("boatFiveDaysAdvanceRate")}</label>
                <input
                  type="number"
                  name="advanceRates.fiveDays"
                  value={formData.advanceRates?.fiveDays || ""}
                  onChange={handleInputChange}
                  className="border py-3 rounded-md px-3 font-light w-full"
                  placeholder={t("boatEnterRate")}
                />
              </div>
              <div>
                <label className="block text-gray-700">{t("boatSixDaysAdvanceRate")}</label>
                <input
                  type="number"
                  name="advanceRates.sixDays"
                  value={formData.advanceRates?.sixDays || ""}
                  onChange={handleInputChange}
                  className="border py-3 rounded-md px-3 font-light w-full"
                  placeholder={t("boatEnterRate")}
                />
              </div>
              <div>
                <label className="block text-gray-700">{t("boatTwoWeeksAdvanceRate")}</label>
                <input
                  type="number"
                  name="advanceRates.twoWeeks"
                  value={formData.advanceRates?.twoWeeks || ""}
                  onChange={handleInputChange}
                  className="border py-3 rounded-md px-3 font-light w-full"
                  placeholder={t("boatEnterRate")}
                />
              </div>
            </div>
          )}

          <div className="flex justify-end mt-5">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
            >
              {t("boatSubmit")}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="ml-2 bg-gray-500 text-white py-2 px-4 rounded-md"
            >
              {t("boatCancel")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RatePopup;
