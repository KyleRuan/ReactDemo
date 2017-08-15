import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom'

import Index from './index';
import List from './components/NextPage'
import Detail from './components/Details';
ReactDom.render(
  <Router>
    <div>
      {/*exact 参数就只是会精确匹配而已，一下其实就是一个嵌套的样式*/}
      {/*<Route path='parent' component={Parent} />*/}
      {/*const Parent = () => (*/}
      {/*<div>*/}
        {/*<Route path='child' component={Child} />*/}
        {/*<Route path='other' component={Other} />*/}
      {/*</div>*/}
      {/*)*/}

      <Route  path="/" component={Index}  />
      <Route path="/list/:id" component={List} />
      <Route path="/detail" component={Detail} />
    </div>
  </Router>
   , document.getElementById('example')
);