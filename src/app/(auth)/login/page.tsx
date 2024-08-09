'use client';

import { Form, Input, Button } from 'antd';
import Link from 'next/link';

// import { useRouter, useSearchParams } from 'next/navigation';
// import { userLogin } from 'store';

// import { HandleResponse, LoginForm, Logo } from '@/components';
// import { useLoginMutation } from '@/store/services';

export default function LoginPage() {
  const formItems = [
    { label: 'Username', name: 'username' },
    { label: 'Password', name: 'password', type: 'password' },
    { label: 'Email', name: 'email', type: 'email' },
  ];
  //? Assets
  // const dispatch = useDispatch();
  // const { replace } = useRouter();
  // const searchParams = useSearchParams();
  // const redirectTo = searchParams.get('redirectTo');

  // //? Login User
  // const [login, { data, isSuccess, isError, isLoading, error }] = useLoginMutation();

  // //? Handlers
  // const submitHander = async ({ email, password }) => {
  //   if (email && password) {
  //     await login({
  //       body: { email, password },
  //     });
  //   }
  // };
  const onFinish = async (values: any) => {
    console.log('Success:', values);
  };
  return (
    <>
      {/* {(isSuccess || isError) && (
        <HandleResponse
          isError={isError}
          isSuccess={isSuccess}
          error={error?.data?.message}
          message={data?.message}
          onSuccess={() => {
            dispatch(userLogin(data.data.token));
            replace(redirectTo || '/');
          }}
        />
      )} */}
      <main className="grid items-center min-h-screen">
        <section className="container max-w-md px-12 py-6 space-y-6 lg:border lg:border-gray-100 lg:rounded-lg lg:shadow">
          {/* <Link passHref href="/">
            <Logo className="mx-auto w-48 h-24" />
          </Link> */}
          <h1>登录</h1>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            {formItems.map(({ label, name, type }) => {
              if (type === 'password') {
                return (
                  <Form.Item
                    key={name}
                    label={label}
                    name={name}
                    rules={[{ required: true, message: `Please input your ${label}!` }]}
                  >
                    <Input.Password />
                  </Form.Item>
                );
              }
              return (
                <Form.Item
                  key={name}
                  label={label}
                  name={name}
                  rules={[
                    type === 'email'
                      ? { required: true, type }
                      : { required: true, message: `Please input your ${label}!` },
                  ]}
                >
                  <Input />
                </Form.Item>
              );
            })}
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
          <div className="text-xs">
            <p className="inline mr-2 text-gray-800 text-xs">我还没有账户</p>
            <Link href="/register" className="text-blue-400 text-xs">
              去注册
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
