import React from 'react';
import {Link} from 'react-router-dom';
export default class NextPage extends React.Component {
  componentDidMount(){
    console.log(this.props.match.params.id);
  }
  render() {
    return (
      <div>
        <p>第二个页</p>
        <p>{this.props.match.params.id}</p>
        <Link to="/" > 返回到首页 </Link>
      </div>
    )
  }
}