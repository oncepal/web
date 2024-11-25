import React, { memo, useRef, useEffect, useState } from 'react';
import { Row, Col, Button, Table, Pagination, List, Message, MessagePlugin } from 'tdesign-react';
import { BrowserRouterProps } from 'react-router-dom';
import { useSize } from 'ahooks';
import styles from './index.module.less';
import { menusControllerFindAll } from 'services/oncepal/api/caidan';

const { ListItem, ListItemMeta } = List;

interface Menu {
  id: string;
  name: string;
  path: string;
  icon: string;
  createdAt: string;
  updatedAt: string;
}

const MenuManager: React.FC<BrowserRouterProps> = () => {
  const [dataSource, setDataSource] = useState<Menu[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await menusControllerFindAll();
        setDataSource(result.data);
        setIsLoading(false);
      } catch (error) {
        MessagePlugin.error('请求失败，请稍后重试');
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // 表格列定义
  const columns = [
    { colKey: 'name', title: '菜单名称' },
    { colKey: 'url', title: '路径' },
    { colKey: 'createdAt', title: '创建时间' },
    { colKey: 'updatedAt', title: '更新时间' },
    {
      colKey: 'operation',
      title: '操作',
      cell: (record: any) => (
        <div>
          <Button theme="primary" variant="text">编辑</Button>
          <Button theme="danger" variant="text">删除</Button>
        </div>
      ),
    },
  ];

  const containerRef = useRef<any>(null);
  const [tableOffsetTop, setTableOffectTop] = useState(0);

  const size = useSize(containerRef);

  useEffect(() => {
    if (containerRef.current)
      setTableOffectTop(containerRef?.current?.offsetTop + 104);
  }, [size]);

  return (
    <div className={styles.container} ref={containerRef}>
      <Table
        loading={isLoading}
        data={dataSource}
        columns={columns}
        rowKey="id"
        maxHeight={`calc(100vh - ${tableOffsetTop}px)`}
      />
      {
        dataSource.length > 10 &&
        <Pagination
          total={dataSource.length}
          style={{ marginTop: 8 }}
          defaultPageSize={10}
          pageSizeOptions={[{ label: '10条/页', value: 10 }, { label: '20条/页', value: 20 }, { label: '30条/页', value: 30 }, { label: '40条/页', value: 40 }, { label: '50条/页', value: 50 }]}
        />
      }
    </div>
  );
};

export default memo(MenuManager);
