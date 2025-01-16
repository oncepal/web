import { lazy } from 'react';
import { UserCircleIcon } from 'tdesign-icons-react';
import { Router } from './index';

const pages: Router[] = [
  {
    path: 'contentCenter',
    meta: {
      title: '内容中心',
    },
    children: [
      {
        path: 'tabooManagement',
        Component: lazy(() => import('pages/ContentCenter/TabooManagement')),
        meta: {
          title: '违禁词管理',
        },
      },
    ],
  },

  {
    path: 'systemCenter',
    meta: {
      title: '系统中心',
    },
    children: [
      {
        path: 'roleManagement',
        Component: lazy(() => import('pages/SystemCenter/RoleManagement')),
        meta: {
          title: '角色管理',
        },
      },

      {
        path: 'menuManagement',
        Component: lazy(() => import('pages/SystemCenter/MenuManagement')),
        meta: {
          title: '菜单管理',
        },
      },
    ],
  },


  {
    path: 'menberCenter',
    meta: {
      title: '会员中心',
    },
    children: [
      {
        path: 'userManagement',
        Component: lazy(() => import('pages/MemberCenter/UserManagement')),
        meta: {
          title: '用户管理',
        },
      },
      {
        path: 'taskManagement',
        Component: lazy(() => import('pages/MemberCenter/TaskManagement')),
        meta: {
          title: '任务管理',
        },
      },
      {
        path: 'achievementManagement',
        Component: lazy(() => import('pages/MemberCenter/AchievementManagement')),
        meta: {
          title: '成就管理',
        },
      },
    ],
  },
  {
    path: 'marketingCenter',
    meta: {
      title: '营销中心',
    },
    children: [
      {
        path: 'orderManagement',
        Component: lazy(() => import('pages/MarketingCenter/OrderManagement')),
        meta: {
          title: '订单管理',
        },
      },
      {
        path: 'productManagement',
        Component: lazy(() => import('pages/MarketingCenter/ProductManagement')),
        meta: {
          title: '商品管理',
        },
      },
    ],
  },


];

export default pages;
