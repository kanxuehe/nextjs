import { Menu, type MenuProps } from 'antd';
import Link from 'next/link';

import UserAvatar from './avatar';
type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: <Link href="/food">food</Link>,
    key: 'food',
  },
];
export default function Header() {
  return (
    <header className="flex items-center">
      <Link href="/">LOGO</Link>
      <Menu className="flex-1" selectedKeys={['1']} mode="horizontal" items={items} />
      <UserAvatar />
    </header>
  );
}
