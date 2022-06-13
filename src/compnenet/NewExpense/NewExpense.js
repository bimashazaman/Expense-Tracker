import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => { // props to get the data from the App.js
  const saveExpenseDataHandler = (enteredExpenseData) => { // the saveExpenseDataHandler to get the entered expense data
    const expenseData = { // the expenseData to get the entered expense data
      ...enteredExpenseData, // the ...enteredExpenseData to get the entered expense data
      id: Math.random().toString() // the Math.random().toString() to get the id
    };
    props.onAddExpense(expenseData); // the props to get the data from the App.js
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;