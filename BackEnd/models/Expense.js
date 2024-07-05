import mongoose from 'mongoose';
const { Schema } = mongoose;

const ExpenseSchema = new Schema({
    expenseName: {
        type: String,
        required: true
    },
    expenseDescription: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

export default mongoose.model('Expense', ExpenseSchema);