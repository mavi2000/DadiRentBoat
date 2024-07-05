import React, { useEffect, useState } from 'react';
import { DonutChart } from '@tremor/react';
import { Link } from 'react-router-dom';
import baseURL from '../../../../APi/BaseUrl';

const BoatCard = () => {
  const [data, setData] = useState([]);
  const [selectedDuration, setSelectedDuration] = useState('Weekly');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await baseURL.get('/checkout/calculateBoatRevenue');
        setData(response.data); // Set the fetched data to state
      } catch (error) {
        console.error('Error fetching boat revenue data:', error);
      }
    };

    fetchData();
  }, []);

  const currencyFormatter = (number) => {
    return '$' + Intl.NumberFormat('us').format(number).toString();
  };

  console.log("data", data);

  return (
    <>
      {data.map((boat) => (
        <div className="rounded-lg border-[1px] border-[#F5F5F5] px-6 py-4 my-4 shadow-sm md:mx-8" key={boat._id}>
          <div className="flex gap-2 justify-between flex-wrap items-center">
            <div>
              <h1 className="text-[#000] font-medium text-lg">{boat._id}</h1>
              {/* You might want to add a description field in your data */}
              <p className="text-[#818C8E] text-sm">Boat description goes here</p>
            </div>
            <label htmlFor="duration">
              <select
                className="text-[#7B7B7B] text-base outline-none border-[1px] border-[#7B7B7B] px-3 py-1 rounded-md"
                name="duration"
                id="duration"
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
              >
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </label>
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-between items-stretch mt-8">
            <div className="flex flex-col gap-2">
              <p className="mb-auto mt-0">Total Bookings: {boat.totalBookings}</p>
              <p className="mb-auto mt-0">Total Revenue: {currencyFormatter(boat.totalRevenue)}</p>
              <div className="flex w-full flex-col md:flex-row gap-2 mt-auto">
                <Link
                  to="/Dashboard/Cash-flow/Boat-detials"
                  className="text-white rounded px-8 py-2 border-[1.5px] border-[--primary-color] bg-[--primary-color] font-bold"
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
                data={[
                  { name: 'Confirmed Reservation', amount: boat.totalBookings * 0.8, color: 'cyan' },
                  { name: 'Pending Reservation', amount: boat.totalBookings * 0.1, color: 'blue' },
                  { name: 'Cancelled Reservation', amount: boat.totalBookings * 0.1, color: 'indigo' },
                ]}
                category="amount"
                index="name"
                valueFormatter={currencyFormatter}
                showTooltip={false}
                colors={['cyan', 'blue', 'indigo']}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BoatCard;
