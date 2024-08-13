// import 'server-only';
import request from '@/utils/request';

export interface IUser {
  email: string;
  username: string;
  password: string;
}
export const register = (params?: Record<string, any>) => {
  return request.post<IUser>('/register', {
    params,
    cacheTime: 0,
  });
};

export const loginAsync = (params: IUser) => {
  return request.post<IUser>('/login', {
    params,
    cacheTime: 0,
  });
};
