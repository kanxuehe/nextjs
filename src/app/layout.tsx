import { AntdRegistry } from '@ant-design/nextjs-registry'; // 解决首屏antd组件没有样式问题

import '@/styles/index.scss';
import { Header } from '@/components';
// import StyledComponentsRegistry from '@/lib/registry';
const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body>
      {/* <StyledComponentsRegistry> */}
      <AntdRegistry>
        <Header />
        <main className="min-h-[400px]">{children}</main>
        <footer className="flex items-center justify-center h-[300px] bg-gray-400">footer</footer>
      </AntdRegistry>
      {/* </StyledComponentsRegistry> */}
    </body>
  </html>
);

export default RootLayout;
