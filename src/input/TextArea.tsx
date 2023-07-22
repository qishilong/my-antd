import React, { useEffect, useState, useRef, ReactNode, CSSProperties } from 'react';
import classNames from 'classnames';

import './index.scss';

type autoSizeType = {
  minRows: number;
  maxRows: number;
}

export interface inputProps {
  defaultValue?: string;
  value?: string;
  onChange?: (event: React.FormEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  maxLength?: number;
  showCount?: boolean;
  autoSize?: boolean | autoSizeType;
  prefix?: ReactNode;
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
  status?: 'error' | 'warning',
}

const TextArea = (props: inputProps) => {
  const {
    defaultValue,
    value: pvalue,
    onChange,
    children,
    prefix,
    showCount = false,
    autoSize = false,
    status,
    ...others
  } = props;

  const [value, setValue] = useState(defaultValue || pvalue || '');
  const [height, setHeight] = useState(0);
  const textareaRef = useRef(null);

  React.useEffect(() => {

    if (typeof autoSize === 'object') {
      const { minRows, maxRows } = autoSize;
      const styles = window.getComputedStyle(textareaRef.current)
      const height = parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom) +
        parseFloat(styles.borderTopWidth) + parseFloat(styles.borderBottomWidth);

      const minHeight = minRows * parseFloat(styles.lineHeight);
      const maxHeight = maxRows * parseFloat(styles.lineHeight);

      textareaRef.current.setAttribute('style',
        `min-height: ${minHeight}px; max-height: ${maxHeight}px;`
      )
    }

  }, [])

  useEffect(() => {
    if ('value' in props) {
      if (typeof pvalue === 'undefined') {
        setValue('');
      } else {
        setValue(pvalue);
      }
    }
  }, [pvalue])

  const cls = classNames({
    'ant-input': true,
    [`ant-input-status-${status}`]: status,
  })

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!('value' in props)) {
      const value = e.target.value;
      setValue(value);

      if (autoSize) {
        let line = value.split('\n').length;
        if (line < 2) line = 2;

        const styles = window.getComputedStyle(textareaRef.current)
        const height = parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom) +
          parseFloat(styles.borderTopWidth) + parseFloat(styles.borderBottomWidth);

        const contentHeight = line * parseFloat(styles.lineHeight);

        const totalHeight = height + contentHeight;
        setHeight(totalHeight);
      }
    }
    onChange?.(e);
  }

  const wrapperCls = classNames({
    'ant-input-textarea': true,
    'ant-input-textarea-show-count': showCount,
  });

  const style: CSSProperties = {};
  if (height) {
    style.height = height;
  }

  const textarea = <textarea
    {...others}
    className={cls}
    value={value}
    onChange={handleChange}
    ref={textareaRef}
    style={style}
  />;

  if (props.showCount) {
    return <span className={wrapperCls} data-count={`${value.length} / ${props.maxLength}`}>
      {textarea}
    </span>
  }

  return textarea;
}

export default TextArea;