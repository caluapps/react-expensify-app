import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/selector-expenses';
import selectExpensesTotal from '../selectors/selector-expensesTotal';

// Create ExpensesSummary Component

// Rendered by ExpenseDashboardPage
// Test with two snapshot tests
// Connected to store for:
//    - expenseCount (how many visible expenses?)
//    - expensesTotal (what's the total of the visible expenses?)

// Example
// Viewing 2 expenses totalling $94.34

// Example
// Viewing 1 expense totalling $94.34

/*
const ExpensesSummary = ({ expensesTotal, expensesCount }) => (
  <div>
    <p>Viewing { expenseCount } totalling { expensesTotal }</p>
  </div>
); */

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  console.log('expensesTotal', expensesTotal);
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expensesTotal.expensesTotal / 100).format('$0,0.00');
  // const formattedExpensesTotal = expensesTotal.expensesTotal;
  return (
    <div>
      <h1>Viewing { expenseCount } { expenseWord } totalling { formattedExpensesTotal }</h1>
    </div>
  );
};

// const state = store.gestState();

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
