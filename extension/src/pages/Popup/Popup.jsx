import React, { useState, useEffect } from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';
import { Breadcrumb, Layout, Menu } from 'antd'

import Account from './components/Account'
import Home from './components/Home'

const { Header, Content, Footer } = Layout

let activePage = 0

const Popup = () => {
  const [activePage, setActivePage] = useState("ACCOUNTS")
  const [userLoggedIn, setUserLoggedIn] = useState(false)

  const setAnonymousUserLoggedIn = () => {
    setUserLoggedIn(true)
  }

  useEffect(() => {
    if (!userLoggedIn)
      setActivePage("ACCOUNTS")
    else
      setActivePage("HOME")
  }, [userLoggedIn])

  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%'}}>
        <div className="logo" />
      </Header>
      <Content className="site-layout" style={{ padding: '0 25px', marginTop: 64 }}>
        <div className="site-layout-background" style={{ padding: 12, minHeight: 480, marginTop: 12 }}>
          {activePage === "ACCOUNTS" ? <Account
            setAnonymousUserLoggedIn={setAnonymousUserLoggedIn}
          /> : <Home />}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Datavio ©2022</Footer>
    </Layout>
    )
}

export default Popup;
