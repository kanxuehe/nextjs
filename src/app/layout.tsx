import { AntdRegistry } from '@ant-design/nextjs-registry'; // 解决首屏antd组件没有样式问题
import { Menu, type MenuProps } from 'antd';
import Link from 'next/link';
import '@/styles/index.scss';
// import StyledComponentsRegistry from '@/lib/registry';
type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: <Link href="/food">food</Link>,
    key: 'food',
  },
];
const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body>
      {/* <StyledComponentsRegistry> */}
      <AntdRegistry>
        <header className="flex items-center">
          <Link href="/">LOGO</Link>
          <Menu className="flex-1" selectedKeys={['1']} mode="horizontal" items={items} />
        </header>
        <main className="min-h-[400px]">{children}</main>
        <footer className="flex items-center justify-center h-[300px] bg-gray-400">footer</footer>
      </AntdRegistry>
      {/* </StyledComponentsRegistry> */}
    </body>
  </html>
);

export default RootLayout;
