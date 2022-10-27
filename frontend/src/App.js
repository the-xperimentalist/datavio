import React, { useState } from 'react';
import './App.css';
import { Breadcrumb, Layout, Menu } from 'antd';
import Admin from './components/admin'
import Launchpad from './components/launchpad'
import Tools from './components/tools'
import Dashboard from './components/dashboard'


const { Header, Content, Footer } = Layout;

const App = () => {
  const [currentKey, setCurrentKey] = useState("1")
  return (
  <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[currentKey]}
      >
        <Menu.Item key="1" onClick={() => setCurrentKey("1")}>Launchpad</Menu.Item>
        <Menu.Item key="2" onClick={() => setCurrentKey("2")}>Dashboard</Menu.Item>
        <Menu.Item key="3" onClick={() => setCurrentKey("3")}>Tools</Menu.Item>
        <Menu.Item key="4" onClick={() => setCurrentKey("4")}>Admin</Menu.Item>
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64, minHeight: "866px" }}>
      {/*<Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>*/}
      {currentKey === "1" ? (<Launchpad
        />) : currentKey === "2" ? (<Dashboard
        />) : currentKey === "3" ? (<Tools
        />) : (<Admin
        />)}
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  )
};

export default App;