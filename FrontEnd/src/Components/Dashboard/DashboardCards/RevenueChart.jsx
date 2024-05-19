import { BarChart } from '@tremor/react';
import { FaArrowUpLong } from 'react-icons/fa6';

const data = [
  { date: 'Jan ', 'This Year': 68560, 'Last Year': 28560 },
  { date: 'Feb ', 'This Year': 70320, 'Last Year': 30320 },
  { date: 'Mar ', 'This Year': 80323, 'Last Year': 70323 },
  { date: 'Apr ', 'This Year': 55123, 'Last Year': 45123 },
  { date: 'May ', 'This Year': 56000, 'Last Year': 80600 },
  { date: 'Jun ', 'This Year': 100000, 'Last Year': 85390 },
  { date: 'Jul ', 'This Year': 85390, 'Last Year': 45340 },
  { date: 'Aug ', 'This Year': 80100, 'Last Year': 70120 },
  { date: 'Sep ', 'This Year': 75090, 'Last Year': 69450 },
  { date: 'Oct ', 'This Year': 71080, 'Last Year': 63345 },
  { date: 'Nov ', 'This Year': 61210, 'Last Year': 100330 },
  { date: 'Dec ', 'This Year': 60143, 'Last Year': 45321 },
];

function valueFormatter(number) {
  const formatter = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0,
    notation: 'compact',
    compactDisplay: 'short',
    style: 'currency',
    currency: 'USD',
  });

  return formatter.format(number);
}

const RevenueChart = () => {
  return (
    <div className="bg-white w-full rounded-md shadow-lg px-8 py-4 grow">
      <h2 className="text-[#4b465cd4] font-medium text-lg">Revenue</h2>
      <h1 className="text-[#000] font-medium text-xl my-1">IDR 7.852.000</h1>
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
        data={data}
        index="date"
        categories={['Last Year', 'This Year']}
        colors={['yellow', 'neutral']}
        valueFormatter={valueFormatter}
        yAxisWidth={45}
        className="mt-6 hidden h-60 sm:block"
      />
      <BarChart
        data={data}
        index="date"
        categories={['Last Year', 'This Year']}
        colors={['yellow', 'neutral']}
        valueFormatter={valueFormatter}
        showYAxis={true}
        className="mt-4 h-56 sm:hidden"
      />
    </div>
  );
};
export default RevenueChart;
