import { db } from '@/helpers/db';
import UserModel from '@/models/user';

const createOne = async (data: any) => {
  await db.connect();
  const result = await UserModel.create(data);
  if (!result) throw '数据不存在';
  await db.disconnect();
  return result;
};

export { createOne };
