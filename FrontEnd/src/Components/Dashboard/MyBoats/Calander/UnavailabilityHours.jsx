import { useState } from 'react';

const UnavailabilityHours = ({ onCancel, onConfirm, startTime, endTime, setStartTime, setEndTime }) => {
  const [selectedHours, setSelectedHours] = useState([]);
  const [isTimeToTimeChecked, setIsTimeToTimeChecked] = useState(false);

  const times = [
    '12:00 AM', '1:00 AM', '2:00 AM', '3:00 AM', '4:00 AM', '5:00 AM', '6:00 AM', '7:00 AM',
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
    '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM'
  ];

  const predefinedSlots = [
    '4h00 - Starting Free', 'Morning (4h00) - Starting 8:30 AM',
    'Noon (4h00) - Starting 12:00 PM', 'Afternoon (4h00) - Starting 2:30 PM',
    'Evening (4h00) - Starting 6:00 PM', 'Sunrise (4h00) - Starting 5:00 AM',
    'After work (4h00) - Starting 6:00 PM', 'Bachelor (ette) party (4h00) - Starting Free'
  ];

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
    const timeToTimeSlot = isTimeToTimeChecked ? [`${startTime} to ${endTime}`] : [];
    const confirmedSlots = [...selectedHours, ...timeToTimeSlot];
    console.log('Confirmed hours:', confirmedSlots);
    onConfirm(confirmedSlots);
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
        {predefinedSlots.map((slot, index) => (
          <label key={index} className="flex gap-2 items-center text-[#CBA557] font-medium">
            <input
              type="checkbox"
              name="hours"
              value={slot}
              onChange={handleCheckboxChange}
              className="appearance-none w-4 h-4 border-2 border-[#CBA557] checked:bg-[#CBA557]"
            />
            {slot}
          </label>
        ))}
        <label className="flex flex-col gap-2 text-[#CBA557] font-medium">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={isTimeToTimeChecked}
              onChange={() => setIsTimeToTimeChecked(!isTimeToTimeChecked)}
              className="appearance-none w-4 h-4 border-2 border-[#CBA557] checked:bg-[#CBA557]"
            />
            Time to Time
          </div>
          {isTimeToTimeChecked && (
            <div className="flex gap-2 items-center">
              <select
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="appearance-none w-full border-2 border-[#CBA557] rounded-md px-2 py-1"
              >
                <option value="" disabled>Select start time</option>
                {times.map((time, idx) => (
                  <option key={idx} value={time}>{time}</option>
                ))}
              </select>
              <span>to</span>
              <select
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="appearance-none w-full border-2 border-[#CBA557] rounded-md px-2 py-1"
              >
                <option value="" disabled>Select end time</option>
                {times.map((time, idx) => (
                  <option key={idx} value={time}>{time}</option>
                ))}
              </select>
            </div>
          )}
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
