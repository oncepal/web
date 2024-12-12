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
import { rolesControllerFindAll } from 'services/oncepal/api/roles';
import { debounce } from 'lodash';
const { FormItem } = Form;

const { ListItem, ListItemMeta } = List;

interface Role {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

const RoleManager: React.FC<BrowserRouterProps> = () => {
  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState<Role[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onSubmit: FormProps['onSubmit'] = (e) => {
    console.log(e);
    if (e.validateResult === true) {
      fetchData(e?.fields)
    }
  };

  const onReset: FormProps['onReset'] = (e) => {
    fetchData(form.getFieldsValue([]))
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
  const fetchData = async (options?:any) => {
    try {
      setIsLoading(true);
      const result = await rolesControllerFindAll(options);
      setDataSource(result.data);
      setIsLoading(false);
    } catch (error) {
      console.error('请求失败，请稍后重试', error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    
    fetchData();
  }, []);

  // 表格列定义
  const columns = [
    { colKey: 'name', title: '角色名称' },
    { colKey: 'description', title: '描述' },
    { colKey: 'createdAt', title: '创建时间' },
    { colKey: 'updatedAt', title: '更新时间' },
    {
      colKey: 'operation',
      title: '操作',
      cell: (record: any) => (
        <div>
          <Button theme='primary' variant='text'>
            编辑
          </Button>
          <Button theme='danger' variant='text'>
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
        <h2>角色列表</h2>
        <Form colon	={true} layout={'inline'} form={form} onSubmit={onSubmit} labelWidth={60} onReset={onReset} labelAlign="left">
          <FormItem label='角色名' name='roleName'>
            <Input />
          </FormItem>
          <FormItem label='角色Id' name='roleId'>
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
        <Table
          loading={isLoading}
          data={dataSource}
          columns={columns}
          rowKey='id'
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

export default memo(RoleManager);
