import React from 'react';
import BodyChild from './BodyChild';
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
        <h1>我是主体部分</h1>
        <p>我要开始测试了</p>
        <div>
          <p>首先是State</p>
           <p>时间是： {this.state.time}</p>
           <input type="button" value="按钮" onClick={this.addTime.bind(this)}/>
        </div>
        <div>
          <h1>然后是props</h1>
          <p>{this.props.username}</p>
        </div>

        <div>
          <p>事件与数据的双向绑定</p>
          <h1>{this.state.age}</h1>
          <BodyChild bindingEvent={this.bindingEvent.bind(this)}/>
        </div>

        <div>
          <p>Refs</p>
          <input type="button" value="改颜色" ref="changeButton" onClick={this.changeColor.bind(this)}/>
        </div>
        <div>
          <DatePicker/>
        </div>
      </div>
    );
  }
}
Body.propTypes = {
  username: PropTypes.string.isRequired
}
export default Body;
