import React, { useEffect, useState, ReactNode, CSSProperties } from 'react';
import classNames from 'classnames';

import './index.scss';

export interface inputProps {
  defaultValue?: string;
  value?: string;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  placeholder?: string;
  maxLength?: number;
  prefix?: ReactNode;
  /**
   * 按钮大小
   */
  size?: 'small' | 'medium' | 'large';
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
  status?: 'error' | 'warning',
}

const Input = (props: inputProps) => {
  const {
    size = 'medium',
    defaultValue,
    value: pvalue,
    onChange,
    children,
    prefix,
    status,
    ...others
  } = props;

  const [value, setValue] = useState(defaultValue || pvalue || '');

  useEffect(() => {
    if ('value' in props) {
      if (typeof pvalue === 'undefined') {
        setValue('');
      } else {
        setValue(pvalue);
      }
    }
  }, [pvalue]);

  const cls = classNames({
    'ant-input': true,
    'ant-input-lg': size === 'large',
    'ant-input-sm': size === 'small',
    [`ant-input-status-${status}`]: status,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!('value' in props)) {
      setValue(e.target.value);
    }
    onChange?.(e);
  };

  const wrapperCls = classNames({
    'ant-input-affix-wrapper': true,
    'ant-input-affix-wrapper-lg': size === 'large',
    'ant-input-affix-wrapper-sm': size === 'small',
  });

  const input = <input {...others} className={cls} value={value} onChange={handleChange} />;

  if (props.maxLength || prefix) {
    return <span className={wrapperCls}>
      {prefix ? <span className="ant-input-prefix">
        {prefix}
      </span> : null}
      {input}
      {props.maxLength ? <span className="ant-input-suffix">
        <span className="ant-input-show-count-suffix">{value.length} / {props.maxLength}</span>
      </span> : null}
    </span>;
  }

  return input;
};

export default Input;