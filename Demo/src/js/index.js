import React from 'react';
import ReactDom from 'react-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Body from './components/Body';
ReactDom.render(
  <div >
      <Header/>
      <Body username={"kyle"} />
      <Footer/>
  </div>, document.getElementById('example') );
