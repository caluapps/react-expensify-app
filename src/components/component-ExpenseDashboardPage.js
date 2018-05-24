import React from 'react';
import ExpenseList from './component-ExpenseList';
import ExpenseListFilters from './component-ExpenseListFilters';

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
