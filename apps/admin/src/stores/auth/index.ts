import { create } from 'zustand';
import { createSelectors } from '../createSelectors';

interface AuthState {
  userId: string;
  accessToken: string;
  refreshToken: string;
}
interface AuthStateReducers {
    updateLoginState: (authState: AuthState) => void;
  removeLoginState: () => void;
}
const defaultAuthInfo = {
  userId: localStorage.getItem('userId') || '',
  accessToken: localStorage.getItem('accessToken') || '',
  refreshToken: localStorage.getItem('refreshToken') || '',
};

const useAuthStoreBase = create<AuthState & AuthStateReducers>()((set) => ({
  ...defaultAuthInfo,
  updateLoginState: (authState: AuthState) => {
    localStorage.setItem('userId', authState.userId);
    localStorage.setItem('accessToken', authState.accessToken);
    localStorage.setItem('refreshToken', authState.refreshToken);
    set((state) => ({ ...state, ...authState }));
  },
  removeLoginState: () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    set(() => defaultAuthInfo);
  },
}));

export const useAuthStore = createSelectors(useAuthStoreBase);
