import { useState } from 'react';
import { CiCircleAlert } from 'react-icons/ci';
import WinterizingCalendar from './WinterizingCalendar';
import baseURL from '../../../../../APi/BaseUrl';

const WinterizingPeriod = ({ onCancel }) => {
  const [winterizingCalender, setWinterizingCalendar] = useState(false);
  const [selectedRange, setSelectedRange] = useState(null);
  const boatId = '23232321321323221'; // Replace with actual boatId

  const handleWinterizingCalender = () => {
    setWinterizingCalendar(!winterizingCalender);
  };

  const handleSelectRange = (range) => {
    setSelectedRange(range);
  };

  const formatRange = (range) => {
    if (!range) return '';
    const options = { month: 'long', day: 'numeric' };
    const start = new Date(range.start).toLocaleDateString('en-US', options);
    const end = new Date(range.end).toLocaleDateString('en-US', options);
    return `${start} - ${end}`;
  };

  const handleSave = () => {
    const data = {
      // boatId,
      startDate: selectedRange.start,
      endDate: selectedRange.end,
      timeSlots: ['Full-day'],
      type: 'winterization',
      winterizationDetails: {
        isWinterization: true,
        description: 'Annual winterization period'
      }
    };

    baseURL.post('/Booking/Book-boat', data)
      .then(response => {
        console.log('Winterization period added successfully:', response.data);
        onCancel(); // Close the modal
      })
      .catch(error => {
        console.error('Error adding winterization period:', error.response.data);
      });
  };

  return (
    <div className="fixed bg-[#00000082] top-0 bottom-0 left-0 right-0 text-black flex items-center justify-center z-40 gap-4">
      <div className="w-full md:max-w-sm lg:max-w-[550px] bg-white shadow-lg rounded-xl p-4 flex flex-col gap-3 border">
        <h1 className="text-2xl font-semibold flex justify-between gap-12">
          Add a winterizing period
          <button
            className="rounded-full px-3 py-1 bg-[#CBA557] font-medium"
            onClick={onCancel}
          >
            x
          </button>
        </h1>

        <h2 className="font-medium text-lg">Winterizing period</h2>

        <input
          type="text"
          className="border px-3 py-2 rounded-lg outline-none cursor-pointer"
          placeholder="Choose a date or period"
          value={formatRange(selectedRange)}
          onClick={handleWinterizingCalender}
          readOnly
        />

        <p className="flex gap-4 px-6 py-3 bg-[#eff9fa] items-center">
          <CiCircleAlert size={46} className="text-[#88b6f7]" />
          This winterizing period will be repeated every year.
        </p>
        <div className="flex gap-4 justify-end mt-8">
          <button
            className="border-2 border-red-400 text-red-400 hover:text-white hover:bg-red-400 px-3 py-2 rounded"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="border-2 border-[#CBA557] text-[#CBA557] hover:text-white hover:bg-[#CBA557] px-3 py-2 rounded"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
      {winterizingCalender && (
        <WinterizingCalendar
          onCancel={handleWinterizingCalender}
          onSelectRange={handleSelectRange}
        />
      )}
    </div>
  );
};

export default WinterizingPeriod;
