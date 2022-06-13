import React, { useState } from 'react';
import Expenses from './compnenet/expense/Expenses';
import NewExpense from './compnenet/NewExpense/NewExpense';

//SOME DUMMY DATA TO SHOW INITIALLY
const DUMMY_EXPENSES = [ 
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
]; 

//MAIN COMPONENT
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES); // USESTATE TO STORE THE DUMMY DATA

  const addExpenseHandler = (expense) => { // THE ADDEXPENSEHANDLER TO ADD THE EXPENSE
    setExpenses((prevExpenses) => { // THE SETEXPENSES TO ADD THE EXPENSE
      return [expense, ...prevExpenses]; // THE ...PREVEXPENSES TO ADD THE EXPENSE
    }); 
  }; //END OF ADDEXPENSEHANDLER



  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} /> 
      <Expenses items={expenses} />
    </div>
  );
};

export default App;