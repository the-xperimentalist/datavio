import React, { useState } from 'react'
import { DownOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { Dropdown, Menu, div, Typography, Row, Col, Card, Tag, Divider } from 'antd';
import SiteAnalytics from './tools'

const { Title } = Typography


const Tools = (props) => {
  const [selectedSection, setSelectedSection] = useState("1")
  const toolSelection = () => {
    return (
      <Menu
        selectable
        defaultSelectedKeys={['3']}
        items={[
          {
            key: '1',
            label: 'All',
          },
          {
            key: '2',
            label: 'Flipkart',
          },
          {
            key: '3',
            label: 'Amazon',
          },
          {
            key: '4',
            label: 'Myntra',
          },
          {
            key: '5',
            label: 'Meesho',
          },
          {
            key: '6',
            label: 'Nykaa',
          },
        ]}
      />)
  }

  return (
    <div className="site-layout-background" style={{ padding: 24, marginTop: 16 }}>
      <Title level={4}>Tools</Title>
      <Dropdown overlay={toolSelection()}>
        <Typography.Link>
          <div>
            Filter By Tools
            <DownOutlined />
          </div>
        </Typography.Link>
      </Dropdown>
      <br /><br /><br />
      <div style={{ paddingLeft: 40}}>
        <Row gutter={16}>
        <Title level={4} style={{ paddingBottom: 20}}>Flipkart</Title>
        </Row>
        <Row gutter={16}>
          <Col span={6}>
            <Card style={{ width: 200 }}>
              <Title level={4}>Site Analytics</Title>
              <Link to="/tools/site-analytics/Flipkart">
                <Tag color="volcano" style={{ cursor: 'pointer' }}>View Details</Tag>
              </Link>
            </Card>
          </Col>
          <Col span={6}>
            <Card style={{ width: 200 }}>
              <Title level={4}>Review Analytics</Title>
              <Link to="/tools/review-analytics/Flipkart">
                <Tag color="volcano" style={{ cursor: 'pointer' }}>View Details</Tag>
              </Link>
            </Card>
          </Col>
          <Col span={6}>
            <Card style={{ width: 200 }}>
              <Title level={4}>Keyword Research</Title>
              <Link to="/tools/keyword-research/Flipkart">
                <Tag color="volcano" style={{ cursor: 'pointer' }}>View Details</Tag>
              </Link>
            </Card>
          </Col>
          <Col span={6}>
            <Card style={{ width: 200 }}>
              <Title level={4}>Repricer<Tag color="green" style={{ cursor: 'pointer' }}>beta</Tag></Title>
            </Card>
          </Col>
        </Row>
        <Divider />
      </div>
      <br /><br /><br />
      <div style={{ paddingLeft: 40}}>
        <Row gutter={16}>
        <Title level={4} style={{ paddingBottom: 20}}>Amazon</Title>
        </Row>
        <Row gutter={16}>
          <Col span={6}>
            <Card style={{ width: 200 }}>
              <Title level={4}>Site Analytics</Title>
              <Link to="/tools/site-analytics/Amazon">
                <Tag color="volcano" style={{ cursor: 'pointer' }}>View Details</Tag>
              </Link>
            </Card>
          </Col>
          <Col span={6}>
            <Card style={{ width: 200 }}>
              <Title level={4}>Review Analytics</Title>
              <Link to="/tools/review-analytics/Amazon">
                <Tag color="volcano" style={{ cursor: 'pointer' }}>View Details</Tag>
              </Link>
            </Card>
          </Col>
          <Col span={6}>
            <Card style={{ width: 200 }}>
              <Title level={4}>Keyword Research</Title>
              <Link to="/tools/keyword-research/Amazon">
                <Tag color="volcano" style={{ cursor: 'pointer' }}>View Details</Tag>
              </Link>
            </Card>
          </Col>
          <Col span={6}>
            <Card style={{ width: 200 }}>
              <Title level={4}>Repricer<Tag color="green" style={{ cursor: 'pointer' }}>beta</Tag></Title>
            </Card>
          </Col>
        </Row>
        <Divider />
      </div>
      <br /><br /><br />
      <div style={{ paddingLeft: 40}}>
        <Row gutter={16}>
        <Title level={4} style={{ paddingBottom: 20}}>Nykaa</Title>
        </Row>
        <Row gutter={16}>
          <Col span={6}>
            <Card style={{ width: 200 }}>
              <Title level={4}>Site Analytics</Title>
              <Link to="/tools/site-analytics/Nykaa">
                <Tag color="volcano" style={{ cursor: 'pointer' }}>View Details</Tag>
              </Link>
            </Card>
          </Col>
          <Col span={6}>
            <Card style={{ width: 200 }}>
              <Title level={4}>Review Analytics</Title>
              <Link to="/tools/review-analytics/Nykaa">
                <Tag color="volcano" style={{ cursor: 'pointer' }}>View Details</Tag>
              </Link>
            </Card>
          </Col>
          <Col span={6}>
            <Card style={{ width: 200 }}>
              <Title level={4}>Keyword Research</Title>
              <Link to="/tools/keyword-research/Nykaa">
                <Tag color="volcano" style={{ cursor: 'pointer' }}>View Details</Tag>
              </Link>
            </Card>
          </Col>
          <Col span={6}>
            <Card style={{ width: 200 }}>
              <Title level={4}>Repricer<Tag color="green" style={{ cursor: 'pointer' }}>beta</Tag></Title>
            </Card>
          </Col>
        </Row>
        <Divider />
      </div>
      <br /><br /><br />
      <div style={{ paddingLeft: 40}}>
        <Row gutter={16}>
        <Title level={4} style={{ paddingBottom: 20}}>Myntra</Title>
        </Row>
        <Row gutter={16}>
          <Col span={6}>
            <Card style={{ width: 200 }}>
              <Title level={4}>Site Analytics</Title>
              <Link to="/tools/site-analytics/Myntra">
                <Tag color="volcano" style={{ cursor: 'pointer' }}>View Details</Tag>
              </Link>
            </Card>
          </Col>
          <Col span={6}>
            <Card style={{ width: 200 }}>
              <Title level={4}>Review Analytics</Title>
              <Link to="/tools/review-analytics/Myntra">
                <Tag color="volcano" style={{ cursor: 'pointer' }}>View Details</Tag>
              </Link>
            </Card>
          </Col>
          <Col span={6}>
            <Card style={{ width: 200 }}>
              <Title level={4}>Keyword Research</Title>
              <Link to="/tools/keyword-research/Myntra">
                <Tag color="volcano" style={{ cursor: 'pointer' }}>View Details</Tag>
              </Link>
            </Card>
          </Col>
          <Col span={6}>
            <Card style={{ width: 200 }}>
              <Title level={4}>Repricer<Tag color="green" style={{ cursor: 'pointer' }}>beta</Tag></Title>
            </Card>
          </Col>
        </Row>
        <Divider />
      </div>
      <br /><br /><br />
      <div style={{ paddingLeft: 40}}>
        <Row gutter={16}>
        <Title level={4} style={{ paddingBottom: 20}}>Meesho</Title>
        </Row>
        <Row gutter={16}>
          <Col span={6}>
            <Card style={{ width: 200 }}>
              <Title level={4}>Site Analytics</Title>
              <Link to="/tools/site-analytics/Meesho">
                <Tag color="volcano" style={{ cursor: 'pointer' }}>View Details</Tag>
              </Link>
            </Card>
          </Col>
          <Col span={6}>
            <Card style={{ width: 200 }}>
              <Title level={4}>Review Analytics</Title>
              <Link to="/tools/review-analytics/Meesho">
                <Tag color="volcano" style={{ cursor: 'pointer' }}>View Details</Tag>
              </Link>
            </Card>
          </Col>
          <Col span={6}>
            <Card style={{ width: 200 }}>
              <Title level={4}>Keyword Research</Title>
              <Link to="/tools/keyword-research/Meesho">
                <Tag color="volcano" style={{ cursor: 'pointer' }}>View Details</Tag>
              </Link>
            </Card>
          </Col>
          <Col span={6}>
            <Card style={{ width: 200 }}>
              <Title level={4}>Repricer<Tag color="green" style={{ cursor: 'pointer' }}>beta</Tag></Title>
            </Card>
          </Col>
        </Row>
        <Divider />
      </div>
    </div>)
}

export default Tools
