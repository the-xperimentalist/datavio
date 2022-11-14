import React from 'react'
import { Card, Typography, Tag } from 'antd'

const { Title } = Typography


const DashboardEcommCard = (props) => {
  return (
    <Card style={{ width: 400}}>
      <Title level={3}>{props.title}</Title>
      <Title level={5}>{props.brandLink}</Title>
      <Title level={5}>{props.noOfListings} listings</Title>
      <Tag color="volcano" style={{ cursor: 'pointer' }}>{props.noOfListings > 0 ? `Get Details` : `Create Listing`}</Tag>
    </Card>)
}

export default DashboardEcommCard
