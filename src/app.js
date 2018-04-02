import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Travelmap from './pages/travelmap/travelmap';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Travelmap} />
        </Switch>
      </BrowserRouter>
    )
  }
};

export default App;