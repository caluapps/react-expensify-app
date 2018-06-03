import React from 'react';
import ExpenseList from './component-ExpenseList';
import ExpenseListFilters from './component-ExpenseListFilters';
import ExpensesSummary from './component-ExpensesSummary';

const ExpenseDashboardPage = (props) => (
  <div>
    <ExpensesSummary />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
