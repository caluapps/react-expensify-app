import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/reducers-expenses';
import filtersReducer from '../reducers/reducers-filters';

export default () => {
  /* -------------------- Store --------------------
    Store creation */
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    })
  );

  return store;
};
