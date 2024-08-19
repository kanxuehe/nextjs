'use client';

import useUserStore from '@/store/user';

export default function UserAvatar() {
  const { userInfo } = useUserStore();

  return <div>welcome{userInfo.username}</div>;
}
