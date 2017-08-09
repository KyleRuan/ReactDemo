import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom'

import Index from './index';
import List from './components/NextPage'
ReactDom.render(
  <Router>
    <div>
      <Route path="/" component={Index}  />
      <Route path="/list" component={List} />
    </div>
  </Router>
   , document.getElementById('example')
);