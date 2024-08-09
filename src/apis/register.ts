// import 'server-only';
import request from '@/utils/request';

export interface IUser {
  name: string;
  age: number;
  email: string;
  role: number;
  password: string;
}
export const register = (params?: Record<string, any>) => {
  return request.post<IUser>('/api/register', {
    params,
    cacheTime: 0,
  });
};
