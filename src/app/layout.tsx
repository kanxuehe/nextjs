import { AntdRegistry } from '@ant-design/nextjs-registry'; // 解决首屏antd组件没有样式问题
import { Menu, type MenuProps } from 'antd';
import Link from 'next/link';
import '@/styles/index.scss';
// import StyledComponentsRegistry from '@/lib/registry';
type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: <Link href="/user">user</Link>,
    key: 'user',
  },
  {
    label: <Link href="/food">food</Link>,
    key: 'food',
  },
  {
    label: <Link href="/about">about</Link>,
    key: 'about',
  },
  {
    label: <Link href="/settings">settings</Link>,
    key: 'settings',
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
