import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/actions-expenses';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/actions-filters';
import getVisibleExpenses from './selectors/selectors-expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import uuid from 'uuid';

const store = configureStore();

// addExpense -> Water bill
// addExpense -> Gas bill
// setTextFilter -> bill (2 items) -> water (1 item)
// getVisibleExpenses -> print visible ones to screen

store.dispatch(addExpense({description: 'Water bill'}));
store.dispatch(addExpense({description: 'Gas bill'}));
store.dispatch(setTextFilter('water'));

setTimeout(() => {
  store.dispatch(setTextFilter('rent'));
}, 3000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

// console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

// ReactDOM.render(<AppRouter />, document.getElementById('app'));
ReactDOM.render(jsx, document.getElementById('app'));
