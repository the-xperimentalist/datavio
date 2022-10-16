import React, { Fragment, useState, useEffect } from 'react'
import { Menu } from 'antd'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

import Collection from './collection'
import MarketPlace from './marketplace'
import Product from './product'


const Home = (props) => {
    const [activePage, setActivePage] = useState("mp")

  return (<Fragment>
      <Menu mode="horizontal" defaultSelectedKeys={[activePage]}>
        <Menu.Item key="mp" onClick={() => setActivePage("mp")}>
          MarketPlace
        </Menu.Item>
        <Menu.Item key="collection" onClick={() => setActivePage("collection")}>
          Collection
        </Menu.Item>
        <Menu.Item key="product" onClick={() => setActivePage("product")}>
          Product
        </Menu.Item>
      </Menu>
      {
        activePage === "mp" ? (
            <MarketPlace />) : activePage === "collection" ? (
            <Collection />) : (<Product />)
      }
    </Fragment>)
}

export default Home
