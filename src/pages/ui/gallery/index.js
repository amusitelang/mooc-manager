import React from 'react';
import { Card, Row, Col, Modal } from 'antd';
import './../ui.less';

export default class Gallery extends React.Component{
    state = {
        visible: false,
    };

    componentWillMount() {
        const urlList = [
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1471797215,7832660&fm=26&gp=0.jpg',
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2083036751,3614831613&fm=26&gp=0.jpg',
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1669108379,1778158499&fm=26&gp=0.jpg',
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=635024569,244021310&fm=26&gp=0.jpg',
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2293332789,363132288&fm=26&gp=0.jpg',
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3846978484,3415826656&fm=26&gp=0.jpg',
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1432535165,512167397&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=907342232,28345691&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2458725868,3282536143&fm=26&gp=0.jpg',
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1937803885,194169273&fm=11&gp=0.jpg',
            'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3299812076,2320014274&fm=11&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=131096904,2629381027&fm=11&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2937494656,4171507231&fm=26&gp=0.jpg',
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2552149448,86402000&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1952721304,1199824981&fm=11&gp=0.jpg',
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3488144403,1941796186&fm=26&gp=0.jpg',
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3514593224,1246252679&fm=11&gp=0.jpg',
            'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2121622220,3771133846&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3295078596,664399537&fm=26&gp=0.jpg',
            'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3056394157,1635565763&fm=26&gp=0.jpg',
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=744543498,224328700&fm=26&gp=0.jpg',
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3488144403,1941796186&fm=26&gp=0.jpg',
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3492448523,621586625&fm=26&gp=0.jpg',
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2763300202,2972330704&fm=26&gp=0.jpg',
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=565858554,4076222204&fm=26&gp=0.jpg',
        ]
        this.setState({
            urlList,
        })
    }

    openGallery = (imgUrl) => {
        this.setState({
            currentImage: imgUrl,
            visible: true,
        })
    }

    render() {
        let len = this.state.urlList.length;
        let n = 5;
        let lineNum = len % n === 0 ? len / n : (Math.floor((len / 4 ) + 1));
        let res = [];
        for (let i = 0; i < lineNum; i++) {
            let temp = this.state.urlList.slice(i*n, i*n+n);
            res.push(temp);
        }
        const imgList = res.map((list, item) => {
            if ((item + 1) % 5) {
                return (
                    <Col md={5} key={item}>
                        {
                            list.map((url, index) => {
                                return (
                                    <Card style={{marginBottom: 10}} cover={<img src={url} alt="" onClick={() => this.openGallery(url)}/>} key={index}>
                                        <Card.Meta title="React Admin" description="I Like React"></Card.Meta>  
                                    </Card>
                                )
                            })
                        }
                    </Col>
                )
            } else {
                return (
                    <Col md={4} key={item}>
                        {
                            list.map((url, index) => {
                                return (
                                    <Card style={{marginBottom: 10}} cover={<img src={url} alt="" onClick={() => this.openGallery(url)}/>} key={index}>
                                        <Card.Meta title="React Admin" description="I Like React"></Card.Meta>  
                                    </Card>
                                )
                            })
                        }
                    </Col>
                )
            }
        })
        return (
            <div>
                <Card className="cad-wrap">
                    <Row gutter={10}>
                        {imgList}
                    </Row>
                </Card>
                <Modal visible={this.state.visible} onCancel={() => {
                    this.setState({
                        visible: false,
                    })
                }} footer={null} width={400} height={800} title="图片画廊">
                    <img src={this.state.currentImage} alt="" style={{width: '100%'}} key={this.state.currentImage}/>
                </Modal>
            </div>
        )
    }
}