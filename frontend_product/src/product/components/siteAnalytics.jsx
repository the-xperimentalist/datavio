import React from 'react';
import { useParams } from 'react-router-dom'
import { Space, Table, Tag, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';

const { Title } = Typography


interface DataType {
  key: string;
  productName: string;
  price: number;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Product Name',
    dataIndex: 'productName',
    key: 'productName',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Edit {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    productName: 'Dell laptop 8 GB',
    price: 32000,
    tags: ['optimized'],
  },
  {
    key: '2',
    productName: 'Dell laptop 16 GB',
    price: 42000,
    tags: ['non-optimized'],
  },
  {
    key: '3',
    productName: 'Dell laptop 32 GB',
    price: 32000,
    tags: ['to-optimize'],
  },
];

const SiteAnalytics = () => {
  const params = useParams()

  return (
    <div className="site-layout-background" style={{ padding: 24, marginTop: 16 }}>
      <Title level={4}>{`Site Analytics : ${params.siteType}`}</Title>
      <Table columns={columns} dataSource={data} />
    </div>
      )
}

export default SiteAnalytics;