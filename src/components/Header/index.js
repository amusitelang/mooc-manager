import React from 'react';
import { Row,Col } from 'antd';
import './index.less';
import { setInterval } from 'timers';
import Util from '../../utils/utils'
import axios from '../../axios';

export default class Header extends React.Component{
    constructor() {
        super();
        this.state = {
            sysTime: '',
            dayPicture: '',
            weather: '',
        }
    }
    componentWillMount() {
        this.setState({
            userName: 'React',
        });
        setInterval(() => {
            let sysTime = Util.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        }, 1000);
        this.getWeatherAPIData();
    }

    getWeatherAPIData() {
        let city = '上海';
        // axios.jsonp({
        //     // url: `https://free-api.heweather.net/s6/weather/forecast?location=${encodeURIComponent('上海')}&key=d6d8eaf6830a4d8d897feebcaaf84dfd`
        //     url: 'https://free-api.heweather.net/s6/weather/forecast?location=上海&key=d6d8eaf6830a4d8d897feebcaaf84dfd'
        // }).then((res) => {
        //     console.log(res);
        // })
        axios.AXIOS({
            location: encodeURIComponent(city),
            key: 'd6d8eaf6830a4d8d897feebcaaf84dfd',
        }).then((res) => {
            console.log(res);
            if (res.status === 200 && res.statusText === 'OK') {
                let data = res.data.HeWeather6[0].daily_forecast[0];
                this.setState({
                    dayPicture: '白天天气：',
                    weather: data.cond_txt_d,
                })
            }
        })
    }

    handleClose = (link) => {
        console.log(link);
    }

    render() {
        return (
            <div className="header">
                <Row className="header_top">
                    <Col span="24">
                        <span>欢迎，{this.state.userName}</span>
                        <span onClick={() => this.handleClose('#')}>退出</span>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span="4" className="breadcrumb_title">
                        首页
                    </Col>
                    <Col span="20" className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span  className="weather_detail">{this.state.dayPicture}{this.state.weather}</span>
                    </Col>
                </Row>
            </div>
        );
    }
}