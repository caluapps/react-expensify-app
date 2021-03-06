import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    {/* <Link to='/'>Dashboard</Link> <br />
    <Link to='/create'>Create Expense</Link> <br />
    <Link to='/edit'>Edit Expense</Link> <br />
    <Link to='/help'>Help</Link> */}
    <NavLink
      to='/'
      activeClassName='is-active'
      exact={true}
    >
      Dashboard
    </NavLink>
    <NavLink
      to='/create'
      activeClassName='is-active'
    >
      Create Expense
    </NavLink>
    <NavLink
      to='/help'
      activeClassName='is-active'
    >
      Help
    </NavLink>
  </header>
);

export default Header;
