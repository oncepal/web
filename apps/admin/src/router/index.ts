import React, { lazy } from 'react';
import { BrowserRouterProps, Navigate } from 'react-router-dom';
import dashboard from './modules/dashboard';
import result from './modules/result';
import userManager from './modules/usermanager';
import login from './modules/login';
import otherRoutes from './modules/others';

export interface IRouter {
  path: string;
  redirect?: string;
  Component?: React.FC<BrowserRouterProps> | (() => any);
  /**
   * 当前路由是否全屏显示
   */
  isFullPage?: boolean;
  /**
   * meta未赋值 路由不显示到菜单中
   */
  meta?: {
    title?: string;
    Icon?: React.FC;
    /**
     * 侧边栏隐藏该路由
     */
    hidden?: boolean;
    /**
     * 单层路由
     */
    single?: boolean;
  };
  children?: IRouter[];
}

const routes: IRouter[] = [
  {
    path: '/login',
    Component: lazy(() => import('pages/Login')),
    isFullPage: true,
    meta: {
      hidden: true,
    },
  },
  {
    path: '/',
    redirect: '/usermanager/userlist',
  },
];

const allRoutes = [...routes, ...userManager, ...result, ...otherRoutes];

// 身份验证函数
const isAuthenticated = () => {
  // 这里可以添加实际的身份验证逻辑
  // 例如检查本地存储或会话中的用户信息
  return !!localStorage.getItem('userToken');
};

const PrivateRoute = (route: IRouter) => {
  const isLogin = isAuthenticated()
  const isLoginPath = route.path === '/login'
  // 已登录 跳转首页
  const redirectToHome = isLoginPath && isLogin && {redirect:"/"}
  // 未登录 跳转登录页
  const redirectToLogin = !isLoginPath && !isLogin && {redirect:"/login"} 
  const redirect = redirectToHome || redirectToLogin || {}
  return{...route ,... redirect}
};

export default allRoutes.map((route) => ( PrivateRoute(route)));
