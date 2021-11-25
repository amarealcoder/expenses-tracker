import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [addTitle, setAddTitle] = useState('');
  const [addAmount, setAddAmount] = useState('');
  const [addDate, setAddDate] = useState('');

  //   const [userInput, setUserInput] = useState({
  //     title: '',
  //     amount: '',
  //     date: '',
  //   });

  const handleAddTitle = (event) => {
    setAddTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   title: event.target.value,
    // });
  };

  const handleAddAmount = (event) => {
    setAddAmount(event.target.value);
    //    setUserInput({
    //      ...userInput,
    //      amount: event.target.value,
    //    });
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     amount: event.target.value,
    //   };
    // });
  };

  const handleAddDate = (event) => {
    setAddDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   date: event.target.value,
    // });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const expenseData = {
      title: addTitle,
      amount: +addAmount,
      date: new Date(addDate),
    };

    props.onSaveExpenseData(expenseData);

    setAddTitle('');
    setAddAmount('');
    setAddDate('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label>Title</label>
            <input type='text' value={addTitle} onChange={handleAddTitle} />
          </div>
          <div className='new-expense__control'>
            <label htmlFor='amount'>Amount</label>
            <input
              type='number'
              min='0.01'
              step='0.01'
              value={addAmount}
              onChange={handleAddAmount}
            />
          </div>
          <div className='new-expense__control'>
            <label htmlFor='date'>Date</label>
            <input
              type='date'
              min='2019-01-01'
              max='2022-12-31'
              value={addDate}
              onChange={handleAddDate}
            />
          </div>
        </div>

        <div className='new-expense__actions'>
          <button type='button' onClick={props.handleCancel}>
            Cancel
          </button>
          <button type='submit'>Add expense</button>
        </div>
      </form>
      {/* <div>{expenseData}</div> */}
    </div>
  );
};
export default ExpenseForm;
