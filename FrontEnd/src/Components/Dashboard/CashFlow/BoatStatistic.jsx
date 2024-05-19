import { LuUsers } from 'react-icons/lu';
import { LiaClock } from 'react-icons/lia';
import { TbCurrencyDollar } from 'react-icons/tb';
const BoatStatistic = () => {
  return (
    <div className="bg-white rounded-md shadow-lg px-8 py-4 my-4">
      <div className="flex gap-2 justify-between flex-wrap items-start">
        <div>
          <h1 className="text-[#4b465cd4] font-medium text-lg">Statistics</h1>
          <p className="text-[#818C8E] text-sm">Gommone Tornado 525 Fast</p>
        </div>
        <p>Total Bookings: 50</p>
        <label htmlFor="duration">
          <select
            className="text-[#7B7B7B] text-base outline-none border-[1px] border-[#7B7B7B] px-3 py-2 rounded-md"
            name="duration"
            id="duration"
          >
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </label>
      </div>

      <div className="flex justify-around flex-col md:flex-row gap-2 mt-12 mb-4">
        <div className="flex gap-2 items-center">
          <div className="rounded-full p-2 size-[40px] bg-[#28C76F29] flex items-center justify-center">
            <TbCurrencyDollar size={36} color="#28C76F" />
          </div>
          <div>
            <h2 className="text-[#4b465cd4] font-medium text-lg">$9745</h2>
            <p className="text-[#4b465cc5] text-xs">Total Revenue</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="rounded-full p-2 size-[40px] bg-[#7367F029] flex items-center justify-center">
            <LiaClock size={36} color="#7367F0" />
          </div>
          <div>
            <h2 className="text-[#4b465cd4] font-medium text-lg">$ 1450</h2>
            <p className="text-[#4b465cc5] text-xs">Total Expenses</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="rounded-full p-2 size-[40px] bg-[#00CFE829] flex items-center justify-center">
            <LuUsers size={36} color="#00CFE8" />
          </div>
          <div>
            <h2 className="text-[#4b465cd4] font-medium text-lg">$230</h2>
            <p className="text-[#4b465cc5] text-xs">Extra Services</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BoatStatistic;
