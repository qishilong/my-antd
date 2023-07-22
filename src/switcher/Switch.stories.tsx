import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

import Switch from './index';
import Button from '../button/index';

export default {
  title: 'Example/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};

const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};

export const Basic: React.FC = () => <Switch defaultChecked onChange={onChange} />;

export const Disabled: React.FC = () => {
  const [disabled, setDisabled] = useState(true);

  const toggle = () => {
    setDisabled(!disabled);
  };

  return (
    <>
      <Switch disabled={disabled} defaultChecked />
      <br /><br />
      <Button type="primary" onClick={toggle}>
        Toggle disabled
      </Button>
    </>
  );
};

export const CheckedChild: React.FC = () => (
  <>
    <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked />
    <br />
    <Switch checkedChildren="1" unCheckedChildren="0" />
    <br />
    <Switch
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      defaultChecked
    />
  </>
);