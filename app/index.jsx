import React from 'react';
import { render } from 'react-dom';

import './static/css/common.less';

class Hello extends React.Component {
    render() {
        return (
            <div>hello world</div>
        );
    }
}

render(
    <Hello />,
    document.getElementById('root')
);
