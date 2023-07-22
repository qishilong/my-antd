import React, { useState, useRef } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Overlay from './index';
import Button from '../button';

const { Popup } = Overlay;

export default {
  title: 'Example/Overlay',
  component: Overlay,
} as ComponentMeta<typeof Overlay>;

const Template: ComponentStory<typeof Overlay> = (args) => <Overlay {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: <div style={{
    border: '1px solid black',
    width: 300,
    height: 300
  }}>
    Content
  </div>,
};

export const Basic = () => {
  return <>
    <Overlay onVisibleChange={e => console.log(e)}>
      <div style={{
        border: '1px solid black',
        width: 300,
        height: 300
      }}>
        Primary Overlay
      </div>
    </Overlay>
  </>
}

export const UnderControl = () => {
  const [visible, setVisible] = useState(true);
  const buttonRef = useRef(null);
  return <>
    <Button onClick={() => setVisible(true)} ref={buttonRef}>click</Button>
    <Overlay visible={visible} onVisibleChange={v => setVisible(v)}
      target={() => buttonRef.current}
    >
      <div style={{
        border: '1px solid black',
        width: 300,
        height: 300
      }}>
        Under Control Overlay
      </div>
    </Overlay>
  </>
}

export const Points = () => {
  const [visible, setVisible] = useState(true);
  const buttonRef = useRef(null);
  return <>
    <Button onClick={() => setVisible(true)} ref={buttonRef}>click</Button>
    <Overlay visible={visible} onVisibleChange={v => setVisible(v)}
      target={() => buttonRef.current}
      points={['tl', 'tl']}
    >
      <div style={{
        border: '1px solid black',
        width: 300,
        height: 300
      }}>
        Points
      </div>
    </Overlay>
  </>
}

// export const AllPoints = () => {
//   const [visible, setVisible] = useState(true);
//   const buttonRef = useRef(null);
//   const pointList = ['tl', 'tc', 'tr', 'cl', 'cc', 'cr', 'bl', 'bc', 'br'];
//   return <>
//     <div style={{ width: 200, height: 200 }} onClick={() => setVisible(true)} ref={buttonRef}>click</div>
//     {
//       pointList.map(point2 => {
//         return pointList.map(point => (
//           <Overlay visible={true} onVisibleChange={v => setVisible(v)}
//             target={() => buttonRef.current}
//             points={[point as any, point2 as any]}
//           >
//             <div style={{
//               border: '1px solid black',
//             }}>
//               {point}{point2}
//             </div>
//           </Overlay>
//         ))
//       })
//     }
//   </>
// }

export const Placement = () => {
  const ref1 = useRef(null);
  const topLeft = <Button ref={ref1}>topLeft</Button>;
  const top = <Button>top</Button>;
  const topRight = <Button>topRight</Button>;
  const leftTop = <Button>leftTop</Button>;
  const left = <Button>left</Button>;
  const leftBottom = <Button>leftBottom</Button>;
  const rightTop = <Button>rightTop</Button>;
  const right = <Button>right</Button>;
  const rightBottom = <Button>rightBottom</Button>;
  const bottomLeft = <Button>bottomLeft</Button>;
  const bottom = <Button>bottom</Button>;
  const bottomRight = <Button>bottomRight</Button>;

  return <div style={{ paddingLeft: 200 }}>
    <div style={{ marginLeft: 75 }}>
      <Popup trigger={topLeft} placement="topLeft">topLeft</Popup>
      <Popup trigger={top} placement="top">top</Popup>
      <Popup trigger={topRight} placement="topRight">topRight</Popup>
    </div>
    <div style={{ width: 80, float: "left" }}>
      <Popup trigger={leftTop} placement="leftTop">leftTop</Popup>
      <Popup trigger={left} placement="left">left</Popup>
      <Popup trigger={leftBottom} placement="leftBottom">leftBottom</Popup>
    </div>
    <div style={{ width: 80, marginLeft: 290 }}>
      <Popup trigger={rightTop} placement="rightTop">rightTop</Popup>
      <Popup trigger={right} placement="right">right</Popup>
      <Popup trigger={rightBottom} placement="rightBottom">rightBottom</Popup>
    </div>
    <div style={{ marginLeft: 75 }}>
      <Popup trigger={bottomLeft} placement="bottomLeft">bottomLeft</Popup>
      <Popup trigger={bottom} placement="bottom">bottom</Popup>
      <Popup trigger={bottomRight} placement="bottomRight">bottomRight</Popup>
    </div>
  </div>
}