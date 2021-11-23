import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const handleSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
   props.onSaveExpense(expenseData)
  }
    return (
      <div className='new-expense '>
        <ExpenseForm onSaveExpenseData={handleSaveExpenseData}/>
      </div>
    );
}
export default NewExpense;