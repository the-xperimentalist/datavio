import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import { Button, Input, Tooltip, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import frontBannerImg from '../../static/imgs/front-page-banner.png'


function Banner (props) {
  const navigate = useNavigate()
  const [selectedUrl, setSelectedUrl] = useState("")
  const className = 'home-banner'
  const analyzeLink = () => {
    console.log("Here")
    if (selectedUrl === "")
      return
    navigate(`/analyze/${encodeURIComponent(selectedUrl)}`)
  }
  return (
    <div className={`home-layout-wrapper ${className}`}>
      <div className="home-layout">
        <QueueAnim className={`${className}-content-wrapper`} delay={300} ease="easeOutQuart">
          <h1 key="h2">
            <b>Better Data for Your Ecommerce Sales</b>
          </h1>
          <p key="p">Datavio helps you analyse, manage and optimise your product listing</p>
          <Input
            size="large"
            placeholder="Analyze ecommerce listing"
            value={selectedUrl}
            onChange={(e) => setSelectedUrl(e.target.value)}
            type="text"
          />
          <span key="button">
            <Button
              onClick={analyzeLink}
            >
              Search {<SearchOutlined />}
            </Button>
            <Button
              type="primary"
            >
              This is button
            </Button>
          </span>
        </QueueAnim>
        <div className={`${className}-image-wrapper`}>
          <img src={frontBannerImg} width="510px" height="460px" viewBox="0 0 510 460" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
