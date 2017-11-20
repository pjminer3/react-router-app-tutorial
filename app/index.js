import React from 'react';
import { render } from 'react-dom';
/* the above equals:
  import ReactDOM from 'react-dom'
  const render = ReactDOM.render; */
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';

render((
  <Router>
    <App pokemon={window.__PRELOADED_STATE__}/>
  </Router>),
  document.getElementById('root');
  )