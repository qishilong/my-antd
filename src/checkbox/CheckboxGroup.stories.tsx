import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Checkbox from './index';

const CheckboxGroup = Checkbox.Group;

export default {
  title: 'Example/CheckboxGroup',
  component: CheckboxGroup,
  argTypes: {
  },
} as ComponentMeta<typeof CheckboxGroup>;

const Template: ComponentStory<typeof CheckboxGroup> = (args) => <CheckboxGroup {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: [
    <Checkbox value="1" key="1">选项1</Checkbox>,
    <Checkbox value="2" key="2">选项2</Checkbox>,
    <Checkbox value="3" key="3">选项3</Checkbox>
  ]
};

export const defaultValue = Template.bind({});
defaultValue.args = {
  defaultValue: ['2'],
  children: [
    <Checkbox value="1" key="1">选项1</Checkbox>,
    <Checkbox value="2" key="2">选项2</Checkbox>,
    <Checkbox value="3" key="3">选项3</Checkbox>
  ]
};

export const ContextDemo = () => {
  return (<CheckboxGroup defaultValue={['2']}>
  <span><Checkbox value="1" key="1">选项1</Checkbox></span>
  <span><Checkbox value="2" key="2">选项2</Checkbox></span>
  <Checkbox value="3" key="3">选项3</Checkbox>
  </CheckboxGroup>)
}
