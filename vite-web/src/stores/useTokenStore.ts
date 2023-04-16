import { create } from 'zustand';

import { devtools, persist } from 'zustand/middleware';

const userTokenStore = (set: (arg0: () => { token: any }) => void) => ({
  token: null,
  setToken: (data: any) => {
    set(() => ({
      token: data,
    }));
  },
});

export const useTokenStore = create(
  devtools(
    persist(userTokenStore, {
      name: 'token',
    })
  )
);
