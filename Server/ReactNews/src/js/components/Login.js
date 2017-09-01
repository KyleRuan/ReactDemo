/**
 * Created by zhangxinyi on 17/8/17.
 */

import React from 'react';
import {Icon,Form, Input, Button, Checkbox,Alert} from 'antd';

const FormItem = Form.Item;

class Login extends React.Component {
  constructor() {
    super();
    console.log(this.props);
    this.state = {
      alertMessage:''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        }).then((respond) => {
          return respond.json();
        }).then( (data) => {
           console.log(data);
              if (data.code == 1) {
                this.props.bindingEvent({
                  isLogin: true,
                  username:data.username
                });
              } else if(data.code == -1) {
                  // 没有注册
                this.setState( {
                  alertMessage:data.message
                });
              } else  if (data.code = -2) {
                //密码错误
                this.setState( {
                  alertMessage:data.message
                });
              }
          }
        );
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const alert = this.state.alertMessage.length >0 ?(
      <Alert type="error" message={this.state.alertMessage}/>
    ):null;
    return(
      <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
        <FormItem>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: '请输入你的邮箱' }],
          })(
            <Input prefix={<Icon type="mail" style={{ fontSize: 13 }} />} placeholder="email" />
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