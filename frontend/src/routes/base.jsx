import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import logo from "../assets/logo.png"
// import Navbar from '../components/navbar'

const { Header, Content, Footer } = Layout


const Base = (params) => {
  return (<Layout className="layout">
    <Header>
      <div className="logo" style={{ backgroundImage: `url(${logo})`}} />
      <Menu
        theme="dark"
        mode="horizontal"
        selectable={false}
        items={new Array(15).fill(null).map((_, index) => {
          const key = index + 1;
          return {
            key,
            label: `nav ${key}`,
          };
        })}
      />
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <div className="site-layout-content">Content</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>)
}

export default Base
