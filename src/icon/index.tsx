import React, { ReactNode } from 'react';
import classNames from 'classnames';

import './index.scss';

export interface iconProps extends React.HTMLAttributes<HTMLButtonElement> {
    className?: string;
    type?: 'fixed' | 'copy' | 'close';
    size?: number;
}

const svgMap = {
    fixed: <svg  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1440"><path d="M334.72 612.16L127.36 404.736l85.12-85.184L390.016 391.04l275.968-214.4-72.32-72.32L678.912 19.2l82.944 82.88 0.192-0.128L928 267.84l-0.192 0.256 82.944 82.944-85.12 85.184-72.32-72.256L638.848 640l71.488 177.408-85.12 85.184-207.488-207.36-255.36 255.296-82.944-82.944 255.36-255.36z" fill="#262626" p-id="1441"></path></svg>,
    copy: <svg viewBox="64 64 896 896" focusable="false" data-icon="copy" fill="currentColor" aria-hidden="true"><path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"></path></svg>,
    close: <svg viewBox="0 0 1045 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1187"><path d="M282.517333 213.376l-45.354666 45.162667L489.472 512 237.162667 765.461333l45.354666 45.162667L534.613333 557.354667l252.096 253.269333 45.354667-45.162667-252.288-253.44 252.288-253.482666-45.354667-45.162667L534.613333 466.624l-252.096-253.226667z" p-id="1188"></path></svg>,

}

const Icon = (props: iconProps) => {
    const {className, type = 'fixed', size = 32, ...others} = props;

    const cls = classNames({
        'ant-icon': true,
        [className as string]: !!className
    });

    const style: React.CSSProperties = {...props.style};
    if (size) {
        style.width = size;
        style.height = size;
    }

    if (type in svgMap) {
        const svg = svgMap[type];
        return React.cloneElement(svg, {
            ...others,
            className: cls,
            style,
        })
    }

    return <i/>;
}

export default Icon;