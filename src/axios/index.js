import JSONP from 'jsonp';
import axios from 'axios';

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
}