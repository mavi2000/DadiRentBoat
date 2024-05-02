import { DonutChart } from '@tremor/react';
import { Link } from 'react-router-dom';

const BoatCard = () => {
  const data = [
    {
      name: 'Confirmed Reservation',
      amount: 43,
      share: '32.1%',
      color: 'cyan',
    },
    {
      name: 'Pending Reservation',
      amount: 54,
      share: '19.6%',
      color: 'blue',
    },
    {
      name: 'Cancelled Reservation',
      amount: 34,
      share: '18.6%',
      color: 'indigo',
    },
  ];

  const currencyFormatter = (number) => {
    return '$' + Intl.NumberFormat('us').format(number).toString();
  };

  return (
    <div className="rounded-lg border-[1px] border-[#F5F5F5] px-6 py-4 my-4 shadow-sm md:mx-8">
      <div className="flex gap-2 justify-between flex-wrap items-center">
        <div>
          <h1 className="text-[#000] font-medium text-lg">Lady Gio</h1>
          <p className="text-[#818C8E] text-sm">Gommone Tornado 525 Fast</p>
        </div>
        <label htmlFor="duration">
          <select
            className="text-[#7B7B7B] text-base outline-none border-[1px] border-[#7B7B7B] px-3 py-1 rounded-md"
            name="duration"
            id="duration"
          >
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </label>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between items-stretch mt-8">
        <div className="flex flex-col gap-2">
          <p className="mb-auto mt-0">Total Bookings: 50</p>
          <div className="flex w-full flex-col md:flex-row gap-2 mt-auto">
            <Link
              to="/Dashboard/Cash-flow/Boat-detials"
              className="text-white rounded px-8 py-2  border-[1.5px] border-[--primary-color] bg-[--primary-color] font-bold"
            >
              View Details
            </Link>
            <button className="text-[#07474F] rounded px-4 py-2 font-bold border-[1.5px] border-[#07474F]">
              Add Expenses
            </button>
          </div>
        </div>
        <div className="w-[100px] h-[150px]">
          <DonutChart
            className=""
            data={data}
            category="amount"
            index="name"
            valueFormatter={currencyFormatter}
            showTooltip={false}
            colors={['cyan', 'blue', 'indigo']}
          />
        </div>
      </div>
    </div>
  );
};
export default BoatCard;
