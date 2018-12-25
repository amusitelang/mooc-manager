import React from 'react';
import {Card, Button, Radio} from 'antd';
import './index.less'

export default class Buttons extends React.Component{
    constructor() {
        super();
        this.state= {
            loading: true,
            title: '关闭',
            size: 'small',
        }
    }

    handleCloseLoading = () => {
        if (this.state.loading) {
            this.setState({
                loading: !this.state.loading,
                title: '开启',
            })
        } else {
            this.setState({
                loading: !this.state.loading,
                title: '关闭',
            })
        }
    }

    handleChangeSize = (e) => {
        this.setState({
            size: e.target.value,
        })
    }

    render() {
        return (
            <div>
               <Card title="基础按钮" className="card_button">
                    <Button type="primary">Imooc</Button>
                    <Button>Imooc</Button>
                    <Button type="dashed">Imooc</Button>
                    <Button type="danger">Imooc</Button>
                    <Button disabled>Imooc</Button>
               </Card>
               <Card title="图形按钮" className="card_button">
                    <Button type="primary" shape="circle" icon="search" />
                    <Button type="primary" icon="search">Search</Button>
                    <Button shape="circle" icon="search" />
                    <Button icon="search">Search</Button>
                    <Button shape="circle" icon="search" />
                    <Button icon="search">Search</Button>
                    <Button type="dashed" shape="circle" icon="search" />
                    <Button type="dashed" icon="search">Search</Button>
               </Card>
               <Card title="Loading按钮" className="card_button">
                    <Button type="primary" loading={this.state.loading}>确定</Button>
                    <Button type="primary" shape="circle" loading={this.state.loading}></Button>
                    <Button loading={this.state.loading}>点击加载</Button>
                    <Button shape="circle" loading={this.state.loading}></Button>
                    <Button type="primary" onClick={this.handleCloseLoading}>{this.state.title}</Button>
               </Card>
               <Card title="按钮组" className="card_button">
                    <Button.Group>
                        <Button type="primary" icon="left" style={{marginRight: '0px'}}>返回</Button>
                        <Button type="primary" icon="right" style={{marginRight: '0px'}}>前进</Button>
                    </Button.Group>
               </Card>
               <Card title="按钮尺寸" className="card_button">
                    <Radio.Group onChange={this.handleChangeSize} value={this.state.size}>
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>
                    </Radio.Group>
                    <Button type="primary" size={this.state.size}>Imooc</Button>
                    <Button size={this.state.size}>Imooc</Button>
                    <Button type="dashed" size={this.state.size}>Imooc</Button>
                    <Button type="danger" size={this.state.size}>Imooc</Button>
                    <Button disabled size={this.state.size}>Imooc</Button>
               </Card>
            </div>
        )
    }
}