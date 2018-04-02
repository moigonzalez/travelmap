import React from 'react';
import ReactDOM from 'react-dom';
import Travelmap from './travelmap';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Travelmap />, div);
});
