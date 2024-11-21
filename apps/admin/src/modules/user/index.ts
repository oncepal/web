import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { authControllerLogInWithRegister } from 'services/oncepal/api/auth';
const namespace = 'user';
const TOKEN_NAME = 'access_token';
const REFRESH_TOKEN_NAME = 'refresh_token';

const initialState = {
  token: localStorage.getItem(TOKEN_NAME) || 'main_token', // 默认token不走权限
  refreshToken:"",
  userInfo: {},
};

// login
export const login = createAsyncThunk(`${namespace}/login`, async (userInfo: Record<string, unknown>) => {
  const res:any = await authControllerLogInWithRegister({"phoneNumber":"12345678901"});
  console.log(res)

  if (res.code === 200) {
    return {
      accessToken: res.data.accessToken,
      refreshToken: res.data.refreshToken,
      userInfo: res.data.userInfo,
    };
  }
  throw res;
});

const userSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem(TOKEN_NAME);
      state.token = '';
      state.userInfo = {};
    },
    remove: (state) => {
      state.token = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        localStorage.setItem(TOKEN_NAME, action.payload.accessToken);
        localStorage.setItem(REFRESH_TOKEN_NAME, action.payload.refreshToken);
        state.token = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.userInfo = action.payload.userInfo;
      });
  },
});

export const selectListBase = (state: RootState) => state.listBase;

export const { logout, remove } = userSlice.actions;

export default userSlice.reducer;
