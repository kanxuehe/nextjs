import { produce } from 'immer';
import { create } from 'zustand';

interface UserInfo {
  username: string;
  email: string;
}

interface UserState {
  userInfo: UserInfo;
  token: string;
  setUserInfo: (params: UserInfo) => void;
  setToken: (params: string) => void;
  updateAge: (params: number) => void;
}

const useUserStore = create<UserState>((set) => ({
  userInfo: {
    email: '',
    username: '',
  },
  token: '',
  setUserInfo: (userInfo) => set({ userInfo }),
  // 更新原始数据类型
  setToken: (token) => set({ token }),
  // 更新对象中某个属性
  updateAge: (age) =>
    set(
      produce((state) => {
        state.userInfo.age = age;
      }),
    ),
}));

export default useUserStore;
