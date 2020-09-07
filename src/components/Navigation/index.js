import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from './routes';
import ChatBox from '../ChatBox';
import SideNavigation from './SideNavigation';

export class Navigation extends Component {
  render() {
    return (
      <Router>
        <SideNavigation />
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.sidebar}
          />
        ))}
        <ChatBox />
      </Router>
    )
  }
}

export default Navigation
