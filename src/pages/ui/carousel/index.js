import React from 'react';
import { Card, Carousel } from 'antd';
import './../ui.less';

export default class Carousels extends React.Component{
    state = {}
    componentWillMount() {
        const urlList = [
            'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3474989227,2615572775&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2288493205,3112639412&fm=15&gp=0.jpg',
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3306321825,2823821476&fm=15&gp=0.jpg',
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1032593294,1556858972&fm=15&gp=0.jpg',
        ]
        this.setState({
            urlList,
        })
    }

    render() {
        const imgList = this.state.urlList.map((item, index) => {
            return (
                <div key={index}>
                    <img src={item} alt=""/>
                </div>
            )
        })
        return (
            <div>
                <Card title="文字背景轮播" className="card-wrap">
                    <Carousel>
                        <div><h3>Ant Motion Banner -React</h3></div>
                        <div><h3>Ant Motion Banner -Vue</h3></div>
                        <div><h3>Ant Motion Banner -Angular</h3></div>
                    </Carousel>
                </Card>
                <Card title="图片轮播" className="slider-wrap">
                    <Carousel>
                        {imgList}
                    </Carousel>
                </Card>
            </div>
        )
    }
}