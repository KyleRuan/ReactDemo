import React from 'react';
import {Row, Col} from 'antd';
import {Menu,Icon,Modal} from 'antd';
import Login from './Login'
import {Link} from 'react-router-dom'
class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      current: 'top',
      modalVisible: false,
      isLogin:false,
      username:""
    }
  }

  handleMenuClick(e) {
    if (e.key == 'register' &&!this.state.isLogin) {
      // 弹出一个Modal
      const visible = !this.state.modalVisible;
      this.setModalVisible(visible);
    } else {
      this.setState({
        current:e.key
      });
    }

  }

  handleOk() {
    this.setModalVisible(false);
  }
  handleCancel() {
    this.setModalVisible(false);
  }

  setModalVisible(value) {
    this.setState({
      modalVisible:value
    });
  }
  bindingEvents(loginInfo) {
    console.log(loginInfo);
    this.setState({
      isLogin:loginInfo.isLogin,
      username:loginInfo.username
    });
    if (loginInfo.isLogin) {
      this.setModalVisible(false);
    }
  }

  render() {
    const ModalComponent = this.state.modalVisible ?(
      <Modal title="请登录"
             visible={this.state.modalVisible}
             onOk={this.handleOk.bind(this)}
             onCancel={this.handleCancel.bind(this)}
             wrapClassName="vertical-center-modal"
             footer={null}
      >
        <Login bindingEvent = {this.bindingEvents.bind(this)}/>
        <Link to="/signup" className="registerHref" >立即注册</Link>
      </Modal>
    ):null;
    const userInfo = this.state.isLogin ?this.state.username:"登录";
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
          <Col span={14}>
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
          <Col span={2}>
            <Menu selectedKeys = {[this.state.current]}
                  mode="horizontal"
                  onClick={this.handleMenuClick.bind(this)}
            >
              <Menu.Item key="register"><Icon type="user" />{userInfo}</Menu.Item>
            </Menu>
          </Col>
          <Col span={2}> </Col>
        </Row>
        {ModalComponent}
      </header>

    );

  }
}
export default Header;