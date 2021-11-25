import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const handleFilter = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onSaveFilter={handleFilter} />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={ filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
