import React from 'react';
import { useParams } from 'react-router-dom'
import { Space, Table, Tag, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';

const { Title } = Typography


interface DataType {
  key: string;
  productName: string;
  noOfReviews: number;
  higestReviews: number;
  mostUsedKeywords: string[];
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
    title: 'No of Reviews',
    dataIndex: 'noOfReviews',
    key: 'noOfReviews',
  },
  {
    title: 'No of 5 star Reviews',
    dataIndex: 'highestReviews',
    key: 'highestReviews',
  },
  {
    title: 'Most Used Keywords',
    key: 'mostUsedKeywords',
    dataIndex: 'mostUsedKeywords',
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
    noOfReviews: 10,
    highestReviews: 5,
    mostUsedKeywords: ['best', 'high quality'],
    tags: ['optimized'],
  },
  {
    key: '2',
    productName: 'Dell laptop 16 GB',
    noOfReviews: 42,
    highestReviews: 20,
    mostUsedKeywords: ['best', 'good build'],
    tags: ['non-optimized'],
  },
  {
    key: '3',
    productName: 'Dell laptop 32 GB',
    noOfReviews: 32,
    highestReviews: 12,
    mostUsedKeywords: ['okayish'],
    tags: ['to-optimize'],
  },
];

const ReviewAnalytics = () => {
  const params = useParams()

  return (
    <div className="site-layout-background" style={{ padding: 24, marginTop: 16 }}>
      <Title level={4}>{`Review Analytics : ${params.siteType}`}</Title>
      <Table columns={columns} dataSource={data} />
    </div>
      )
}

export default ReviewAnalytics;
