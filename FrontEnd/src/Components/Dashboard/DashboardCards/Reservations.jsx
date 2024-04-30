import { Card, DonutChart, List, ListItem } from '@tremor/react';

const data = [
  { name: 'Travel', amount: 6730, share: '32.1%', color: 'bg-cyan-500' },
  {
    name: 'IT & equipment',
    amount: 4120,
    share: '19.6%',
    color: '#5BAA73',
  },
  {
    name: 'Training & development',
    amount: 3920,
    share: '18.6%',
    color: 'bg-indigo-500',
  },
];

const currencyFormatter = (number) => {
  return '$' + Intl.NumberFormat('us').format(number).toString();
};
const Reservations = () => {
  return (
    <div className="bg-white rounded-md shadow-lg px-8 py-4 grow">
      <h2 className="text-[#4b465cd4] font-medium text-lg">Reservations</h2>
      <div className="flex items-center">
        <DonutChart
          className="mt-8"
          data={data}
          category="amount"
          index="name"
          valueFormatter={currencyFormatter}
          showTooltip={false}
          colors={['cyan', 'blue', 'indigo']}
        />
        <div>
          <h1>43</h1>
          <div className="flex items-center gap-1">
            <p className="size-[12px] rounded-sm bg-red-500"></p>
            <p>Confirmed</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Reservations;
