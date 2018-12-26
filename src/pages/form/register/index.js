import React from 'react';
import { Card, Form, Input, Checkbox, Radio, Select, Switch, DatePicker, TimePicker, Upload, Icon, message, InputNumber, Button } from 'antd';
import "./../form.less";
import moment from 'moment';
import PropTypes from 'prop-types';

class Register extends React.Component{

    state={}

    getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
      }

    handleChange = (info) => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          this.getBase64(info.file.originFileObj, imageUrl => this.setState({
            userImg: imageUrl,
            loading: false,
          }));
        }
    }

    handleSubmit = () => {
        let userInfo = this.props.form.getFieldsValue();
        console.log(JSON.stringify(userInfo));
        this.props.form.validateFields((err, values) => {
            if(!err) {
                message.success(`${userInfo.userName} 恭喜你通过表单，密码为${userInfo.password}`)
            }
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol:{
                xs:24,
                sm:4,
            },
            wrapperCol: {
                xs: 24,
                sm: 12,
            }
        }
        const offsetLayout = {
            wrapperCol: {
                xs: 24,
                sm: {
                    span: 12,
                    offset:4,
                },
            }
        }
        return (
            <div>
                <Card title="注册表单">
                    <Form layout="horizontal">
                        <Form.Item label="用户名" {...formItemLayout}>
                            {
                                getFieldDecorator('useName', {
                                    // initialValue: "123456",
                                    rules: [
                                        {
                                            required: true,
                                            message: '用户名不能为空',
                                        },
                                        {
                                            pattern: /^\w/g,
                                            message: '用户名首字母必须为英文符号',
                                        }
                                    ]
                                })(<Input placeholder="请输入用户名"/>)
                            }
                        </Form.Item>
                        <Form.Item label="密码" {...formItemLayout}>
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
                                })(<Input placeholder="请输入密码"/>)
                            }
                        </Form.Item>
                        <Form.Item label="性别" {...formItemLayout}>
                            {
                                getFieldDecorator('sex', {
                                    initialValue: "1",
                                })(<Radio.Group>
                                    <Radio value="1">男</Radio>
                                    <Radio value="2">女</Radio>
                                </Radio.Group>)
                            }
                        </Form.Item>
                        <Form.Item label="年龄" {...formItemLayout}>
                            {
                                getFieldDecorator('age', {
                                    initialValue: "18",
                                })(<InputNumber/>)
                            }
                        </Form.Item>
                        <Form.Item label="当前状态" {...formItemLayout}>
                            {
                                getFieldDecorator('state', {
                                    initialValue: "2",
                                })(
                                    <Select>
                                        <Select.Option value="1" key={1}>闲鱼一条</Select.Option>
                                        <Select.Option value="2" key={2}>奉化浪子</Select.Option>
                                        <Select.Option value="3" key={3}>北大才子</Select.Option>
                                        <Select.Option value="4" key={4}>百度FE</Select.Option>
                                    </Select>
                                )
                            }
                        </Form.Item>
                        <Form.Item label="爱好" {...formItemLayout}>
                            {
                                getFieldDecorator('interest', {
                                    initialValue: ['2'],
                                })(
                                    <Select mode="multiple" initialValue={[]} >
                                        <Select.Option value="1" key={1}>游泳</Select.Option>
                                        <Select.Option value="2" key={2}>打篮球</Select.Option>
                                        <Select.Option value="3" key={3}>踢足球</Select.Option>
                                        <Select.Option value="4" key={4}>跑步</Select.Option>
                                        <Select.Option value="5" key={5}>骑行</Select.Option>
                                        <Select.Option value="6" key={6}>爬山</Select.Option>
                                        <Select.Option value="7" key={7}>上网</Select.Option>
                                        <Select.Option value="8" key={8}>敲代码</Select.Option>
                                    </Select>
                                )
                            }
                        </Form.Item>
                        <Form.Item label="是否已婚" {...formItemLayout}>
                            {
                                getFieldDecorator('isMarried', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Switch></Switch>
                                )
                            }
                        </Form.Item>
                        <Form.Item label="生日" {...formItemLayout}>
                            {
                                getFieldDecorator('birthday', {
                                    initialValue: moment(),
                                })(
                                    <DatePicker showTime></DatePicker>
                                )
                            }
                        </Form.Item>
                        <Form.Item label="联系地址" {...formItemLayout}>
                            {
                                getFieldDecorator('address', {
                                    initialValue: '请输入联系地址',
                                })(
                                    <Input.TextArea autosize={{minRows: 3,  maxRows: 8}}></Input.TextArea>
                                )
                            }
                        </Form.Item>
                        <Form.Item label="早起时间" {...formItemLayout}>
                            {
                                getFieldDecorator('time', {
                                    initialValue: moment(),
                                })(
                                    <TimePicker showTime></TimePicker>
                                )
                            }
                        </Form.Item>
                        <Form.Item label="头像" {...formItemLayout}>
                            {
                                getFieldDecorator('userImg', {
                                    initialValue: moment(),
                                })(
                                    <Upload 
                                    listType="picture-card"
                                    action="//jsonplaceholder.typicode.com/posts/"
                                    showUploadList={false}
                                    onChange={this.handleChange}
                                    >
                                    {this.state.userImg ? <img src={this.state.userImg} alt="" style={{width:100}}/>:<Icon type="plus"/>}
                                    </Upload>
                                )
                            }
                        </Form.Item>
                        <Form.Item {...offsetLayout}>
                            {
                                getFieldDecorator('userImg', {
                                    initialValue: moment(),
                                })(
                                    <Checkbox>我已阅读过<a href="#">谁是最帅</a></Checkbox>
                                )
                            }
                        </Form.Item>
                        <Form.Item {...offsetLayout}>
                            <Button type="primary" onClick={this.handleSubmit}>注册</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}
Register.contextTypes = {
    router: PropTypes.object.isRequired
  };
export default Form.create()(Register);