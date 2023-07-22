import React, { useState, Children, useEffect } from 'react';
import classNames from 'classnames';
import Checkbox, { CheckboxProps, CheckboxChangeEvent } from './Checkbox';

import CheckboxContext from './context';

import './index.scss';

export interface GroupProps {
  /**
   * 默认数值
   */
  defaultValue?: Array<string>;
  /**
   * 数值
   */
  value?: Array<string>;
  onChange?: Function;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 回调事件
   */
  className?: string;
  children?: React.ReactNode;
  style?: object;
}

const Group = (props: GroupProps) => {
  const {disabled, children, onChange, ...others} = props;

  const [value, setValue] = useState(props.defaultValue || props.value || []);

  useEffect(() => {
    if ('value' in props) {
      setValue(props.value);
    }
  }, [props.value])

  const cls = classNames({
    'ant-checkbox-group': true,
  });

  const handleChange = (e: CheckboxChangeEvent) => {
    const targetValue = e.target.value;
    const idx = value.indexOf(targetValue);
    const checked = e.target.checked;

    let nvalue = value;
    if (idx === -1 && !checked) {
      nvalue = value.concat([targetValue]);
      setValue(nvalue);
    } else if (idx > -1 && checked) {
      value.splice(idx, 1);
      nvalue = value.concat([]);
      setValue(nvalue);
    }
    
    onChange?.(nvalue);
  };

  return (
    <span className={cls} >
      <CheckboxContext.Provider value={{
        onChange: handleChange,
        disabled,
        value,
      }}>
      {children}
      </CheckboxContext.Provider>
    </span>
  );
};

export default Group;