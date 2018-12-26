import React from 'react';
import { Card, Form, Input, Button, message, Icon, Checkbox } from 'antd';
import './../form.less';

class FormLogin extends React.Component{

    handleSubmit = () => {
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err, values) => {
            if(!err) {
                message.success(`${userInfo.userName} 恭喜你通过表单，密码为${userInfo.password}`)
            }
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Card title="登录行内表单" className="card_wrap">
                    <Form layout="inline">
                        <Form.Item>
                            <Input placeholder="请输入用户名"/>
                        </Form.Item>
                        <Form.Item>
                            <Input placeholder="请输入密码"/>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary">登录</Button>
                        </Form.Item>
                    </Form>
                </Card>
                <Card title="登录水平表单" className="card_wrap">
                    <Form layout="horizontal" style={{width: 300}}>
                        <Form.Item>
                            {
                                getFieldDecorator('password', {
                                    // initialValue: "123456",
                                    rules: [
                                        {
                                            required: true,
                                            message: '密码不能为空',
                                        },
                                        {
                                            min: 5,
                                            max:10,
                                            message: '请输入5~10位密码',
                                        },
                                        {
                                            pattern: new RegExp('^\\w+$', 'g'),
                                            message: '密码首字母必须为字母或数字',
                                        }
                                    ]
                                })(<Input prefix={<Icon type="lock"></Icon>} placeholder="请输入密码"/>)
                            }
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('password', {
                                    // initialValue: "123456",
                                    rules: [
                                        {
                                            required: true,
                                            message: '密码不能为空',
                                        }
                                    ]
                                })(<Input prefix={<Icon type="lock"></Icon>} placeholder="请输入密码"/>)
                            }
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('userName', {
                                    valuePropName: 'checked',
                                    initialValue: false, // 初始化值
                                })(
                                    <Checkbox>记住密码</Checkbox>
                                )
                            }
                            <a href="#" style={{float: 'right'}}>忘记密码？</a>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" onClick={this.handleSubmit}>登录</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(FormLogin);
