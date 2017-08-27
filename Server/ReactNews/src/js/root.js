import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import 'antd/dist/antd.css';
import Index from './components/index';
import Signup from './components/Signup'
ReactDom.render(
  <Router>
    <div>
      <Route exact path="/" component={Index}  />
      <Route path="/signup" component={Signup}  />
    </div>
  </Router>
   , document.getElementById('example')
);