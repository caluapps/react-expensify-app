import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExpenseDashboardPage from '../Components/components-ExpenseDashboardPage';
import Header from '../Components/components-Header';

import AddExpensePage from '../Components/components-AddExpensePage';
import EditExpensePage from '../Components/components-EditExpensePage';
import HelpPage from '../Components/components-HelpPage';
import NotFoundPage from '../Components/components-NotFoundPage';

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
