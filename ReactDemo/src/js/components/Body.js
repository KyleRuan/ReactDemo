import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'antd';
class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      time:0,
      age:0
    }
  };
  addTime() {
    const nowTime = this.state.time +1;
    this.setState({
      time:nowTime
    })
  };
  bindingEvent(event) {
    this.setState({age: event.target.value});
  };
  changeColor() {
    console.log(this.refs.changeButton);
    this.refs.changeButton.style.backgroundColor = "333333";
  };
  render() {
    return (
      <div>
        <div>
          <p>首先是State</p>
           <p>时间是： {this.state.time}</p>
           <input type="button" value="按钮" onClick={this.addTime.bind(this)}/>
        </div>
      </div>
    );
  }
}
Body.propTypes = {
  username: PropTypes.string.isRequired
}
export default Body;
