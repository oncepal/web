import React, { memo, useRef ,useEffect, useState, HtmlHTMLAttributes} from 'react';
import { Row, Col, Button, Table, Pagination, List } from 'tdesign-react';
import { IconFont } from 'tdesign-icons-react';
import { BrowserRouterProps } from 'react-router-dom';
import useDynamicChart from 'hooks/useDynamicChart';
import { useSize } from 'ahooks';
import styles from './index.module.less';

const { ListItem, ListItemMeta } = List;

interface User {
  id: number;
  name: string;
  email: string;
}

const UserManager: React.FC<BrowserRouterProps> = () => {
  // 模拟的用户数据
  const data: User[] = [
    { id: 1, name: '张三', email: 'zhangsan@example.com' },
    { id: 2, name: '李四', email: 'lisi@example.com' },
    { id: 3, name: '王五', email: 'wangwu@example.com' },
    { id: 4, name: '赵六', email: 'zhaoliu@example.com' },
    { id: 5, name: '孙七', email: 'sunqi@example.com' },
    { id: 6, name: '周八', email: 'zhouba@example.com' },
    { id: 7, name: '吴九', email: 'wujiu@example.com' },
    { id: 8, name: '郑十', email: 'zhengshi@example.com' },
    { id: 9, name: '王十一', email: 'wangshiyi@example.com' },
    { id: 10, name: '李十二', email: 'lishier@example.com' },
    { id: 11, name: '张十三', email: 'zhangshisan@example.com' },
    { id: 12, name: '王十四', email: 'wangshisi@example.com' },
    { id: 13, name: '李十五', email: 'lishiwu@example.com' },
    { id: 14, name: '张十六', email: 'zhangshiliu@example.com' },
    { id: 15, name: '王十七', email: 'wangshiqi@example.com' },
    { id: 16, name: '李十八', email: 'lishiba@example.com' },
    { id: 17, name: '张十九', email: 'zhangshijiu@example.com' },
    { id: 18, name: '王二十', email: 'wangershi@example.com' },
    { id: 19, name: '李二十一', email: 'liershi@example.com' },
    { id: 20, name: '张二十二', email: 'zhangershi@example.com' },
  ];
  // 表格列定义
  const columns = [
    { colKey: 'id', title: 'ID' },
    { colKey: 'name', title: '用户名' },
    { colKey: 'email', title: '邮箱' },
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
      <h2>用户列表</h2>
      <Table
        data={data}
        columns={columns}
        rowKey="id"
        height={`calc(100vh - ${tableOffsetTop}px)`}
      />
      <Pagination
        total={data.length}
        style={{marginTop:8}}
        defaultPageSize={10}
        pageSizeOptions={[{ label: '10条/页', value: 10 }, { label: '20条/页', value: 20 }, { label: '30条/页', value: 30 }, { label: '40条/页', value: 40 }, { label: '50条/页', value: 50 }]}
      />
    </div>
  );
};

export default memo(UserManager);
