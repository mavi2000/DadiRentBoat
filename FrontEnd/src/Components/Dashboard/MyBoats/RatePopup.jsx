import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import calendar CSS for styling

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
          <div className="text-lg font-medium">Add Period</div>
          <div className="text-sm font-light">Choose Date</div>
          <div className="flex items-center justify-between bg-white shadow-md rounded-md">
            <Calendar
              className="border-none bg-transparent"
              selectRange={true}
              onChange={handleDateChange}
              tileClassName={tileClassName}
            />
          </div>

          {/* Start Date and End Date */}
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="block text-gray-700">Start Date</label>
              <input
                type="text"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                className="border py-3 rounded-md px-3 font-light w-full"
                placeholder="Start Date"
              />
            </div>
            <div>
              <label className="block text-gray-700">End Date</label>
              <input
                type="text"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
                className="border py-3 rounded-md px-3 font-light w-full"
                placeholder="End Date"
              />
            </div>
          </div>

          {/* Apply the rates of another period */}
          <div>
            <label className="block text-gray-700">
              Apply the rates of another period
            </label>
            <input
              type="text"
              name="applyRatesOfAnotherPeriod"
              value={formData.applyRatesOfAnotherPeriod}
              onChange={handleInputChange}
              className="border py-3 rounded-md px-3 font-light w-full"
              placeholder="Apply rates of another period"
            />
          </div>

          {/* Minimum and Maximum rental duration */}
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="block text-gray-700">
                Minimum rental duration
              </label>
              <select
                name="minimumRentalDuration"
                value={formData.minimumRentalDuration}
                onChange={handleInputChange}
                className="border py-3 rounded-md px-3 font-light w-full"
              >
                <option value="">Select minimum duration</option>
                {[...Array(6).keys()].map((day) => (
                  <option key={day} value={`${day + 1} day`}>{`${
                    day + 1
                  } day`}</option>
                ))}
                <option value="1 week">1 week</option>
                <option value="2 weeks">2 weeks</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">
                Maximum rental duration
              </label>
              <select
                name="maximumRentalDuration"
                value={formData.maximumRentalDuration}
                onChange={handleInputChange}
                className="border py-3 rounded-md px-3 font-light w-full"
              >
                <option value="">Select maximum duration</option>
                {[...Array(6).keys()].map((day) => (
                  <option key={day} value={`${day + 1} day`}>{`${
                    day + 1
                  } day`}</option>
                ))}
                <option value="1 week">1 week</option>
                <option value="2 weeks">2 weeks</option>
              </select>
            </div>
          </div>

          {/* Restrict departure and return days */}
          <div className="mt-5">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={restrictDays}
                onChange={toggleRestrictDays}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-gray-700">
                Restrict departure and return days
              </span>
            </label>
          </div>
          {restrictDays && (
            <div className="grid grid-cols-2 gap-5 mt-3">
              <div>
                <label className="block text-gray-700">
                  Allowed days to depart
                </label>
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
                      <span className="ml-2 text-gray-700">{day}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-gray-700">
                  Allowed days to return
                </label>
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
                      <span className="ml-2 text-gray-700">{day}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Rates */}
          <div className="mt-5">
            <h1 className="text-xl font-semibold text-gray-800">Rates</h1>
            <p className="text-sm text-gray-600 mt-1">
              This period is personalized, we can't advise you on the price.
            </p>
          </div>
          {(["1 day"].includes(formData.minimumRentalDuration) ||
            ["1 day"].includes(formData.maximumRentalDuration)) && (
            <div className="mt-3">
              <label className="block text-gray-700">Rate of per hour</label>
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
                  placeholder="Enter rate"
                />
                <span className="absolute right-3 top-2.5 text-gray-700">
                  €
                </span>
              </div>
            </div>
          )}

          {/* 1 Day and 1 Week Rates */}
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
                <label className="block text-gray-700">Rate of per day</label>
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
                    placeholder="Enter rate"
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
                <label className="block text-gray-700">Rate of per week</label>
                <div className="relative">
                  <input
                    type="number"
                    name="oneWeekRate"
                    value={formData.oneWeekRate}
                    onChange={handleInputChange}
                    className="border py-3 rounded-md px-3 font-light w-full"
                    placeholder="Enter rate"
                  />
                  <span className="absolute right-3 top-2.5 text-gray-700">
                    €
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Advanced rate */}
          <div className="mt-5">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={advanceRate}
                onChange={toggleAdvanceRate}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-gray-700">Advanced rate</span>
            </label>
          </div>
          {advanceRate && (
            <div className="mt-3 grid grid-cols-2 gap-5">
              <div>
                <label className="block text-gray-700">
                  2 Days Advance Rate
                </label>
                <input
                  type="number"
                  name="advanceRates.twoDays"
                  value={formData.advanceRates?.twoDays || ""}
                  onChange={handleInputChange}
                  className="border py-3 rounded-md px-3 font-light w-full"
                  placeholder="Enter rate"
                />
              </div>
              <div>
                <label className="block text-gray-700">
                  3 Days Advance Rate
                </label>
                <input
                  type="number"
                  name="advanceRates.threeDays"
                  value={formData.advanceRates?.threeDays || ""}
                  onChange={handleInputChange}
                  className="border py-3 rounded-md px-3 font-light w-full"
                  placeholder="Enter rate"
                />
              </div>
              <div>
                <label className="block text-gray-700">
                  5 Days Advance Rate
                </label>
                <input
                  type="number"
                  name="advanceRates.fiveDays"
                  value={formData.advanceRates?.fiveDays || ""}
                  onChange={handleInputChange}
                  className="border py-3 rounded-md px-3 font-light w-full"
                  placeholder="Enter rate"
                />
              </div>
              <div>
                <label className="block text-gray-700">
                  6 Days Advance Rate
                </label>
                <input
                  type="number"
                  name="advanceRates.sixDays"
                  value={formData.advanceRates?.sixDays || ""}
                  onChange={handleInputChange}
                  className="border py-3 rounded-md px-3 font-light w-full"
                  placeholder="Enter rate"
                />
              </div>
              <div>
                <label className="block text-gray-700">
                  2 Weeks Advance Rate
                </label>
                <input
                  type="number"
                  name="advanceRates.twoWeeks"
                  value={formData.advanceRates?.twoWeeks || ""}
                  onChange={handleInputChange}
                  className="border py-3 rounded-md px-3 font-light w-full"
                  placeholder="Enter rate"
                />
              </div>
            </div>
          )}

          <div className="flex justify-end mt-5">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className="ml-2 bg-gray-500 text-white py-2 px-4 rounded-md"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RatePopup;
