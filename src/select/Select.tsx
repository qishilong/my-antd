import React, { useEffect, ReactNode, CSSProperties, ReactElement, useState } from 'react';
import classNames from 'classnames';
import { DownOutlined } from '@ant-design/icons';

import { Popup } from '../overlay';
import Menu from '../menu';

import './index.scss';

export const Option = (props) => {
  return <Menu.Item {...props} />
}

export interface selectProps {
  className?: string;
  defaultValue?: string;
  value?: string;
  onChange?: (key: string) => void;
  size?: 'small' | 'medium' | 'large';
  children?: any;
  multiple?: boolean;
  showArrow?: boolean;
  style?: CSSProperties;
}

const Select = (props: selectProps) => {
  const { className,
    size = 'medium', children, style,
    multiple,
    showArrow,
    defaultValue,
    value: pvalue,
    onChange,
    ...others } = props;

  const [value, setValue] = useState(defaultValue || pvalue || '');
  const [detailValue, setDetailValue] = useState({title: value});

  useEffect(() => {
    if ('value' in props) {
      setValue(pvalue);
    }
  }, [pvalue]);

  let options = [];

  const content = React.Children.map(children, child => {
    const {value} = child?.props;
    options.push({
      ...child?.props,
      title: child?.props?.children
    });

    return <Menu.Item {...child?.props} key={value} id={value} />
  })

  const cls = classNames({
    'ant-select': true,
    'ant-select-single': !multiple,
    'ant-select-show-arrow': showArrow,
  });

  const trigger = (
    <div className={cls} style={style}>
      <div className="ant-select-selector">
        <span className="ant-select-selection-search">
          <input
            type="search"
            autoComplete="off"
            className="ant-select-selection-search-input"
            role="combobox"
            aria-haspopup="listbox"
            aria-autocomplete="list"
            unselectable="on"
          />
        </span>
        <span className="ant-select-selection-item" title={detailValue.title}>{detailValue.title}</span>
      </div>
      <span className="ant-select-arrow" unselectable="on" aria-hidden="true"
      >
        <DownOutlined className="ant-select-suffix" />
      </span>
    </div>);



  const handleSelect = (keys) => {
    const key = keys[0];
    if (key) {
      const item = options.find(i => i.value === key);
      if (item) {
        setDetailValue(item);
      }
      setValue(key);
      onChange?.(key);
    }
  }

  return (<Popup
    {...others}
    triggerType='click'
    placement={'bottomLeft'}
    className={cls}
    style={style}
    trigger={trigger}
  >
    <Menu mode='inline' onSelect={handleSelect} style={{width: style?.width}}>
      {content}
    </Menu>
  </Popup>);
}

export default Select;