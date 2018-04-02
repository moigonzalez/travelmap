import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Travelmap from './pages/travelmap/travelmap';
import Home from './pages/home/home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Travelmap} />
          <Route exact path='/home' component={Home} />
        </Switch>
      </BrowserRouter>
    )
  }
};

export default App;