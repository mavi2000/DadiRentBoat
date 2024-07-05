import { useState } from 'react';
import baseURL from '../../../../APi/BaseUrl';

const CreateExpensePopup = ({ cancel }) => {
  const [expenseName, setExpenseName] = useState('');
  const [expenseDescription, setExpenseDescription] = useState('');

  const handleSaveExpense = async () => {
    try {
      const response = await baseURL.post('/Expense/ExpenseManager', {
        expenseName,
        expenseDescription,
      });
      console.log('Expense saved:', response.data);

      // Close the popup
      cancel(false);
    } catch (error) {
      console.error('Error saving expense:', error);
      // Handle error
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-md space-y-3 max-w-[440px]">
        <h2 className="text-black text-2xl">Create Expense</h2>
        <label htmlFor="Expense" className="flex flex-col gap-1">
          Expense Name
          <input
            type="text"
            id="Expense"
            name="Expense"
            placeholder="Maintenance"
            className="border-[1.34px] border-[#DBDADE] outline-none rounded-md py-2 px-4 w-full"
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
          />
        </label>
        <label htmlFor="ExpenseDescription" className="flex flex-col gap-1 mt-4">
          Short Description
          <textarea
            name="ExpenseDescription"
            id="ExpenseDescription"
            cols="30"
            className="border-[1.34px] h-[160px] outline-none border-[#DBDADE] rounded-md py-2 px-4 w-full resize-none"
            placeholder="Description"
            value={expenseDescription}
            onChange={(e) => setExpenseDescription(e.target.value)}
          ></textarea>
        </label>
        <div className="flex gap-2">
          <button
            className="px-4 py-2 bg-[--primary-color] text-white rounded"
            onClick={handleSaveExpense}
          >
            Save
          </button>
          <button
            className="px-4 py-2 bg-[#A8AAAE] text-[#A8AAAE] bg-opacity-15 rounded"
            onClick={() => {
              cancel(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateExpensePopup;
