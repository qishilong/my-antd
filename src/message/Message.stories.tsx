import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  { MessageInner } from './Message';

import message from './index';

export default {
  title: 'Example/Message',
  component: MessageInner,
} as ComponentMeta<typeof MessageInner>;

export const MessageInnerDemo = () => {
  return <>
    <MessageInner type="success">Primary MessageInner</MessageInner>
  </>
}

const info = () => {
  message.info('This is a normal message');
};

export const App: React.FC = () => (
  <button onClick={info}>
    Display normal message
  </button>
);
