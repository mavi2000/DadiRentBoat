import Expense from "../models/Expense.js";



export const ExpenseManager =async(req,res)=>{
    const { expenseName, expenseDescription } = req.body;

    try {
      const newExpense = new Expense({
        expenseName,
        expenseDescription,
      });
  
      await newExpense.save();
  
      res.status(201).json({ message: 'Expense saved successfully!' });
    } catch (error) {
      console.error('Error saving expense:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }




  export const GetExpenses =async (req,res)=>{
    try {
        const expenses = await Expense.find();
        res.status(200).json(expenses);
      } catch (error) {
        console.error('Error fetching expenses:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    }
  