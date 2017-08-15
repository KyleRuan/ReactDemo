import React from 'react';

class BodyChild extends React.Component {

  render() {
    return(
      <div>
        <input type="text" placeholder="请输入" onChange={this.props.bindingEvent}/>
      </div>
    )
  }
}

export  default  BodyChild;

