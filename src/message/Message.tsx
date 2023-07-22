import React, { ReactNode, CSSProperties, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { CheckCircleFilled, InfoCircleFilled, CloseCircleFilled, ExclamationCircleFilled, LoadingOutlined } from '@ant-design/icons';

import Overlay from '../overlay';

import './index.scss';

export type NoticeType = 'info' | 'success' | 'error' | 'warning' | 'loading';
export interface MessageInnerProps {
  className?: string;
  type?: NoticeType;
  children?: ReactNode;
  style?: CSSProperties;
}

export const MessageInner = (props) => {
  const { type = 'info', content, children } = props;

  const iconCls = classNames({
    'ant-message-custom-content': true,
    [`ant-message-${type}`]: type,
  });

  let icon = <InfoCircleFilled />;

  switch (type) {
    case 'success':
      icon = <CheckCircleFilled />;
      break;
    case 'error':
      icon = <CloseCircleFilled />;
      break;
    case 'warning':
      icon = <ExclamationCircleFilled />;
      break;
    case 'loading':
      icon = <LoadingOutlined />;
      break;
  }

  return (
    <div>
      <div className="ant-message-notice">
        <div className="ant-message-notice-content">
          <div className={iconCls}>
            {icon}
            {content || children}
          </div>
        </div>
      </div>
    </div>
  );
};


export interface messageProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  type?: 'normal' | 'primary' | 'dashed' | 'link' | 'text';
  size?: 'small' | 'medium' | 'large';
  children?: ReactNode;
  style?: CSSProperties;
}

const Message = (props: messageProps | any) => {
  const { dataSource, ...others } = props;

  const [list, setList] = useState(dataSource);

  useEffect(() => {
    setList(dataSource);
  }, [dataSource.length]);

  list.forEach(i => {
    if (!i.timer) {
      i.timer = setTimeout(() => {
        const idx = list.indexOf(i);
        if (idx > -1) {
          // list.splice(idx, 1);
          i.hide = true;
          setList([...list]);
        }
      }, i.duration * 1000);
    }
  });

  return <div className="ant-message">
    {list.map(item => item.hide !== true && <MessageInner {...item} />)}
  </div>;
};

let messageMountRoot = null;
let messageIndex = 0;
const messageList = [];

const callMessage = (type, content, duration) => {
  if (!messageMountRoot) {
    messageMountRoot = document.createElement('div');
    document.body.appendChild(messageMountRoot);
  }

  messageList.push({
    key: ++messageIndex,
    type,
    content,
    duration
  });

  ReactDOM.render(<Message dataSource={messageList} />, messageMountRoot);
};

export default {
  success: (content, duration = 3) => callMessage('success', content, duration),
  warning: (content, duration = 3) => callMessage('warning', content, duration),
  loading: (content, duration = 3) => callMessage('loading', content, duration),
  info: (content, duration = 3) => callMessage('info', content, duration),
  error: (content, duration = 3) => callMessage('success', content, duration),
} as any;

