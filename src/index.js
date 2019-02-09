import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './css/style.css';
import DropDown from './components/DropDown';

const Root = () => {
  return (
    <Router>
      <Route exact path="/" component={DropDown} />
    </Router>
  )
}

render(<Root />, document.getElementById('root'));
