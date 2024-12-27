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
  Drawer,
} from 'tdesign-react';
import { BrowserRouterProps } from 'react-router-dom';
import { useSize } from 'ahooks';
import styles from './index.module.less';
// import { createTaboo, getTaboos } from 'services/api/taboo';
import { debounce } from 'lodash';
import client from 'services';
const { FormItem } = Form;

const { ListItem, ListItemMeta } = List;


const TabooManagement: React.FC<BrowserRouterProps> = () => {
  const [form] = Form.useForm();
  const [formDrawer] = Form.useForm();
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onSubmit: FormProps['onSubmit'] = (e) => {
    console.log(e);
    if (e.validateResult === true) {
      fetchTabooList(e?.fields)
    }
  };

  const onReset: FormProps['onReset'] = (e) => {
    fetchTabooList(form?.getFieldsValue([]))
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
      form?.validate({ fields: ['password'], trigger: 'blur' });
    }, 500),
  ).current;

  const fetchTabooList = async (options?:any) => {
    try {
      setIsLoading(true);
      const { data, error } = await client.GET("/taboos", {
        params: {
          query: options,
        },
      });
      // const result = await getTaboos(options);
      setDataSource(data||[]);
      setIsLoading(false);
    } catch (error) {
      console.error('请求失败，请稍后重试', error);
      setIsLoading(false);
    }
  };


  useEffect(() => {
    fetchTabooList();
  }, []);

  // 表格列定义
  const columns = [
    { colKey: 'id', title: '违禁词ID' },
    { colKey: 'name', title: '违禁词名称' },
    { colKey: 'description', title: '违禁词描述' },
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
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(true);
  };
  const handleClose = () => {
    formDrawer?.reset()
    setVisible(false);
  };
  const size = useSize(containerRef);


  const handleUpdateTaboo = async ()=>{
    try {
      const taboo = formDrawer?.getFieldsValue('name') 

    const { data, error } = await client.POST("/taboo", {
      body: taboo ,
    });
      
      handleClose()
    } catch (error) {
      console.error('请求失败，请稍后重试', error);
    }
  }

  useEffect(() => {
    if (containerRef.current) setTableOffectTop(containerRef?.current?.offsetTop + 104);
  }, [size]);

  return (
    <div className={styles.container} ref={containerRef}>
      <Space direction='vertical'>
        <h2>违禁词管理</h2>
        <Form colon layout={'inline'} form={form} onSubmit={onSubmit} labelWidth={100} onReset={onReset} labelAlign="left">
          <FormItem label='违禁词名称' name='name'>
            <Input />
          </FormItem>
          <FormItem label='违禁词Id' name='id'>
            <Input />
          </FormItem>
          <FormItem>
          <Button theme='primary' onClick={handleClick} style={{ marginRight: 10 }}>
              新增
            </Button>
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
      <Drawer header="新增违禁词" visible={visible} onClose={handleClose} onConfirm={handleUpdateTaboo}>
        <Form colon labelAlign="top" form={formDrawer} layout={'vertical'}>
          <Form.FormItem label="违禁词名称" name={'name'}>
            <Input />
          </Form.FormItem>
          <Form.FormItem label="违禁词描述" name={'description'}>
            <Input />
          </Form.FormItem>
        </Form>
      </Drawer>
    </div>
  );
};

export default memo(TabooManagement);
