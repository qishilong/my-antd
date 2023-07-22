import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tooltip from './index';
import Button from '../button';

export default {
  title: 'Example/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  // type: 'primary',
  children: 'Tooltip',
};

export const Basic = () => {
  return <>
      <Tooltip title="prompt text">
    <span>Tooltip will show on mouse enter.</span>
  </Tooltip>
  </>
}

const text = <span>prompt text</span>;

const buttonWidth = 70;

export const Placement: React.FC = () => (
  <div className="demo">
    <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
      <Tooltip placement="topLeft" title={text}>
        <Button>TL</Button>
      </Tooltip>
      <Tooltip placement="top" title={text}>
        <Button>Top</Button>
      </Tooltip>
      <Tooltip placement="topRight" title={text}>
        <Button>TR</Button>
      </Tooltip>
    </div>
    <div style={{ width: buttonWidth, float: 'left' }}>
      <Tooltip placement="leftTop" title={text}>
        <Button>LT</Button>
      </Tooltip>
      <Tooltip placement="left" title={text}>
        <Button>Left</Button>
      </Tooltip>
      <Tooltip placement="leftBottom" title={text}>
        <Button>LB</Button>
      </Tooltip>
    </div>
    <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 + 24 }}>
      <Tooltip placement="rightTop" title={text}>
        <Button>RT</Button>
      </Tooltip>
      <Tooltip placement="right" title={text}>
        <Button>Right</Button>
      </Tooltip>
      <Tooltip placement="rightBottom" title={text}>
        <Button>RB</Button>
      </Tooltip>
    </div>
    <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
      <Tooltip placement="bottomLeft" title={text}>
        <Button>BL</Button>
      </Tooltip>
      <Tooltip placement="bottom" title={text}>
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip placement="bottomRight" title={text}>
        <Button>BR</Button>
      </Tooltip>
    </div>
  </div>
);

export const PointerAtCenter: React.FC = () => (
  <>
    <Tooltip placement="topLeft" title="Prompt Text">
      <Button>Align edge / 边缘对齐</Button>
    </Tooltip>
    <br/><br/>
    <Tooltip placement="topLeft" title="Prompt Text" arrowPointAtCenter>
      <Button>Arrow points to center / 箭头指向中心</Button>
    </Tooltip>
  </>
);

export const Adjust: React.FC = () => (
  <>
    <Tooltip placement="leftTop" 
      title={<div style={{width: 200, height: 200}}>"Prompt Text"</div>}
    >
      <Button>左上角 to 右上角</Button>
    </Tooltip>
    <br/><br/>
    <Tooltip placement="bottomRight" 
      title={<div style={{width: 200, height: 200}}>"Prompt Text"</div>}
      >
      <Button>右下角 to 右上角</Button>
    </Tooltip>
    <br/><br/>
    <Tooltip placement="top" 
      title={<div style={{width: 300, height: 200}}>"Prompt Text"</div>}
      >
      <Button>top 变成贴边</Button>
    </Tooltip>
  </>
);
