import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';


interface DataType {
  key: React.Key;
  name: string;
  price: number;
  date: string;
}

const columns: ColumnsType<DataType> = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Price', dataIndex: 'price', key: 'price' },
  { title: 'Date', dataIndex: 'date', key: 'date'},
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => <a>Delete</a>,
  },
];

const data: DataType[] = [
  {
    key: 1,
    date: '20-10-2022 12:00:00',
    name: 'Dell Laptop 16 GB',
    price: 49000,
  },
  {
    key: 2,
    date: '20-10-2022 12:00:00',
    name: 'Dell Laptop 8 GB',
    price: 42000,
  },
  {
    key: 3,
    date: '20-10-2022 12:00:00',
    name: 'Dell Laptop 32 GB',
    price: 29000,
  },
  {
    key: 4,
    date: '20-10-2022 12:00:00',
    name: 'Dell Laptop 64 GB',
    price: 32000,
  },
];

const SiteAnalytics = () => (
  <Table
    columns={columns}
    expandable={{
      expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
      rowExpandable: record => record.name !== 'Not Expandable',
    }}
    dataSource={data}
  />
);

export default SiteAnalytics;