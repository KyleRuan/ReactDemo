import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import 'antd/dist/antd.css';
import Index from './components/index';
ReactDom.render(
  <Router>
    <div>
      <Route path="/" component={Index}  />
    </div>
  </Router>
   , document.getElementById('example')
);