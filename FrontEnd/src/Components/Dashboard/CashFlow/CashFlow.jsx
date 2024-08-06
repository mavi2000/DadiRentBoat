import React, { useState, useEffect } from 'react';
import BoatCard from './BoatCard';
import StatisticCard from './StatisticCard';
import CreateExpensePopup from './CreateExpensePopup';
import baseURL from '../../../../APi/BaseUrl'; // Adjust the path as per your project structure
import { useTranslation } from 'react-i18next';

const CashFlow = () => {
  const { t } = useTranslation();
  const [createExpense, setCreateExpense] = useState(false);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const response = await baseURL.get('/Expense/GetExpenses'); // Adjust the endpoint path
      setExpenses(response.data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  return (
    <div>
      <StatisticCard />
      <div className="bg-white rounded-md shadow-lg px-8 py-4 my-4">
        <div className="flex gap-2 justify-between flex-wrap items-center mb-6">
          <h1 className="text-[#4b465cd4] font-medium text-lg">{t('cashFlowStatistics')}</h1>
          <button
            onClick={() => {
              setCreateExpense(true);
            }}
            className="border-[1px] border-[#7B7B7B] text-[#7B7B7B] rounded-md px-6 py-2"
          >
            {t('cashFlowCreateNewExpense')}
          </button>
          {createExpense && <CreateExpensePopup cancel={setCreateExpense} />}
        </div>
        <BoatCard />
        
        <div className="mt-4">
          <h2 className="text-[#4b465cd4] font-medium text-lg mb-2">{t('cashFlowExpenses')}</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('cashFlowExpenseName')}
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('cashFlowExpenseDescription')}
                </th>
                {/* Add more columns if needed */}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {expenses.map((expense) => (
                <tr key={expense._id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">{expense.expenseName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{expense.expenseDescription}</td>
                  {/* Add more columns as per your expense data */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CashFlow;
