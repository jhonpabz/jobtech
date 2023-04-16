import { create } from 'zustand';

import { devtools, persist } from 'zustand/middleware';

const userInfoStore = (set: (arg0: () => { User: any[] }) => void) => ({
  User: {},
  setUser: (data: any) => {
    set(() => ({
      User: data,
    }));
  },
});

export const useUserStore = create(
  devtools(
    persist(userInfoStore, {
      name: 'User',
    })
  )
);
