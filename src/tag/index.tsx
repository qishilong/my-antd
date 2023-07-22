import React, { useState } from 'react';
import classNames from 'classnames';
import { CloseOutlined } from '@ant-design/icons';
// import Icon from '../icon/index';

import './index.scss';

interface tagProps extends React.HTMLAttributes<HTMLButtonElement> {
    className?: string;
    closable?: boolean;
    color?: string;
    visible?: boolean;
    onClose?: Function;
}

const Tag = (props: tagProps) => {
    const {
        className,
        children,
        closable,
        color,
        onClose,
        style: pstyle,
        ...others } = props;
    const [visible, setVisible] = useState(true);

    React.useEffect(() => {
        if ('visible' in props && typeof props.visible !== 'undefined') {
            setVisible(props.visible);
        }
    }, [props.visible])

    const customColor = color && color.match(/^#/);
    const cls = classNames({
        'ant-tag': true,
        [`ant-tag-${color}`]: color && !customColor,
        [className as string]: !!className
    });

    const style: React.CSSProperties = { ...pstyle };
    if (customColor) {
        style.backgroundColor = color;
    }

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        typeof onClose === 'function' && onClose(e);

        if (e.defaultPrevented) {
            return;
        }
        if (!('visible' in props)) {
            setVisible(false);
        }
    }

    if (!visible) {
        return null;
    }

    return (<span {...others} className={cls} style={style}>
        {children}
        {closable ? 
        // @ts-ignore
        <CloseOutlined onClick={handleClick} /> : null}
    </span>);
}

export default Tag;