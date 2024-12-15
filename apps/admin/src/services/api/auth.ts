// @ts-ignore
/* eslint-disable */
import request from 'utils/request';

/** 获取验证码 POST /auth/captcha */
export async function captcha(body: API.GetCaptchaDto, options?: { [key: string]: any }) {
  return request<API.GetCaptchaDto>('/auth/captcha', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户登录 POST /auth/login */
export async function login(body: API.LogInDto, options?: { [key: string]: any }) {
  return request<API.LogInDto>('/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户登录并注册 POST /auth/loginWithRegister */
export async function logInWithRegister(body: API.LogInDto, options?: { [key: string]: any }) {
  return request<API.LogInDto>('/auth/loginWithRegister', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户登出 POST /auth/logout */
export async function logout(body: API.LogOutDto, options?: { [key: string]: any }) {
  return request<any>('/auth/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 刷新 token GET /auth/refresh */
export async function refresh(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.refreshParams,
  options?: { [key: string]: any },
) {
  return request<API.RefreshDto>('/auth/refresh', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 用户注册 POST /auth/register */
export async function register(body: API.RegisterDto, options?: { [key: string]: any }) {
  return request<API.RegisterDto>('/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
