import React, { useState, useEffect, useRef, useContext } from 'react';
import classNames from 'classnames';

import CheckboxContext from './context';

import './index.scss';

export interface CheckboxProps {
  prefixCls?: string;
  /**
   * 默认选中
   */
  defaultChecked?: boolean;
  /**
   * 是否选中
   */
  checked?: boolean;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 数值
   */
  value?: string;
  /**
   * 回调事件
   */
  onChange?: Function;
  className?: string;
  children?: React.ReactNode;
  style?: object;
}

export interface CheckboxChangeEventTarget {
  value: string;
  checked: boolean;
}
export interface CheckboxChangeEvent {
  target: CheckboxChangeEventTarget
}

const Checkbox = (props: CheckboxProps) => {
  const { prefixCls = 'ant-', onChange, disabled, value, ...others } = props;

  const [checked, setCheck] = useState(props.defaultChecked || false);
  const inputEl = useRef(null);
  const {onChange: conChange, disabled: cdisabled, value: values} = useContext(CheckboxContext);

  useEffect(() => {
    if ('checked' in props) {
      setCheck(props.checked || false);
    }
  }, [props.checked])

  useEffect(() => {
    if (values && 'value' in props) {
      setCheck(values.indexOf(props.value) > -1);
    }
  }, [values])

  const handleClick = (e) => {
    if (disabled || cdisabled) {
      return;
    }

    const state = !checked;
    if (!('checked' in props)) {
      setCheck(state);
    }

    if (typeof onChange === 'function') {
        e.target = inputEl.current;
        e.target.checked = state;
        onChange(e);
    }
    if (typeof conChange === 'function') {
        e.target = inputEl.current;
        conChange(e);
    }
  }

  const handleChange = () => {
  }

  const cls = classNames({
    [`${prefixCls}checkbox`]: true,
    [`${prefixCls}checkbox`]: true,
    [`${prefixCls}checkbox-checked`]: checked,
    [`${prefixCls}checkbox-disabled`]: props.disabled,
  });

  const wrapperCls = classNames({
    [`${prefixCls}checkbox-wrapper`]: true,
    [`${prefixCls}checkbox-wrapper-disabled`]: props.disabled,
  });

  return (
    <span className={wrapperCls} onClick={handleClick}>
      <span className={cls} >
        <input type="checkbox" ref={inputEl} value={value} checked={checked} onChange={handleChange} />
        <span className="ant-checkbox-inner"></span>
      </span>
      <span>{props.children}</span>
    </span>
  );
};

export default Checkbox;