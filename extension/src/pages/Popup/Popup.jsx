import React, { useState, useEffect } from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';
import { Breadcrumb, Layout, Menu, Descriptions, Typography } from 'antd'

import Login from './components/login'
import Signup from './components/signup'
import Home from './components/Home'
import { anonymousUserApi } from './utils/api'

const { Header, Content, Footer } = Layout
const { Title } = Typography

let activePage = 0

const allPageStates = ["LOGIN", "SIGNUP", "HOME", "COLLECTION", "PRODUCT"]

const Popup = () => {
  const [activePage, setActivePage] = useState("LOGIN")
  const [userLoggedIn, setUserLoggedIn] = useState(false)

  const setAnonymousUserLoggedIn = () => {
    anonymousUserApi()
      .then(({data}) => {
        setUserLoggedIn(true)
        console.log(data)
        chrome.storage.local.set({
          "datavioToken": data.token,
          "isAnonymous": true }, function () {
          console.log("Anonymous Token set")
        })
      })
  }

  const setUserAdd = () => {}

  const toggleAccountForm = () => {
    if (activePage === "LOGIN")
      setActivePage("SIGNUP")
    else
      setActivePage("LOGIN")
  }

  useEffect(() => {
    if (!userLoggedIn)
      setActivePage("LOGIN")
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
          {activePage === "LOGIN" && !userLoggedIn ? (
            <>
              <Title level={3}>Login</Title>
              <Login
                setAnonymousUserLoggedIn={setAnonymousUserLoggedIn}
                setUserLoggedIn={setUserLoggedIn}
                toggleAccountForm={toggleAccountForm}
              />
            </>
          ) : activePage === "SIGNUP" && !userLoggedIn ? (
            <>
              <Title level={3}>Signup</Title>
              <Signup
                setAnonymousUserLoggedIn={setAnonymousUserLoggedIn}
                setUserLoggedIn={setUserLoggedIn}
                toggleAccountForm={toggleAccountForm}
              />
            </>
          ) : <Home />}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Datavio ©2022</Footer>
    </Layout>
    )
}

export default Popup;
