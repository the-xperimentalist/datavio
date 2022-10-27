import React from 'react'
import { Typography, Row, Col, Card, Tag } from 'antd'
import DashboardEcommCard from './subComponents/dashboardEcommCard'

const { Title } = Typography


const Dashboard = (props) => {
  return (
    <div className="site-layout-background" style={{ padding: 24, marginTop: 16 }}>
      <Title level={2}>Dashboard</Title>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={8}>
            <DashboardEcommCard
              title="Flipkart"
              brandLink="https://www.flipkart.com/computers/computer-components/monitors/dell~brand/pr?sid=6bo,g0i,9no&otracker=product_breadCrumbs_DELL+Monitors"
              noOfListings="5"
            />
          </Col>
          <Col span={8}>
            <DashboardEcommCard
              title="Amazon"
              brandLink="https://www.flipkart.com/computers/computer-components/monitors/dell~brand/pr?sid=6bo,g0i,9no&otracker=product_breadCrumbs_DELL+Monitors"
              noOfListings="5"
            />
          </Col>
          <Col span={8}>
            <DashboardEcommCard
              title="Myntra"
              brandLink=""
              noOfListings="0"
            />
          </Col>
          <Col span={8} style={{ paddingTop: 20 }}>
            <Card style={{ width: 400 }}>
              <Title level={3}>5 Collections</Title>
              <Tag color="volcano" style={{ cursor: 'pointer' }}>View all Collections</Tag>
            </Card>
          </Col>
          <Col span={8} style={{ paddingTop: 20 }}>
            <Card style={{ width: 400 }}>
              <Title level={3}>10 Sites Analysed</Title>
              <Tag color="volcano" style={{ cursor: 'pointer' }}>View all sites</Tag>
            </Card>
          </Col>
        </Row>
      </div>
    </div>)
}

export default Dashboard
