import React from 'react';
// import {} from '../../css/Header.css';
const HeaderCss = require('../../css/Header.css');
export default class Header extends React.Component {
  render() {
    var footerConvertStyle = {
      "miniFooter": {
        "backgroundColor": "#333333",
        "color": "#ffffff",
        "paddingLeft": "20px",
        "paddingTop": "3px",
        "paddingBottom": "3px"
      },
      "miniFooter_h1": {
        "fontSize": "15px"
      }
    };
    // 导入的css都是用css字符串的形式存的
    return (

      <div className={HeaderCss.header}>
        <h1> 我是头部 </h1>
        <p style={footerConvertStyle.miniFooter}>头部好厉害</p>
      </div>

    )
  }
}
