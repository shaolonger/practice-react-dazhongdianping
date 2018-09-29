import { fetch } from 'whatwg-fetch';
import 'es6-promise';

export function getData() {
    const url = 'http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=top&count=10';
    const result = fetch(url, {
        // credentials: 'include',
        header: {
            'Accept': 'application/json, text/plain, */*',
            'Access-Control-Allow-Origin': '*'
        }
    });
    result
        .then(res => res.json())
        .then(json => console.log('fetch', json));
}
