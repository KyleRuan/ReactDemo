import React from 'react';
import {Link} from 'react-router-dom';
import {Row,Col} from 'antd';
// import {} from '../../css/Header.css';
const HeaderCss = require('../../css/Header.css');
export default class Header extends React.Component {
  render() {
    // 导入的css都是用css字符串的形式存的
    return (


      <div className={HeaderCss.header}>
        <Row>
          <Col span={2}> </Col>
          <Col span={4}>
            //这里放置图标栏目

          </Col>
          <Col span={2}> </Col>
        </Row>
      </div>

    )
  }
}
