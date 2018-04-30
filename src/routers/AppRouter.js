import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExpenseDashboardPage from '../Components/ExpenseDashboardPage';
import Header from '../Components/Header';

import AddExpensePage from '../Components/AddExpensePage';
import EditExpensePage from '../Components/EditExpensePage';
import HelpPage from '../Components/HelpPage';
import NotFoundPage from '../Components/NotFoundPage';

// create 6 new files for the 6 components
// setup imports, component, default exports
// import into AppRouter so they can be used

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route
          path='/'
          component={ExpenseDashboardPage}
          exact={true}
        />
        <Route
          path='/create'
          component={AddExpensePage}
        />
        <Route
          path='/edit'
          component={EditExpensePage}
        />
        <Route
          path='/help'
          component={HelpPage}
        />
        <Route
          component={NotFoundPage}
        />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
