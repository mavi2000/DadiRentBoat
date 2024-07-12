import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import calendar CSS for styling

const RatePopup = ({
  formData,
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
            <label className="block text-gray-700">Apply the rates of another period</label>
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
              <label className="block text-gray-700">Minimum rental duration</label>
              <select
                name="minimumRentalDuration"
                value={formData.minimumRentalDuration}
                onChange={handleInputChange}
                className="border py-3 rounded-md px-3 font-light w-full"
              >
                {[...Array(6).keys()].map(day => (
                  <option key={day} value={`${day + 1} day`}>{`${day + 1} day`}</option>
                ))}
                <option value="1 week">1 week</option>
                <option value="2 weeks">2 weeks</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Maximum rental duration</label>
              <select
                name="maximumRentalDuration"
                value={formData.maximumRentalDuration}
                onChange={handleInputChange}
                className="border py-3 rounded-md px-3 font-light w-full"
              >
                {[...Array(6).keys()].map(day => (
                  <option key={day} value={`${day + 1} day`}>{`${day + 1} day`}</option>
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
              <span className="ml-2 text-gray-700">Restrict departure and return days</span>
            </label>
          </div>
          {restrictDays && (
            <div className="grid grid-cols-2 gap-5 mt-3">
              <div>
                <label className="block text-gray-700">Allowed days to depart</label>
                <select
                  name="allowedDaysToDepart"
                  value={formData.allowedDaysToDepart}
                  onChange={handleInputChange}
                  className="border py-3 rounded-md px-3 font-light w-full"
                >
                  {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(day => (
                    <option key={day} value={day}>{day}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-700">Allowed days to return</label>
                <select
                  name="allowedDaysToReturn"
                  value={formData.allowedDaysToReturn}
                  onChange={handleInputChange}
                  className="border py-3 rounded-md px-3 font-light w-full"
                >
                  {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(day => (
                    <option key={day} value={day}>{day}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Rates */}
          <div className="mt-5">
            <h1 className="text-xl font-semibold text-gray-800">Rates</h1>
            <p className="text-sm text-gray-600 mt-1">This period is personalized, we can't advise you on the price.</p>
          </div>
          <div className="mt-3">
            <label className="block text-gray-700">Name of the rate</label>
            <input
              type="text"
              name="nameOfTheRate"
              value={formData.nameOfTheRate}
              onChange={handleInputChange}
              className="border py-3 rounded-md px-3 font-light w-full"
              placeholder="Name of the rate"
            />
          </div>

          {/* 1 Day and 1 Week Rates */}
          <div className="mt-3 grid grid-cols-2 gap-5">
            <div>
              <label className="block text-gray-700">1 Day Rate</label>
              <div className="relative">
                <input
                  type="number"
                  name="oneDayRate"
                  value={formData.oneDayRate}
                  onChange={handleInputChange}
                  className="border py-3 rounded-md px-3 font-light w-full"
                  placeholder="Enter rate"
                />
                <span className="absolute right-3 top-2.5 text-gray-700">€</span>
              </div>
            </div>
            <div>
              <label className="block text-gray-700">1 Week Rate</label>
              <div className="relative">
                <input
                  type="number"
                  name="oneWeekRate"
                  value={formData.oneWeekRate}
                  onChange={handleInputChange}
                  className="border py-3 rounded-md px-3 font-light w-full"
                  placeholder="Enter rate"
                />
                <span className="absolute right-3 top-2.5 text-gray-700">€</span>
              </div>
            </div>
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
                <label className="block text-gray-700">2 Days Advance Rate</label>
                <input
                  type="number"
                  name="advanceRate2Days"
                  value={formData.advanceRate2Days}
                  onChange={handleInputChange}
                  className="border py-3 rounded-md px-3 font-light w-full"
                  placeholder="Enter rate"
                />
              </div>
              <div>
                <label className="block text-gray-700">3 Days Advance Rate</label>
                <input
                  type="number"
                  name="advanceRate3Days"
                  value={formData.advanceRate3Days}
                  onChange={handleInputChange}
                  className="border py-3 rounded-md px-3 font-light w-full"
                  placeholder="Enter rate"
                />
              </div>
              <div>
                <label className="block text-gray-700">5 Days Advance Rate</label>
                <input
                  type="number"
                  name="advanceRate5Days"
                  value={formData.advanceRate5Days}
                  onChange={handleInputChange}
                  className="border py-3 rounded-md px-3 font-light w-full"
                  placeholder="Enter rate"
                />
              </div>
              <div>
                <label className="block text-gray-700">6 Days Advance Rate</label>
                <input
                  type="number"
                  name="advanceRate6Days"
                  value={formData.advanceRate6Days}
                  onChange={handleInputChange}
                  className="border py-3 rounded-md px-3 font-light w-full"
                  placeholder="Enter rate"
                />
              </div>
              <div>
                <label className="block text-gray-700">2 Weeks Advance Rate</label>
                <input
                  type="number"
                  name="advanceRate2Weeks"
                  value={formData.advanceRate2Weeks}
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
