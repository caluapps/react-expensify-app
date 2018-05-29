import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/reducer-expenses';
import filtersReducer from '../reducers/reducer-filters';

export default () => {
  /* -------------------- Store --------------------
    Store creation */
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
