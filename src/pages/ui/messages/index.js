import React from 'react';
import { Card, Button, message } from 'antd';
import './../ui.less';

export default class Messages extends React.Component{

    showMessage = (type) => {
        let msg = '恭喜你,React晋级成功';
        if(type === 'info') {
            msg = '是否晋级,有待商榷';
        } else if (type === 'warning') {
            msg = '是否晋级出现警告';
        } else if (type === 'error') {
            msg = '很遗憾，晋级失败';
        } else if (type === 'loading') {
            msg = '正在晋级,请稍后';
        }
        message[type](msg)
    }

    render() {
        return (
            <div>
                <Card title="全局提示框" className="card-wrap">
                    <Button type="primary" onClick={() => this.showMessage('success')}>success</Button>
                    <Button type="primary" onClick={() => this.showMessage('info')}>info</Button>
                    <Button type="primary" onClick={() => this.showMessage('warning')}>warning</Button>
                    <Button type="primary" onClick={() => this.showMessage('error')}>error</Button>
                    <Button type="primary" onClick={() => this.showMessage('loading')}>loading</Button>
                </Card>
            </div>
        )
    }
}