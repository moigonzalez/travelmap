import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './pages/login/login';
import Travelmap from './pages/travelmap/travelmap';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/map' component={Travelmap} />
        </Switch>
      </BrowserRouter>
    )
  }
};

export default App;