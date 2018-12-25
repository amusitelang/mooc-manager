import React from 'react';
import { Card, Button, Modal } from 'antd';
import './index.less';
import '../ui.less';

export default class Modals extends React.Component{
    state = {
      showModal1: false,
      showModal2: false,
      showModal3: false,
      showModal4: false,
    }

    handleOpen = (type) => {
        this.setState({
            [type]: true,
        })
    }

    handleConfirm = (type) => {
        Modal[type]({
            title: '确认',
            content: '你确定antd学好了吗',
            onOk() {
                console.log('ok');
            },
            onCancel() {
                console.log('cancel');
            }
        })
    }

    handleClose = (type) => {
        this.setState({
            [type]: false,
        })
    }

    render() {
        return (
            <div>
                <Card title="基础模态框" className="card-wrap">
                    <Button type="primary" onClick={() => this.handleOpen('showModal1')}>Open</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal2')}>自定义页脚</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal3')}>顶部20px弹框</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal4')}>水平垂直居中</Button>
                </Card>
                <Card title="信息确认框" className="card-wrap">
                    <Button type="primary" onClick={() => this.handleConfirm('confirm')}>confirm</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('info')}>info</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('success')}>success</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('warning')}>warning</Button>
                </Card>
                <Modal
                    title="React"
                    visible={this.state.showModal1}
                    onOk={() => this.handleClose('showModal1')}
                    onCancel={() => this.handleClose('showModal1')}
                >
                    <p>欢迎来到React</p>
                </Modal>
                <Modal
                    title="React"
                    visible={this.state.showModal2}
                    okText="好的"
                    cancelText="算了"
                    onOk={() => this.handleClose('showModal2')}
                    onCancel={() => this.handleClose('showModal2')}
                >
                    <p>欢迎来到React</p>
                </Modal>
                <Modal
                    title="React"
                    style={{top: 20}}
                    visible={this.state.showModal3}
                    okText="好的"
                    cancelText="算了"
                    onOk={() => this.handleClose('showModal3')}
                    onCancel={() => this.handleClose('showModal3')}
                >
                    <p>欢迎来到React</p>
                </Modal>
                <Modal
                    title="React"
                    wrapClassName="vertical-center-modal"
                    visible={this.state.showModal4}
                    okText="好的"
                    cancelText="算了"
                    onOk={() => this.handleClose('showModal4')}
                    onCancel={() => this.handleClose('showModal4')}
                >
                    <p>欢迎来到React</p>
                </Modal>
            </div>
        )
    }
}