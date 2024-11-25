import { lazy } from 'react';
import { UserCircleIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const result: IRouter[] = [
  {
    path: '/rolemanager',
    meta: {
      title: '权限管理',
      Icon: UserCircleIcon,
    },
    children: [
      {
        path: 'rolelist',
        Component: lazy(() => import('pages/RoleManager/RoleList')),
        meta: {
          title: '角色列表',
        },
      },
      {
        path: 'userlist',
        Component: lazy(() => import('pages/RoleManager/UserList')),
        meta: {
          title: '用户列表',
        },
      },
      {
        path: 'menulist',
        Component: lazy(() => import('pages/RoleManager/MenuList')),
        meta: {
          title: '菜单列表',
        },
      },
    ],
  },
];

export default result;
