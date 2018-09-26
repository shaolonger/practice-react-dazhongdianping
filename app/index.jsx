import React from 'react';
import { render } from 'react-dom';

import './static/css/common.less';

class Hello extends React.Component {
    render() {
        const css = {
            marginTop: '60px',
            fontSize: '30px',
            color: 'red'
        };
        return (
            <div style={css}>hello me..</div>
        );
    }
}

render(
    <Hello />,
    document.getElementById('root')
);
