import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExpenseDashboardPage from '../Components/component-ExpenseDashboardPage';
import Header from '../Components/component-Header';

import AddExpensePage from '../Components/component-AddExpensePage';
import EditExpensePage from '../Components/component-EditExpensePage';
import HelpPage from '../Components/component-HelpPage';
import NotFoundPage from '../Components/component-NotFoundPage';

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
          path='/edit/:id'
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
