import { fetch } from 'whatwg-fetch';
import 'es6-promise';

export default function get(url) {
    return fetch(url, {
        // credentials: 'include',
        header: {
            'Accept': 'application/json, text/plain, */*',
            'Access-Control-Allow-Origin': '*'
        }
    });
}
