import { create } from 'zustand';

import { devtools, persist } from 'zustand/middleware';

// type UserTypes = {
//   name: string;
//   lastName: string;
//   location: string;
//   email: string;
//   _id: string;
// };

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
