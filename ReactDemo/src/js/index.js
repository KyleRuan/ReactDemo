import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Body from './components/Body';
export default class Index extends React.Component {
  render() {
    return (
      <div >
        <Header/>
        <Body username={"kyle"} />
        <Footer/>
      </div>
    )
  }
}
