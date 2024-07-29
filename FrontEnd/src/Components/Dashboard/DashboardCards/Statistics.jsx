import React, { useState, useEffect } from 'react';
import { LuUsers } from 'react-icons/lu';
import { LiaClock } from 'react-icons/lia';
import { TbCurrencyDollar } from 'react-icons/tb';
import baseURL from '../../../../APi/BaseUrl';

const Statistics = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalTrips: 0,
    totalRevenue: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await baseURL.get('/checkout/getDashboardMetrics');
        setStats(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching statistics:', error);
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-white rounded-md shadow-lg px-4 sm:px-8 py-4 my-4">
      <div className="flex gap-2 justify-between flex-wrap items-center">
        <h1 className="text-[#4b465cd4] font-medium text-lg">Statistics</h1>
        <p className="text-[#4b465c94] text-xs">Updated just now</p>
      </div>

      <div className="flex justify-around flex-col md:flex-row gap-2 mt-12 mb-4">
        <div className="flex gap-2 items-center">
          <div className="rounded-full p-2 size-[40px] bg-[#00CFE829] flex items-center justify-center">
            <LuUsers size={36} color="#00CFE8" />
          </div>
          <div>
            <h2 className="text-[#4b465cd4] font-medium text-lg">{stats.totalUsers}</h2>
            <p className="text-[#4b465cc5] text-xs">Total Clients</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="rounded-full p-2 size-[40px] bg-[#7367F029] flex items-center justify-center">
            <LiaClock size={36} color="#7367F0" />
          </div>
          <div>
            <h2 className="text-[#4b465cd4] font-medium text-lg">{stats.totalTrips}</h2>
            <p className="text-[#4b465cc5] text-xs">Total Trips</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="rounded-full p-2 size-[40px] bg-[#28C76F29] flex items-center justify-center">
            <TbCurrencyDollar size={36} color="#28C76F" />
          </div>
          <div>
            <h2 className="text-[#4b465cd4] font-medium text-lg">${stats.totalRevenue}</h2>
            <p className="text-[#4b465cc5] text-xs">Total Revenue</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;








