import { lazy } from 'react';
import { UserCircleIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const result: IRouter[] = [
  {
    path: 'role',
    Component: lazy(() => import('pages/Role')),
    meta: {
      title: '角色管理',
    },
  },
  {
    path: 'user',
    Component: lazy(() => import('pages/User')),
    meta: {
      title: '用户管理',
    },
  },
  {
    path: 'menu',
    Component: lazy(() => import('pages/Menu')),
    meta: {
      title: '菜单管理',
    },
  },
];

export default result;
