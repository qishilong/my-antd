import React, { ReactNode, CSSProperties, useState, useEffect } from 'react';
import classNames from 'classnames';

import './index.scss';

export interface switchProps {
    className?: string;
    defaultChecked?: boolean;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (checked: boolean) => void;
    checkedChildren?: ReactNode;
    unCheckedChildren?: ReactNode;
    size?: 'small' | 'medium';
    children?: ReactNode;
    style?: CSSProperties;
}

const Switch = (props: switchProps) => {
    const { className, disabled, defaultChecked, checked: pchecked, children, style,
        checkedChildren,
        unCheckedChildren,
        onChange,
        ...others } = props;

    const [checked, setChecked] = useState(defaultChecked || pchecked || false);

    useEffect(() => {
        if ('checked' in props) {
            setChecked(pchecked);
        }
    }, [pchecked])

    const handleClick = () => {
        if (!('checked' in props)) {
            setChecked(!checked);
        }

        onChange?.(!checked);
    }
    const cls = classNames({
        'ant-switch': true,
        'ant-switch-checked': checked,
        'ant-switch-disabled': disabled,
        [className as string]: !!className
    })

    return (<button
        {...others}
        type="button"
        role="switch"
        aria-checked="true"
        className={cls}
        onClick={handleClick}
    >
        <div className="ant-switch-handle"></div>
        <span className="ant-switch-inner">{
            checked ? checkedChildren : unCheckedChildren
        }</span>
    </button>)
}

export default Switch;