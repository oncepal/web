import React, { lazy } from 'react';
import { BrowserRouterProps, Navigate } from 'react-router-dom';
import result from './result';
import pages from './pages';
import otherRoutes from './others';
import Login from '../pages/Login'
export interface Router {
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
  children?: Router[];
}

const baseRoutes: Router[] = [
  {
    path: '/login',
    Component: lazy(() => import('pages/Login')),
    isFullPage: true,
    meta: {
      hidden: true,
    },
  },
];

const allRoutes = [...baseRoutes, ...pages, ...result, ...otherRoutes];



export default allRoutes