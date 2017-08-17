/**
 * Created by zhangxinyi on 17/8/17.
 */


import React from 'react';
import {Icon,Form, Input, Button, Checkbox} from 'antd';
const FormItem = Form.Item;

 class Login extends React.Component {
     constructor() {
         super()
     }

     handleSubmit(e) {
         e.preventDefault();
         this.props.form.validateFields((err, values) => {
             if (!err) {
                 console.log('Received values of form: ', values);
             }
         });
     }
    render() {
        const { getFieldDecorator } = this.props.form;
        return(
            <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">Forgot password</a>
                    {/*<div id="registerButton">*/}
                        <Button type="primary" htmlType="submit" className="login-form-button ">
                            Log in
                        </Button>
                    {/*</div>*/}

                </FormItem>
            </Form>
    )
    }
}


export default Login = Form.create()(Login)