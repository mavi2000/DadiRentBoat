import { useState } from 'react';
import BoatCard from './BoatCard';
import StatisticCard from './StatisticCard';
import CreateExpensePopup from './CreateExpensePopup';

const CashFlow = () => {
  const [createExpense, setCreatExpense] = useState(false);
  return (
    <div>
      <StatisticCard />
      <div className="bg-white rounded-md shadow-lg px-8 py-4 my-4">
        <div className="flex gap-2 justify-between flex-wrap items-center mb-6">
          <h1 className="text-[#4b465cd4] font-medium text-lg">Statistics</h1>
          <button
            onClick={() => {
              setCreatExpense(true);
            }}
            className="border-[1px] border-[#7B7B7B] text-[#7B7B7B] rounded-md px-6 py-2"
          >
            Create new Expense
          </button>
          {createExpense && <CreateExpensePopup cancel={setCreatExpense} />}
        </div>
        <BoatCard />
        <BoatCard />
        <BoatCard />
        <BoatCard />
      </div>
    </div>
  );
};
export default CashFlow;
