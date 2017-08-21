/**
 * Created by zhangxinyi on 17/8/17.
 */


import React from 'react';
import {Icon,Form, Input, Button, Checkbox,Alert} from 'antd';
const FormItem = Form.Item;

class Login extends React.Component {
  constructor() {
    super();
    console.log(this.props)
    this.state = {
      showAlert:false
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        // 发送请求
        if (values.password == "123" && values.userName == "123") {
          this.props.bindingEvent({
            isLogin: true,
            username:values.userName
          });
        } else {
          // 密码错误还是用户名错误
          this.setState({
            showAlert:true
          })
        }
        //  成功
        // 失败
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const alert = this.state.showAlert ?(
      <Alert type="error" message="登录失败"/>
    ):null;
    return(
      <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入用户名' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入你的密码' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>记住密码</Checkbox>
          )}
          <a className="login-form-forgot" href="">忘记密码</a>
          <Button type="primary" htmlType="submit" className="login-form-button ">
            登 录
          </Button>
          {/*</div>*/}

        </FormItem>
        {alert}
      </Form>

    )
  }
}


export default Login = Form.create()(Login)