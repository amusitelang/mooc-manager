import JSONP from 'jsonp';
import axios from 'axios';
import { Modal } from 'antd';

export default class Axios{
    static jsonp(options) {
        // 封装的好处 可以控制错误信息报错拦截，方便处理
        return new Promise((resolve, reject) => {
            JSONP(options.url, {
                param: 'callback',  // 跨域，经过callback进行接收回调
            }, function(err,response) {

            })
        })
    }
    static AXIOS(options) {
        return new Promise((resolve, reject) => {
            axios.get(`https://free-api.heweather.net/s6/weather/forecast?location=${options.location}&key=${options.key}`).then((res) => {
                // console.log(res);
                resolve(res);
            }).catch((err) => {
                reject(err);
            })
        })
    }

    static ajax(options) {
        let baseAPI = 'https://www.easy-mock.com/mock/5c23563ac5f96261ca1d18cb/mockapi';
        return new Promise((resolve, reject) => {
            axios({
                url: options.url,
                method: 'get',
                baseURL: baseAPI,
                timeout: 5000,
                params: (options.data && options.data.params) || ''
            }).then((response) => {
                if (response.status === 200) {
                    let res = response.data;
                    if (res.code === 200) {
                        resolve(res);
                    } else {
                        Modal.info({
                            title: "提示",
                            content: res.msg,
                        })
                    }
                } else {
                    reject(response.data);
                }
            })
        });
    }
}