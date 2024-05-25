import React from "react";
import Calendar from "react-calendar";

const RatePopup = ({
  formData,
  selectedDates = [],  // Default to an empty array if not provided
  handleDateChange,
  handleInputChange,
  handleSubmit,
  onClose
}) => {
  // Highlight selected dates
  const tileClassName = ({ date }) => {
    const dateStr = date.toISOString().split('T')[0];
    return selectedDates && selectedDates.includes(dateStr) ? "highlight" : null;
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
          <div className="grid grid-cols-2 text-sm gap-5">
            <div className="flex flex-col gap-5 font-light text-sm">
              <div className="font-normal">Normal days Prices</div>
              {/* Normal day rates input fields */}
              {['fullDay', 'halfDayMorning', 'halfDayEvening'].map((type) => (
                <div key={type} className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name={`normalDayRates.${type}`}
                      onChange={handleInputChange}
                    />
                    <div>{type.replace(/([A-Z])/g, ' $1')}</div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div>Rates</div>
                    <div className="border w-[60%] rounded-md">
                      <select className="border-r py-3 px-2 w-[25%] bg-transparent">
                        <option>€</option>
                        <option>$</option>
                      </select>
                      <input
                        className="px-3 w-[75%] py-3 bg-transparent"
                        type="number"
                        name={`normalDayRates.${type}`}
                        value={formData.normalDayRates[type]}
                        onChange={handleInputChange}
                        placeholder="Enter"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-5 font-light text-sm">
              <div className="font-normal">Weekend Prices</div>
              {/* Weekend rates input fields */}
              {['fullDay', 'halfDayMorning', 'halfDayEvening'].map((type) => (
                <div key={type} className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name={`weekendRates.${type}`}
                      onChange={handleInputChange}
                    />
                    <div>{type.replace(/([A-Z])/g, ' $1')}</div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div>Rates</div>
                    <div className="border w-[60%] rounded-md">
                      <select className="border-r py-3 px-2 w-[25%] bg-transparent">
                        <option>€</option>
                        <option>$</option>
                      </select>
                      <input
                        className="px-3 w-[75%] py-3 bg-transparent"
                        type="number"
                        name={`weekendRates.${type}`}
                        value={formData.weekendRates[type]}
                        onChange={handleInputChange}
                        placeholder="Enter"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
