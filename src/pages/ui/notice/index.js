import React from 'react';
import { Card, Button, notification } from 'antd';
import './../ui.less';

export default class Motice extends React.Component{
    openNotification = (type, direction) => {
        if (direction) {
            notification.config({
                placement: direction,
            })
        }
        notification[type]({
            message: '发工资了',
            description: '今天是15号，发工资了',
        });
    }

    render() {
        return (
            <div>
                <Card title="通知提醒框" className="card-wrap">
                    <Button type="primary" onClick={() => this.openNotification('success', 'topLeft')}>success</Button>
                    <Button type="primary" onClick={() => this.openNotification('info', 'topRight')}>info</Button>
                    <Button type="primary" onClick={() => this.openNotification('warning', 'bottomRight')}>warning</Button>
                    <Button type="primary" onClick={() => this.openNotification('error', 'bottomLeft')}>error</Button>
                </Card>
            </div>
        )
    }
}