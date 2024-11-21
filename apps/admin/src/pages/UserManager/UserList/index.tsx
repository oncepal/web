import React, { memo, useRef, useEffect, useState, HtmlHTMLAttributes } from 'react';
import { Row, Col, Button, Table, Pagination, List, Message, MessagePlugin } from 'tdesign-react';
import { IconFont } from 'tdesign-icons-react';
import { BrowserRouterProps } from 'react-router-dom';
import useDynamicChart from 'hooks/useDynamicChart';
import { useSize } from 'ahooks';
import styles from './index.module.less';
import { userControllerUsers } from 'services/oncepal/api/user';

const { ListItem, ListItemMeta } = List;

interface User {
  profile: null;
  id: string;
  phoneNumber: string;
  status: string;
  isSuperPal: boolean;
  views: number;
  achievementIds: string[];
  chatroomIds: string[];
  createdAt: string;
  updatedAt: string;
}

const UserManager: React.FC<BrowserRouterProps> = () => {
  const [dataSource, setDataSource] = useState<User[]>([]);
  const [isLoading,setIsLoading] = useState<boolean>(false)
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const result = await userControllerUsers();
        setDataSource(result.data);
        setIsLoading(false)
      } catch (error) {
        MessagePlugin.error('请求失败，请稍后重试');
        setIsLoading(false)
      }
    };
    fetchData();
  }, []);

  // 表格列定义
  const columns = [
    { colKey: 'phoneNumber', title: '电话号码' },
    { colKey: 'status', title: '状态' },
    { colKey: 'isSuperPal', title: '是否超级用户' },
    { colKey: 'views', title: '浏览次数' },
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
  const [tableOffsetTop, setTableOffectTop] = useState(0)

  const size = useSize(containerRef);

  useEffect(() => {
    if (containerRef.current)
      setTableOffectTop(containerRef?.current?.offsetTop + 104)
  }, [size])

  return (
    <div className={styles.container} ref={containerRef}>
      <Table
        loading = {isLoading}
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

export default memo(UserManager);
