import React from 'react';
import { Card, Spin, Icon,Alert } from 'antd';
import './../ui.less';

export default class Loadings extends React.Component{
    render() {
        const icon = <Icon type ="loading" style={{fontSize: '24px'}}></Icon>
        return (
            <div>
                <Card title="Spin的用法" className="card-wrap">
                    <Spin size="small"/>
                    <Spin size="default" style={{margin: '0 10px'}}/>
                    <Spin size="large"/>
                    <Spin indicator={icon} style={{margin: '0 10px'}}/>
                </Card>
                <Card title="内容遮罩" className="card-wrap">
                    <Alert message="React" description="welcome to React Class" type="info"/>
                    <Spin>
                        <Alert message="React" description="welcome to React Class" type="warning"/>
                    </Spin>
                    <Spin tip="加载中...">
                        <Alert message="React" description="welcome to React Class" type="warning"/>
                    </Spin>
                </Card>
            </div>
        )
    }
}