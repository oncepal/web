import React, { memo, useRef ,useEffect, useState, HtmlHTMLAttributes} from 'react';
import { Row, Col, Button, Table, Pagination, List } from 'tdesign-react';
import { IconFont } from 'tdesign-icons-react';
import { BrowserRouterProps } from 'react-router-dom';
import useDynamicChart from 'hooks/useDynamicChart';
import { useSize } from 'ahooks';
import styles from './index.module.less';

const { ListItem, ListItemMeta } = List;

interface Role {
  id: number;
  name: string;
  description: string;
}

const UserManager: React.FC<BrowserRouterProps> = () => {
  // 模拟的角色数据
  const data: Role[] = [
    { id: 1, name: '管理员', description: '拥有所有权限' },
    { id: 2, name: '编辑', description: '拥有编辑权限' },
    { id: 3, name: '访客', description: '仅拥有查看权限' },
    { id: 4, name: '超级管理员', description: '拥有所有管理权限' },
    { id: 5, name: '财务', description: '拥有财务权限' },
    { id: 6, name: '市场', description: '拥有市场权限' },
    { id: 7, name: '销售', description: '拥有销售权限' },
    { id: 8, name: '客服', description: '拥有客服权限' },
    { id: 9, name: '技术支持', description: '拥有技术支持权限' },
    { id: 10, name: '产品经理', description: '拥有产品管理权限' },
    { id: 11, name: '运营', description: '拥有运营权限' },
    { id: 12, name: '内容编辑', description: '拥有内容编辑权限' },
    { id: 13, name: '数据分析师', description: '拥有数据分析权限' },
    { id: 14, name: '安全管理员', description: '拥有安全管理权限' },
    { id: 15, name: '网络管理员', description: '拥有网络管理权限' },
    { id: 16, name: '人力资源', description: '拥有人力资源权限' },
    { id: 17, name: '法务', description: '拥有法务权限' },
    { id: 18, name: '行政', description: '拥有行政权限' },
    { id: 19, name: '实习生', description: '拥有实习生权限' },
    { id: 20, name: '外部顾问', description: '拥有外部顾问权限' },
  ];
  // 表格列定义
  const columns = [
    { colKey: 'id', title: 'ID' },
    { colKey: 'name', title: '角色名称' },
    { colKey: 'description', title: '描述' },
    {
      colKey: 'operation',
      title: '操作',
      cell: (record:any) => (
        <div>
          <Button theme="primary" variant="text">编辑</Button>
          <Button theme="danger" variant="text">删除</Button>
        </div>
      ),
    },
  ];

  const containerRef = useRef<any>(null);
  const [tableOffsetTop ,setTableOffectTop] = useState(0)
  
  const size = useSize(containerRef);

  useEffect(()=>{
    if(containerRef.current )
    setTableOffectTop(containerRef?.current?.offsetTop + 104)


  },[size])

  return (
    <div className={styles.container} ref={containerRef}>
      <h2>角色列表</h2>
      <Table
        data={data}
        columns={columns}
        rowKey="id"
        height={`calc(100vh - ${tableOffsetTop}px)`}
      />
      <Pagination
        total={50}
      style={{marginTop:8}}
        defaultPageSize={10}
        pageSizeOptions={[{ label: '10条/页', value: 10 }, { label: '20条/页', value: 20 }, { label: '30条/页', value: 30 }, { label: '40条/页', value: 40 }, { label: '50条/页', value: 50 }]}
      />
    </div>
  );
};

export default memo(UserManager);
