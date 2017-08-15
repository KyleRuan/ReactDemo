import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Body from './Body';

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
