import React from 'react'
import { Typography, Steps } from 'antd'

const { Title } = Typography
const { Step } = Steps


const Launchpad = (props) => {
  return (
    <div className="site-layout-background" style={{ padding: 24, marginTop: 16 }}>
      <Title level={2}>Steps to complete</Title>
      <Steps progressDot direction="vertical" current={0}>
        <Step title="Setup your brand" description="Tell us about your brand." />
        <Step title="Ecommerce Integration: Amazon" description="Connect your amazon account." />
        <Step title="Ecommerce Integration: Flipkart" description="Connect your flipkart account." />
        <Step title="Ecommerce Integration: Nykaa" description="Connect your nykaa account." />
        <Step title="Ecommerce Integration: Myntra" description="Connect your myntra account." />
        <Step title="Start analysing your brands" description="Start analysing your product listings" />
      </Steps>
    </div>)
}

export default Launchpad
