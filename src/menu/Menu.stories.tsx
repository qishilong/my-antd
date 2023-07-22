import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MailOutlined, AppstoreOutlined, SettingOutlined, SmileOutlined } from '@ant-design/icons';

import Menu from './index';

export default {
  title: 'Example/Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>;

// const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
//   type: 'primary',
//   children: 'Menu',
// };


export const App = () => (
  <Menu defaultSelectedKeys={['mail']}>
    <Menu.Item key="mail" id="mail" icon={<MailOutlined />}>
      Navigation One
    </Menu.Item>
  </Menu>
);

// export const Horizontal = () => (
//   <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
//     <Menu.Item key="mail" icon={<MailOutlined />}>
//       Navigation One
//     </Menu.Item>
//     <Menu.SubMenu key="SubMenu" title="Navigation Two - Submenu" icon={<SettingOutlined />}>
//       <Menu.Item key="two" icon={<AppstoreOutlined />}>
//         Navigation Two
//       </Menu.Item>
//       <Menu.Item key="three" icon={<AppstoreOutlined />}>
//         Navigation Three
//       </Menu.Item>
//     </Menu.SubMenu>
//   </Menu>
// );

export const Inline = () => (
  <Menu mode="inline" defaultSelectedKeys={['mail']} style={{ width: 300 }}>
    <Menu.Item id="mail" icon={<MailOutlined />}>
      Navigation One
    </Menu.Item>
    <Menu.SubMenu id="SubMenu" title="Navigation Two - Submenu" icon={<SettingOutlined />}>
      <Menu.Item id="two" icon={<AppstoreOutlined />}>
        Navigation Two
      </Menu.Item>
      <Menu.Item id="three" icon={<AppstoreOutlined />}>
        Navigation Three
      </Menu.Item>
    </Menu.SubMenu>
  </Menu>
);

export const Inline2 = () => (
  <Menu mode="inline" defaultSelectedKeys={['mail']} style={{ width: 300 }}>
    <Menu.Item id="mail" icon={<MailOutlined />}>
      Navigation One
    </Menu.Item>
    <Menu.SubMenu id="SubMenu" title="Navigation Two - Submenu" icon={<SettingOutlined />}>
      <Menu.Item id="two" icon={<AppstoreOutlined />}>
        Navigation Two
      </Menu.Item>
      <Menu.Item id="three" icon={<AppstoreOutlined />}>
        Navigation Three
      </Menu.Item>
      <Menu.SubMenu id="SubMenu2" title="Navigation Two - Submenu2" icon={<SettingOutlined />}>
        <Menu.Item id="two2" icon={<AppstoreOutlined />}>
          Navigation Two2
        </Menu.Item>
        <Menu.Item id="three2" icon={<AppstoreOutlined />}>
          Navigation Three2
        </Menu.Item>
      </Menu.SubMenu>
    </Menu.SubMenu>
  </Menu>
);


export const Items = () => {
  return <Menu
    mode="inline"
    items={[
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            1st menu item
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            2nd menu item (disabled)
          </a>
        ),
        icon: <SmileOutlined />,
        disabled: true,
      },
      {
        key: '3',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            3rd menu item (disabled)
          </a>
        ),
        disabled: true,
      },
      {
        key: '4',
        danger: true,
        label: 'a danger item',
      },
    ]}
    style={{ width: 300 }}
  />
}