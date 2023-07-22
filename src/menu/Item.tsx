import React, { ReactNode, CSSProperties } from 'react';
import classNames from 'classnames';
import MenuContext from './MenuContext';

import './index.scss';

export interface itemProps extends React.HTMLAttributes<HTMLElement> {
    className?: string;
    prefix?: string;
    key?: string;
    id?: string;
    icon?: ReactNode;
    children?: ReactNode;
    style?: CSSProperties;
}

const Item = (props: itemProps) => {
    const {className,prefix='ant-', id, icon, children, style, ...others} = props;
    const { level, inlineIndent, selectedKeys, onSelect } = React.useContext(MenuContext);

    const selected = selectedKeys.indexOf(id) !== -1;

    const cls = classNames({
        [`${prefix}menu-item`]: true,
        [`${prefix}menu-item-selected`]: selected,
        [className as string]: !!className
    });
    const iconEle = React.isValidElement(icon) ? React.cloneElement(icon, {
        className: `${prefix}menu-item-icon`
    }) : null;

    const itemStyle = {
        paddingLeft: level * inlineIndent,
        ...style
    };

    const handleClick = (e) => {
        e.stopPropagation();
        onSelect?.(id);
    }

    return <li {...others} className={cls}  style={itemStyle} onClick={handleClick}>
        {iconEle}
        <span className={`${prefix}menu-title-content`}>{children}</span>
    </li>;
}

export default Item;