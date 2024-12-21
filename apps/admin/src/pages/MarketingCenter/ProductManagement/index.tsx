import React, { memo, useRef, useEffect, useState, HtmlHTMLAttributes } from 'react';
import {
  Row,
  Col,
  Button,
  Table,
  Pagination,
  List,
  Form,
  Space,
  Input,
  FormProps,
  MessagePlugin,
  CustomValidator,
} from 'tdesign-react';
import { BrowserRouterProps } from 'react-router-dom';
import { useSize } from 'ahooks';
import styles from './index.module.less';
import dayjs from 'dayjs';
import { getUsers } from 'services/api/user';
import { debounce } from 'lodash';
const { FormItem } = Form;

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

const ProductManagement: React.FC<BrowserRouterProps> = () => {
  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState<API.UserDto[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onSubmit: FormProps['onSubmit'] = (e) => {
    console.log(e);
    if (e.validateResult === true) {
      fetchData(e?.fields);
    }
  };

  const onReset: FormProps['onReset'] = (e) => {
    fetchData(form.getFieldsValue([]));
  };
  const asyncValidate: CustomValidator = (val) =>
    new Promise((resolve) => {
      setTimeout(() => {
        if (val === '123') {
          resolve(true);
        } else {
          resolve(false);
        }
      }, 1000);
    });

  const handleChange = useRef(
    debounce((value) => {
      console.log('value', value);
      form.validate({ fields: ['password'], trigger: 'blur' });
    }, 500),
  ).current;

  const fetchData = async (options?: any) => {
    try {
      setIsLoading(true);
      const result = await getUsers(options);
      setDataSource(result.data);
      setIsLoading(false);
    } catch (error) {
      console.error('请求失败，请稍后重试', error);
      setIsLoading(false);
    }
  };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  console.log("页面刷新");
  

  // 表格列定义
  const columns = [
    
    { colKey: 'id', title: 'ID',width: 220 },
    { colKey: 'phoneNumber', title: '电话号码', width: 120, },
    { width:80,colKey: 'status', title: '状态' },
    {
      colKey: 'isSuperPal',
      title: '是否超级用户',
      width: 120,
      cell: ({ row }: any) => {
        return row.isSuperPal ? '是' : '否';
      },
    },
    { colKey: 'views', title: '主页浏览次数', width: 120, },
    {
      colKey: 'role',
      width:80,
      title: '角色',
      cell: ({ row }: any) => {
        const roles = row.roles?.join(',');
        return roles === 'USER' ? '普通用户' : '管理员';
      },
    },
    {
      colKey: 'createdAt',
      title: '创建时间',
      width: 100,
      cell: ({ row }: any) => {
        return dayjs(row.createdAt).format('YYYY-MM-DD');
      },
    },
    {
      colKey: 'updatedAt',
      title: '更新时间',
      width: 100,
      cell: ({ row }: any) => {
        return dayjs(row.updatedAt).format('YYYY-MM-DD');
      },
    },
    {
      colKey: 'operation',
      title: '操作',
      width: 100,
      cell: (record: any) => (
        <div>
          <Button theme='primary' variant='text' size='small'>
            编辑
          </Button>
          <Button theme='danger' variant='text'  size='small'>
            删除
          </Button>
        </div>
      ),
    },
  ];
  const containerRef = useRef<any>(null);
  const [tableOffsetTop, setTableOffectTop] = useState(0);

  const size = useSize(containerRef);

  useEffect(() => {
    if (containerRef.current) setTableOffectTop(containerRef?.current?.offsetTop + 104);
  }, [size]);

  return (
    <div className={styles.container} ref={containerRef}>
      <Space direction='vertical'>
        <h2>商品管理</h2>
        <Form
          colon={true}
          layout={'inline'}
          form={form}
          onSubmit={onSubmit}
          labelWidth={60}
          onReset={onReset}
          labelAlign='left'
        >
          <FormItem label='商品名' name='userName'>
            <Input />
          </FormItem>
          <FormItem label='商品Id' name='userId'>
            <Input />
          </FormItem>
          <FormItem>
            <Button theme='primary' type='submit' style={{ marginRight: 10 }}>
              查询
            </Button>
            <Button theme='default' variant='base' type='reset'>
              重置
            </Button>
          </FormItem>
        </Form>
        <Table<API.UserDto>
          loading={isLoading}
          data={dataSource}
          columns={columns}
          resizable={true}
          tableLayout='fixed'
          size={'small'}
          cellEmptyContent={'-'}
          rowKey='id'
          bordered
          maxHeight={`calc(100vh - ${tableOffsetTop}px)`}
        />
        {dataSource.length > 10 && (
          <Pagination
            total={dataSource.length}
            style={{ marginTop: 8 }}
            defaultPageSize={10}
            pageSizeOptions={[
              { label: '10条/页', value: 10 },
              { label: '20条/页', value: 20 },
              { label: '30条/页', value: 30 },
              { label: '40条/页', value: 40 },
              { label: '50条/页', value: 50 },
            ]}
          />
        )}
      </Space>
    </div>
  );
};

export default memo(ProductManagement);
