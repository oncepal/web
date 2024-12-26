import { create } from 'zustand';
import { createSelectors } from './createSelectors';

interface UserInfoState {
  userInfo: Partial<API.UserDto>;
  update: (by: Partial<API.UserDto>) => void;
}

const useUserInfoStoreBase = create<UserInfoState>()((set) => ({
  userInfo: {},
  update: (userInfo) => set((state) => ({ userInfo: { ...state.userInfo, ...userInfo } })),
}));

export const useUserInfoStore = createSelectors(useUserInfoStoreBase);
