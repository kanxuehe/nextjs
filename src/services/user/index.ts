import { IUser } from '@/apis/auth';

import { db } from '@/helpers/db';
import UserModel from '@/models/user';
import { signToken } from '@/utils';

const createOne = async (data: any) => {
  await db.connect();
  const result = await UserModel.create(data);
  if (!result) throw '数据不存在';
  await db.disconnect();
  return result;
};

const findOne = async (data: IUser) => {
  try {
    await db.connect();
    const result = await UserModel.findOne({ email: data.email });
    if (!result) throw '用户不存在';
    if (result.password !== data.password) throw '密码错误';
    const token = signToken({ id: result._id });
    await db.disconnect();
    return {
      code: 200,
      msg: '登录成功',
      success: true,
      data: {
        token,
        result,
      },
    };
  } catch (error) {
    console.log(error);
  }
};
export { createOne, findOne };
