
import DocumentTitle from 'react-document-title';
import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import { Anchor, Row, Col, Typography } from "antd"

import { API_URL } from "../../utils/constants"
import KeywordAnalysis from "./KeywordAnalysis"
import PriceHistory from "./PriceHistory"
import ProductSpy from "./ProductSpy"
import RevenueInsights from "./RevenueInsights"
import ReviewInsights from "./ReviewInsights"
import SellerInfo from "./SellerInfo"
import Summary from "./Summary"

const { Link } = Anchor;

function AnalyzeView (props) {
  const navigate = useNavigate()
  const { url } = useParams()

  const requestSiteDetails = () => {
    const postData = {url: decodeURIComponent(url)}
    axios.post(`${API_URL}/analyze-site`, postData)
      .then(({data}) => {
        console.log(data)
      })
  }

  useEffect(() => {
    console.log("Here")
    requestSiteDetails()
  }, [url])

  return (
    <div className="analyze-container">
      <div className="left-nav">
        <Anchor>
          <Link
            href="#summary"
            title="Listing Summary"
          />
          <Link
            href="#reviews"
            title="Review Insights"
          />
          <Link
            href="#seller"
            title="Seller Info"
          />
          <Link
            href="#spy"
            title="Product Spy"
          />
          <Link
            href="#revenue"
            title="Revenue Insights"
          />
          <Link
            href="#price"
            title="Price History"
          />
          <Link
            href="#keyword"
            title="Keyword Analysis"
          />
        </Anchor>
      </div>
      <div className="anchor-content">
        <Summary
          url={decodeURIComponent(url)}
        />
        <ReviewInsights
          url={decodeURIComponent(url)}
        />
        <SellerInfo
          url={decodeURIComponent(url)}
        />
        <ProductSpy
          url={decodeURIComponent(url)}
        />
        <RevenueInsights
          url={decodeURIComponent(url)}
        />
        <PriceHistory
          url={decodeURIComponent(url)}
        />
        <KeywordAnalysis
          url={decodeURIComponent(url)}
        />
      </div>
    </div>)
}

export default AnalyzeView
