import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../modules/store';
import { selectGlobal, switchFullPage } from '../../modules/global';
import { Layout, Breadcrumb, MessagePlugin } from 'tdesign-react';
import Style from './Page.module.less';
import { Navigate, useLocation } from 'react-router-dom';

const { Content } = Layout;
const { BreadcrumbItem } = Breadcrumb;

const Page = ({
  children,
  isFullPage,
  breadcrumbs,
}: React.PropsWithChildren<{ isFullPage?: boolean; breadcrumbs?: string[] }>) => {
  const globalState = useAppSelector(selectGlobal);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(switchFullPage(isFullPage));
  }, [isFullPage]);

  if (isFullPage) {
    return <>{children}</>;
  }
  let location = useLocation();
    
  // 这里判断用户是否登录，如果未登录则跳转到登录页面
  if (!localStorage.getItem('accessToken')) {
    MessagePlugin.error('请先登录！');
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  return (
    <Content className={Style.panel}>
      {globalState.showBreadcrumbs && (
        <Breadcrumb className={Style.breadcrumb}>
          {breadcrumbs?.map((item, index) => (
            <BreadcrumbItem key={index}>{item}</BreadcrumbItem>
          ))}
        </Breadcrumb>
      )}
      {children}
    </Content>
  );
};

export default React.memo(Page);
