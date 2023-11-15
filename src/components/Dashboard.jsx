// Dashboard.js
import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import UserDetailsTab from './UserDetailsTab';
import AccountCreationTab from './AccountCreationTab';
import './DashBoard.css';

const Dashboard = () => {
  return (
    <Router>
      <div>
        <div className="tabs">
          <NavLink to="/dashboard/userDetails" activeClassName="activeLink">
            User Details
          </NavLink>
          <NavLink to="/dashboard/accountCreation" activeClassName="activeLink">
            Account Creation
          </NavLink>
        </div>

        <Route path="/dashboard/userDetails" component={UserDetailsTab} />
        <Route path="/dashboard/accountCreation" component={AccountCreationTab} />
      </div>
    </Router>
  );
};

export default Dashboard;
