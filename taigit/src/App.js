import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './styles/App.scss';

import User from './components/User';
import GitHub from './components/GitHub';
import Taiga from './components/Taiga';
import Overview from './components/Overview';
import NavBar from './components/SideNavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Switch>
            <Route path="/" component={Overview} />
            <Route path="/github" component={GitHub}/>
            <Route path="/taiga" component={Taiga}/>
            <Route path="/user" component={User}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
