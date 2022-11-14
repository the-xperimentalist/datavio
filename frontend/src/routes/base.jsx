import React from 'react'
import { Layout, Menu } from 'antd'
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
      >
        <Menu.Item key="1">Blog</Menu.Item>
        <Menu.Item key="2">About</Menu.Item>
        <Menu.Item key="3">Tools</Menu.Item>
        <Menu.Item key="4">Contact</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px', marginTop: 32 }}>
      <div className="site-layout-content">Content</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>)
}

export default Base
