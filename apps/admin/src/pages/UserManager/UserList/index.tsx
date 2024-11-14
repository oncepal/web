import React, { memo } from 'react';
import { Row, Col, Button, List, Card } from 'tdesign-react';
import { IconFont } from 'tdesign-icons-react';
import { BrowserRouterProps } from 'react-router-dom';
import useDynamicChart from 'hooks/useDynamicChart';
import styles from './index.module.less';

const { ListItem, ListItemMeta } = List;

const UserManager: React.FC<BrowserRouterProps> = () => {
  
  return (
    <div>
    用户列表
    </div>
  );
};

export default memo(UserManager);
