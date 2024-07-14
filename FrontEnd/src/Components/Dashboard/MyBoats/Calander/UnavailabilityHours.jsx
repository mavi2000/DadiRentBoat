import { useState } from 'react';

const UnavailabilityHours = ({ onCancel, onConfirm }) => {
  const [selectedHours, setSelectedHours] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSelectedHours((prev) => {
      if (checked) {
        return [...prev, value];
      } else {
        return prev.filter((hour) => hour !== value);
      }
    });
  };

  const handleConfirm = () => {
    console.log('Confirmed hours:', selectedHours);
    onConfirm(selectedHours);
  };

  return (
    <div className="fixed bg-[#00000082] top-0 bottom-0 left-0 right-0 text-black flex items-center justify-center z-50">
      <div className="w-full md:max-w-sm lg:max-w-[500px] bg-white shadow-lg rounded-xl p-4 flex flex-col gap-3 border">
        <h1 className="text-2xl font-semibold flex justify-between gap-12">
          Indicate your unavailability{' '}
          <button
            className="rounded-full px-3 py-1 bg-[#CBA557] font-medium"
            onClick={onCancel}
          >
            x
          </button>
        </h1>
        <label className="flex gap-2 items-center text-[#CBA557] font-medium">
          <input
            type="checkbox"
            name="hours"
            value="4h00 - Starting Free"
            onChange={handleCheckboxChange}
            className="appearance-none w-4 h-4 border-2 border-[#CBA557] checked:bg-[#CBA557]"
          />
          4h00 -{' '}
          <span className="text-gray-500 font-normal">Starting Free</span>
        </label>
        <label className="flex gap-2 items-center text-[#CBA557] font-medium">
          <input
            type="checkbox"
            name="hours"
            value="Morning (4h00) - Starting 8:30 AM"
            onChange={handleCheckboxChange}
            className="appearance-none w-4 h-4 border-2 border-[#CBA557] checked:bg-[#CBA557]"
          />
          Morning (4h00) -{' '}
          <span className="text-gray-500 font-normal">Starting 8:30 AM</span>
        </label>
        <label className="flex gap-2 items-center text-[#CBA557] font-medium">
          <input
            type="checkbox"
            name="hours"
            value="Noon (4h00) - Starting 12:00 PM"
            onChange={handleCheckboxChange}
            className="appearance-none w-4 h-4 border-2 border-[#CBA557] checked:bg-[#CBA557]"
          />
          Noon (4h00) -{' '}
          <span className="text-gray-500 font-normal">Starting 12:00 PM</span>
        </label>
        <label className="flex gap-2 items-center text-[#CBA557] font-medium">
          <input
            type="checkbox"
            name="hours"
            value="Afternoon (4h00) - Starting 2:30 PM"
            onChange={handleCheckboxChange}
            className="appearance-none w-4 h-4 border-2 border-[#CBA557] checked:bg-[#CBA557]"
          />
          Afternoon (4h00) -{' '}
          <span className="text-gray-500 font-normal">Starting 2:30 PM</span>
        </label>
        <label className="flex gap-2 items-center text-[#CBA557] font-medium">
          <input
            type="checkbox"
            name="hours"
            value="Evening (4h00) - Starting 6:00 PM"
            onChange={handleCheckboxChange}
            className="appearance-none w-4 h-4 border-2 border-[#CBA557] checked:bg-[#CBA557]"
          />
          Evening (4h00) -{' '}
          <span className="text-gray-500 font-normal">Starting 6:00 PM</span>
        </label>
        <label className="flex gap-2 items-center text-[#CBA557] font-medium">
          <input
            type="checkbox"
            name="hours"
            value="Sunrise (4h00) - Starting 5:00 AM"
            onChange={handleCheckboxChange}
            className="appearance-none w-4 h-4 border-2 border-[#CBA557] checked:bg-[#CBA557]"
          />
          Sunrise (4h00) -{' '}
          <span className="text-gray-500 font-normal">Starting 5:00 AM</span>
        </label>
        <label className="flex gap-2 items-center text-[#CBA557] font-medium">
          <input
            type="checkbox"
            name="hours"
            value="After work (4h00) - Starting 6:00 PM"
            onChange={handleCheckboxChange}
            className="appearance-none w-4 h-4 border-2 border-[#CBA557] checked:bg-[#CBA557]"
          />
          After work (4h00) -{' '}
          <span className="text-gray-500 font-normal">Starting 6:00 PM</span>
        </label>
        <label className="flex gap-2 items-center text-[#CBA557] font-medium">
          <input
            type="checkbox"
            name="hours"
            value="Bachelor (ette) party (4h00) - Starting Free"
            onChange={handleCheckboxChange}
            className="appearance-none w-4 h-4 border-2 border-[#CBA557] checked:bg-[#CBA557]"
          />
          Bachelor (ette) party (4h00) -{' '}
          <span className="text-gray-500 font-normal">Starting Free</span>
        </label>

        <div className="flex gap-4 justify-end mt-8">
          <button
            className="border-2 border-red-400 text-red-400 hover:text-white hover:bg-red-400 px-3 py-2 rounded"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="border-2 border-[#CBA557] text-[#CBA557] hover:text-white hover:bg-[#CBA557] px-3 py-2 rounded"
            onClick={handleConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default UnavailabilityHours;