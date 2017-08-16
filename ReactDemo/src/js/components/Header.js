import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col} from 'antd';
import {Menu,Icon,Modal,Form} from 'antd';
const FormItem = Form.Item;
export default class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            current: 'top',
            modalVisible: false,
        }
    }

    handleMenuClick(e) {
        console.log('click ', e);

        if (e.key == 'register') {
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
                    <Menu.Item key="register" className="register"><Icon type="user" /> 登录/注册</Menu.Item>
                  </Menu>

                  <Modal title="请登录"
                         visible={this.state.modalVisible}
                         onOk={this.handleOk.bind(this)}
                         onCancel={this.handleCancel.bind(this)}
                  >
                  <Form>
                    <FormItem {...props}/>
                  </Form>
                  </Modal>

                </Col>
                <Col span={2}> </Col>
              </Row>
            </header>

        )
    }
}
