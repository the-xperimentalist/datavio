import React, { useState } from 'react';
import './App.css';
import { Layout, Menu } from 'antd';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Admin from './components/admin'
import Launchpad from './components/launchpad'
import Tools from './components/tools'
import Dashboard from './components/dashboard'
import SiteAnalytics from './components/siteAnalytics'
import KeywordResearch from './components/keywordResearch'
import ReviewAnalytics from './components/reviewAnalytics'


const { Header, Content, Footer } = Layout;

const App = () => {
  const [currentKey, setCurrentKey] = useState("1")
  return (
  <Layout>
    <BrowserRouter>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[currentKey]}
      >
        <Menu.Item key="1" onClick={() => setCurrentKey("1")}><Link to="/">Launchpad</Link></Menu.Item>
        <Menu.Item key="2"><Link to="dashboard">Dashboard</Link></Menu.Item>
        <Menu.Item key="3"><Link to="tools">Tools</Link></Menu.Item>
        <Menu.Item key="4"><Link to="admin">Admin</Link></Menu.Item>
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64, minHeight: "866px" }}>
        <Routes>
          <Route path="/" element={<Launchpad />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/tools" element={<Tools />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/tools/site-analytics/:siteType" element={<SiteAnalytics />}></Route>
          <Route path="/tools/review-analytics/:siteType" element={<ReviewAnalytics />}></Route>
          <Route path="/tools/keyword-research/:siteType" element={<KeywordResearch />}></Route>
        </Routes>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </BrowserRouter>
  </Layout>
  )
};

export default App;

// <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64, minHeight: "866px" }}>
//       {<Breadcrumb style={{ margin: '16px 0' }}>
//               <Breadcrumb.Item>Home</Breadcrumb.Item>
//               <Breadcrumb.Item>List</Breadcrumb.Item>
//               <Breadcrumb.Item>App</Breadcrumb.Item>
//             </Breadcrumb>}
//       {currentKey === "1" ? (<Launchpad
//         />) : currentKey === "2" ? (<Dashboard
//         />) : currentKey === "3" ? (<Tools
//         />) : (<Admin
//         />)}
//     </Content>
