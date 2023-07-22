import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Select from './index';

const { Option } = Select;

export default {
  title: 'Example/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

export const Basic = () => {
  return <>
    <Select style={{width: 120}} defaultValue='jack'>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
      <Option value="asdf">代尔福</Option>
    </Select>
  </>
}
