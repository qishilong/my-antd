import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

import Progress from './index';
import Button from '../button';

export default {
  title: 'Example/Progress',
  component: Progress,
} as ComponentMeta<typeof Progress>;

const Template: ComponentStory<typeof Progress> = (args) => <Progress {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  percent: 30
};

export const Basic = () => {
  return <>
    <Progress percent={30}>Primary Progress</Progress>
    <br/>
    <Progress percent={70} status="exception" />

  </>
}


export const Dynamic: React.FC = () => {
  const [percent, setPercent] = React.useState(0);

  const increase = () => {
    let newPercent = percent + 10;
    if (newPercent > 100) {
      newPercent = 100;
    }
    setPercent(newPercent);
  };

  const decline = () => {
    let newPercent = percent - 10;
    if (newPercent < 0) {
      newPercent = 0;
    }
    setPercent(newPercent);
  };

  return (
    <>
      <Progress percent={percent} />
      <br /><br />

      <MinusOutlined onClick={decline} />
      <PlusOutlined onClick={increase} />
    </>
  );
};

export const Circle = () => {
  return <>
    <Progress type="circle" percent={80} />
  </>
}

export const DynamicCircle: React.FC = () => {
  const [percent, setPercent] = React.useState(0);

  const increase = () => {
    let newPercent = percent + 10;
    if (newPercent > 100) {
      newPercent = 100;
    }
    setPercent(newPercent);
  };

  const decline = () => {
    let newPercent = percent - 10;
    if (newPercent < 0) {
      newPercent = 0;
    }
    setPercent(newPercent);
  };

  return (
    <>
      <Progress percent={percent} type="circle"/>
      <br /><br />

      <MinusOutlined onClick={decline} />
      <PlusOutlined onClick={increase} />
    </>
  );
};