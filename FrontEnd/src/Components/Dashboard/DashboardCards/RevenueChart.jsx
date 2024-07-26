import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart } from '@tremor/react';
import { FaArrowUpLong } from 'react-icons/fa6';
import baseURL from '../../../../APi/BaseUrl';

const valueFormatter = (number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0,
    notation: 'compact',
    compactDisplay: 'short',
    style: 'currency',
    currency: 'USD',
  });

  return formatter.format(number);
};

const RevenueChart = () => {
  const [revenueData, setRevenueData] = useState([]);
  const [yearlyRevenue, setYearlyRevenue] = useState(0);

  useEffect(() => {
    const fetchRevenueData = async () => {
      try {
        const response = await baseURL.get('/checkout/getStatistics'); // Replace with your API URL
        const formattedData = response.data.monthlyRevenue.map(item => ({
          month: item.month,
          'This Year': item.revenue
        }));
        setRevenueData(formattedData);
        setYearlyRevenue(response.data.yearlyRevenue);
      } catch (error) {
        console.error('Error fetching revenue data:', error);
      }
    };

    fetchRevenueData();
  }, []);

  return (
    <div className="bg-white w-full rounded-md shadow-lg px-4 sm:px-8 py-4 grow">
      <h2 className="text-[#4b465cd4] font-medium text-lg">Revenue</h2>
      <h1 className="text-[#000] font-medium text-xl my-1">${yearlyRevenue}</h1>
      <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content flex gap-1 items-center">
        <span className="text-[#149D52] font-semibold flex gap-1 items-center">
          <FaArrowUpLong size={12} />
          2.1%
        </span>
        vs last week
      </p>
      <p className="text-tremor-default text-tremor-content mt-8 mb-0">
        Sales from 1-12 Dec, 2020
      </p>
      <BarChart
        data={revenueData}
        index="month"
        categories={['This Year']}
        colors={['#3498db']} // Add blue color for 'This Year'
        valueFormatter={valueFormatter}
        yAxisWidth={45}
        className="mt-6 hidden h-60 sm:block"
      />
      <BarChart
        data={revenueData}
        index="month"
        categories={['This Year']}
        colors={['#3498db']} // Add blue color for 'This Year'
        valueFormatter={valueFormatter}
        showYAxis={true}
        className="mt-4 h-56 sm:hidden"
      />
    </div>
  );
};

export default RevenueChart;
