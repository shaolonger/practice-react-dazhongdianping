import { fetch } from 'whatwg-fetch';
import 'es6-promise';

// 将参数对象拼接为字符串
function obj2params(obj) {
    let result = '';
    let item;
    for (item in obj) {
        result += '&' + item + '=' + encodeURIComponent(obj[item]);
    }
    return result && result.slice(1);
}

export default function post(url, paramsObj) {
    return fetch(url, {
        method: 'POST',
        credentials: 'include',
        header: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: obj2params(paramsObj)
    });
} 
