import { IUser } from '@/apis/auth';

import { db } from '@/helpers/db';
import UserModel from '@/models/user';

const createOne = async (data: any) => {
  await db.connect();
  const result = await UserModel.create(data);
  if (!result) throw '数据不存在';
  await db.disconnect();
  return result;
};

const findOne = async (data: IUser) => {
  await db.connect();
  const result = await UserModel.findOne(data);
  if (!result) throw '用户名或密码错误';
  await db.disconnect();
  return {
    code: 200,
    msg: '登录成功',
    success: true,
    data: {
      token: '123',
    },
  };
};
export { createOne, findOne };
