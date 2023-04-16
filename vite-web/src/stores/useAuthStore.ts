import { create } from 'zustand';

import { devtools } from 'zustand/middleware';

const authStore = (
  set: (arg0: () => { isAuthenticated: boolean }) => void
) => ({
  isAuthenticated: false,
  setIsAuthenticated: (payload: boolean) => {
    set(() => ({
      isAuthenticated: payload,
    }));
  },
});

export const useAuthStore = create(
  devtools(authStore, {
    name: 'Auth',
  })
);
