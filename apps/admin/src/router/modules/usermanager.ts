import { lazy } from 'react';
import { UserCircleIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const result: IRouter[] = [
  {
    path: '/usermanager',
    meta: {
      title: '用户管理',
      Icon: UserCircleIcon,
    },
    children: [
      {
        path: 'rolelist',
        Component: lazy(() => import('pages/UserManager/RoleList')),
        meta: {
          title: '角色列表',
        },
      },
      {
        path: 'userlist',
        Component: lazy(() => import('pages/UserManager/UserList')),
        meta: {
          title: '用户列表',
        },
      },
    ],
  },
];

export default result;
