import { Form, Input, Icon, Checkbox, Button ,Tooltip,message} from 'antd';
const FormItem = Form.Item;
import React from 'react';
import {withRouter} from 'react-router-dom'

class RegistrationForm extends React.Component {
    constructor() {
        super();
        this.state = {
            confirmDirty: false
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err &&values.agreement) {
              message.loading("正在注册中");
              fetch('/api/signup', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
              }).then((response) => {
                return response.json();
              }).then(
                (data) => {
                  console.log(data);
                  if (data.code == -1) {
                    message.destroy();
                    message.error(data.message,2);
                  } else if (data.code == 1){
                    message.destroy();
                    message.success(data.message,1);
                    // 自动登录 设置状态到首页
                    console.log(data);
                    const  user = data.user;
                    // email
                  // :
                  //   "464118236@qq.com"
                  //   nickname
                  //     :
                  //     "1122"
                  //   password
                  //     :
                  //     "111"
                  //   rememberPWD
                  //     :
                  //     true
                    this.props.match.params = {
                      isLogin:true,
                      username:user.username
                    };
                    this.props.history.push("/");
                  }
                }
              );

                //
                // const path = '/';
                // this.props.history.go('/');

            } else if(!values.agreement) {
                console.log("必须同意协议");
            }
        });
    }
    handleConfirmBlur(e) {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }
    checkPassword (rule, value, callback) {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('两次输入的密码不一致');
        } else {
            callback();
        }
    }
    checkConfirm(rule, value, callback) {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }

    render() {
        const {getFieldDecorator}  = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 14,
                    offset: 6,
                },
            },
        };
        return(
            <div>
                <h2 className="signup-header"> 注 册 </h2>
                <Form onSubmit={this.handleSubmit.bind(this)}>
                    <FormItem  {...formItemLayout}
                               label ="邮箱"
                               hasFeedback>
                        {getFieldDecorator('email',{
                            rules: [{
                                type:"email",message: '不合法的邮箱地址'
                            },{
                                required:true,message: '请输入你的邮箱'
                            }]
                        })(
                            <Input prefix={<Icon type="mail" />}  placeholder="邮箱地址"/>
                        )}
                    </FormItem>
                    <FormItem label="密码"
                              hasFeedback
                              {...formItemLayout}>
                        {getFieldDecorator('password',{
                            rules: [
                                {required:true , message:'请输入密码'},
                                {validator: this.checkConfirm.bind(this)}
                            ]
                        })(
                            <Input type="password" prefix={<Icon type="lock" />}  placeholder="请输入密码"/>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout}
                              label="确认密码"
                              hasFeedback>
                        {getFieldDecorator('confirm',{
                            rules: [{
                                required:true, message:"请确认密码"
                            },{
                                validator:this.checkPassword.bind(this)
                            }
                            ]
                        }) (
                            <Input type="password" onBlur={this.handleConfirmBlur.bind(this)}   prefix={<Icon type="lock" />}  placeholder="请确认你的密码"/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label={(
                            <span>
              昵称
              <Tooltip title="希望其他人称呼你什么">
                <Icon type="question-circle-o"  style={{marginLeft:4}}/>
              </Tooltip>
             </span>
                        )}
                        hasFeedback
                    >
                        {getFieldDecorator('nickname', {
                            rules: [{ required: true, message: '请输入你的用户名', whitespace: true }],
                        })(
                            <Input prefix={<Icon type="user"/>} placeholder="请输入你的用户名"/>
                        )}
                    </FormItem>


                    <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
                        {getFieldDecorator('agreement', {
                            valuePropName: 'checked',
                            initialValue: true,
                            ruLes: [{
                                required:true, message:"请同意我们的协议"
                            }
                            ]
                        })(
                            <Checkbox >我同意 <a href="" >协议</a></Checkbox>
                        )}
                    </FormItem>
                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">注册</Button>
                    </FormItem>
                </Form>
            </div>

        )
    }

}

const Signup = Form.create()(RegistrationForm);
export default withRouter(Signup);