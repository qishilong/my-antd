import React, { ReactNode, CSSProperties, useState, Children } from 'react';
import classNames from 'classnames';

import MenuContext from './MenuContext';
import Item from './Item';

import './index.scss';

export interface menuProps {
    className?: string;
    prefix?: string;
    mode?: 'vertical' | 'horizontal' | 'inline';
    theme?: 'light' | 'dark';
    multiple?: boolean;
    items?: Array<object>;
    defaultSelectedKeys?: Array<string>;
    selectedKeys?: Array<string>;
    defaultOpenKeys?: Array<string>;
    openKeys?: Array<string>;
    inlineIndent?: number;
    onSelect?: Function;
    children?: ReactNode;
    style?: CSSProperties;
}

const Menu = React.forwardRef<HTMLUListElement, menuProps>((props, ref) => {
    const {
        prefix = 'ant-',
        className,
        children: pchildren,
        style,
        defaultSelectedKeys,
        selectedKeys: pselectedKeys,
        defaultOpenKeys,
        openKeys: popenKeys,
        mode = 'vertical',
        theme = 'light',
        inlineIndent = 24,
        multiple = false,
        onSelect,
        items,
        ...others
    } = props;

    const [selectedKeys, setSelectedKeys] = useState(pselectedKeys || defaultSelectedKeys || []);
    const [openKeys, setOpenKeys] = useState(popenKeys || defaultOpenKeys || []);

    React.useEffect(() => {
        if (pselectedKeys) {
            setSelectedKeys(pselectedKeys);
        }
    }, [pselectedKeys]);

    React.useEffect(() => {
        if (popenKeys) {
            setSelectedKeys(popenKeys);
        }
    }, [popenKeys]);

    const cls = classNames({
        [`${prefix}menu`]: true,
        [`${prefix}menu-root`]: true,
        [`${prefix}menu-${mode}`]: true,
        [`${prefix}menu-${theme}`]: true,
        [className as string]: !!className
    })

    const handleOpenChange = (key) => {
        const newOpenKeys = [...openKeys];
        if (openKeys.indexOf(key) === -1) {
            newOpenKeys.push(key)
        } else {
            newOpenKeys.splice(openKeys.indexOf(key), 1)
        }
        setOpenKeys(newOpenKeys);

    };

    const handleSelect = (key) => {
        if (multiple) {

        } else {
            setSelectedKeys([key]);
            onSelect?.([key]);
        }
    }

    const newChildren = pchildren ? pchildren : items?.map((i:any) => (
        <Item prefix={prefix} id={i.key} key={i.key} icon={i.icon}>{i.label}</Item>
    ))

    return (<MenuContext.Provider value={{
        inlineIndent,
        mode,
        level: 1,
        selectedKeys,
        openKeys,
        onSelect: handleSelect,
        onOpenChange: handleOpenChange,
    }}>
        <ul {...others} className={cls} style={style} ref={ref}>{newChildren}</ul>
    </MenuContext.Provider>)
})

export default Menu;