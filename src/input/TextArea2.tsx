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
}

const hiddenStyle: CSSProperties = {
  visibility: 'hidden',
  position: 'absolute',
  zIndex: '-1000',
  top: '-1000px',
  overflowY: 'hidden',
  left: 0,
  right: 0,
};

const TextArea = (props: inputProps) => {
  const {
    defaultValue,
    value: pvalue,
    onChange,
    children,
    prefix,
    showCount = false,
    autoSize = false,
    ...others
  } = props;

  const [value, setValue] = useState(defaultValue || pvalue || '');
  const [height, setHeight] = useState(0);
  const textareaRef = useRef(null);
  const fakeRef = useRef(null);

  React.useEffect(() => {
    if (typeof autoSize === 'object') {
      const { minRows, maxRows } = autoSize;
      const fakeNode = fakeRef.current;
      fakeNode.setAttribute('rows', minRows);
      const minHeight = fakeNode.clientHeight;

      fakeNode.setAttribute('rows', maxRows);
      const maxHeight = fakeNode.clientHeight;

      textareaRef.current.setAttribute('style',
        `min-height: ${minHeight}px; max-height: ${maxHeight}px;`
      )

      fakeNode.setAttribute('rows', 1);
    }
  }, [])

  useEffect(() => {
    if ('value' in props) {
      setValue(pvalue);
    }
  }, [pvalue])

  const cls = classNames({
    'ant-input': true,
  })

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!('value' in props)) {
      const value = e.target.value;
      setValue(value);

      if (autoSize) {
        const fakeNode = fakeRef.current;
        fakeNode.value = value;
        const height = fakeNode.scrollHeight;
        setHeight(height);
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

  return <>
    {textarea}
    {
      autoSize ? <textarea className={cls} ref={fakeRef} data-fade style={hiddenStyle} /> : null
    }
  </>
}

export default TextArea;