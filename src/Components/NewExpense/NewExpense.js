import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const handleSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onSaveExpense(expenseData);
    setShowForm(false)
  };

  const handleAddNewExpense = () => {
    setShowForm(true);
  };

  // const handleFormCancel = () => {
  //   set
  // }
  return (
    <div className='new-expense '>
      <button onClick={handleAddNewExpense}>Add New Expense</button>
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={handleSaveExpenseData}
          handleCancel={() => setShowForm(false)}
        />
      )}
    </div>
  );
};
export default NewExpense;
