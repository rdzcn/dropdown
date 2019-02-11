import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './css/style.css';
import App from './components/App';

const Root = () => {
  return (
    <Router>
      <Route exact path="/" component={App} />
    </Router>
  )
}

render(<Root />, document.getElementById('root'));
