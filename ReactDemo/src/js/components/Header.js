import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col} from 'antd';
import {Menu,Icon} from 'antd';
export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      current: 'top'
    }
  }

  handleMenuClick(e) {
    console.log('click ', e);
    this.setState({
      current:e.key
    });
  }

  render() {
    return (
      <header>
        <Row>
          <Col span={2}> </Col>
          <Col span={4}>
            <a href="/" className="logo">
              <img src="./src/images/logo.png" alt="logo"></img>
              <span>ReactNews</span>
            </a>
          </Col>
          <Col span={16}>
            <Menu selectedKeys = {[this.state.current]}
                  mode="horizontal"
                  onClick={this.handleMenuClick.bind(this)}
            >
              <Menu.Item key="top" ><Icon type="appstore"/>首页 </Menu.Item>
              <Menu.Item key="shehui" ><Icon type="mail"/>社会 </Menu.Item>
              <Menu.Item key="guoji" ><Icon type="share-alt"/>国际 </Menu.Item>
              <Menu.Item key="yule" ><Icon type="inbox"/>娱乐</Menu.Item>
            </Menu>

          </Col>
          <Col span={2}> </Col>
        </Row>
      </header>

    )
  }
}
