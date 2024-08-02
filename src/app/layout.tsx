import { AntdRegistry } from '@ant-design/nextjs-registry'; // 解决首屏antd组件没有样式问题
import { Menu, type MenuProps } from 'antd';
import '@/styles/index.scss';
// import StyledComponentsRegistry from '@/lib/registry';
type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: 'Navigation One',
    key: 'mail',
  },
  {
    label: 'Navigation Two',
    key: 'app',
    disabled: true,
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          { label: 'Option 1', key: 'setting:1' },
          { label: 'Option 2', key: 'setting:2' },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          { label: 'Option 3', key: 'setting:3' },
          { label: 'Option 4', key: 'setting:4' },
        ],
      },
    ],
  },
  {
    key: 'alipay',
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
  },
];
const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body>
      {/* <StyledComponentsRegistry> */}
      <AntdRegistry>
        <header>
          <Menu selectedKeys={['1']} mode="horizontal" items={items} />
        </header>
        {children}
        <footer>footer</footer>
      </AntdRegistry>
      {/* </StyledComponentsRegistry> */}
    </body>
  </html>
);

export default RootLayout;
