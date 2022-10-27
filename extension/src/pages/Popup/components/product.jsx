import React, { useState } from 'react';
import { MoreOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, PageHeader, Row, Tag, Typography, List, Drawer, Space } from 'antd';

const { Paragraph } = Typography;


const content = (
  <>
    <Paragraph>
      Ant Design interprets the color system into two levels: a system-level color system and a
      product-level color system.
    </Paragraph>
    <Paragraph>
      Ant Design&#x27;s design team preferred to design with the HSB color model, which makes it
      easier for designers to have a clear psychological expectation of color when adjusting colors,
      as well as facilitate communication in teams.
    </Paragraph>
  </>
);
const data = [
  'Price: 100',
  'Seller: XYZ Enterprises',
  'Seller Country: India',
  'Number of sellers: 4',
  'Number of images: 8'
]

const Content = ({ children, extraContent }) => (
  <Row>
    <div
      style={{
        flex: 1,
      }}
    >
      {children}
    </div>
    <div className="image">{extraContent}</div>
  </Row>
);

const Product = () => {
  const [open, setOpen] = useState(false)
  const onClose = () => {
    setOpen(false)
  }

  const openDrawer = () => {
    // setOpen(true)
    window.location.href = "https://google.com"
  }
  return (
    <PageHeader
      title="Product Name"
      className="site-page-header"
      tags={<Tag color="blue">Category</Tag>}
    >
      <Content
        extraContent={
          <img
            src="https://gw.alipayobjects.com/zos/antfincdn/K%24NnlsB%26hz/pageHeader.svg"
            alt="content"
            width="100%"
          />
        }
      >
        <List
          size="small"
          bordered
          dataSource={data}
          renderItem={(item) => <List.Item>{item}</List.Item>}
          style={{ marginRight: '16px'}}
        />
        <Button
        >
        <a href="https://www.google.com" target="_blank">More details <PlusOutlined/></a>
        </Button>
        {/*<Drawer
          title={`Drawer`}
          placement="right"
          size="large"
          onClose={onClose}
          open={open}
          extra={
            <Space>
              <Button onClick={onClose}>Cancel</Button>
              <Button type="primary" onClick={onClose}>
                OK
              </Button>
            </Space>
          }
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>*/}
      </Content>
    </PageHeader>
  );
}

export default Product;
