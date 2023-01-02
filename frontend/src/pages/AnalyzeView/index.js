
import DocumentTitle from 'react-document-title';
import React, { useState, useEffect, useRef } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import { Anchor, Row, Col, Typography, Modal, Form, Input } from "antd"

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
  const [loading, setLoading] = useState(true)
  const [siteAnalysisId, setSiteAnalysisId] = useState(-1)

  const [state,setState] = useState({})
  const [sellerInfo, setSellerInfo] = useState({})
  const [sellerInfoFetched, setSellerInfoFetched] = useState(false)

  const [reviews, setReviews] = useState([])
  const [reviewsFetched, setReviewsFetched] = useState(false)

  const [summary, setSummary] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false)
  const intervalRef = useRef(null)
  const [pollApi, setPollApi] = useState(false)
  
  useEffect(() => {
    let intervalId = null;
    if(pollApi) {
      intervalId = setInterval(() => {
        checkCompletedTaskStatus(state.sellers_info, state.reviews)
      },5000) 
    } else {
      clearInterval(intervalId)
    }
    return () => {
      clearInterval(intervalId)
    }
  },[pollApi])

  // summary with respect to manufacturer info is seperate
  const requestSiteDetails = () => {
    const postData = {url: url.slice(0,-1)}
    axios.post(`${API_URL}/analyze-site`, postData)
      .then(({data}) => {
        setLoading(false)
        setState(data)
        setSiteAnalysisId(data.id)
        setSummary(data.summary)
        setPollApi(true)
      })
  }


  const checkCompletedTaskStatus = async (sellersInfoTaskId, reviewsceleryTaskId) => {
    console.log(sellersInfoTaskId)
    console.log(reviewsceleryTaskId)
    const [{data: reviewsData, data: sellerInfoData}] = await Promise.all([axios.get(`${API_URL}/celery-task/${reviewsceleryTaskId}`), axios.get(`${API_URL}/celery-task/${sellersInfoTaskId}`)])
    if(reviewsData.status === "SUCCESS" && sellerInfoData.status === "SUCCESS") {
      getCompletedSiteDetails()
      setPollApi(false)
    }
  }

  const getCompletedSiteDetails = () => {
    axios.get(`${API_URL}/site-analysis-results/${siteAnalysisId}`)
      .then(({data}) => {
        console.log(data)
        setSellerInfoFetched(true)
        setReviewsFetched(true)
      })
  }

  useEffect(() => {
    requestSiteDetails()
  }, [url])

  const showModal = () => {
    console.log("Here")
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="analyze-container">
      {
        loading ? (
          <div>Loading...</div>) : (
          <>
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
                summary={summary}
                showModal={showModal}
              />
              <ReviewInsights
                url={decodeURIComponent(url)}
                showModal={showModal}
                reviews={reviews}
                reviewsFetched={reviewsFetched}
              />
              <SellerInfo
                url={decodeURIComponent(url)}
                showModal={showModal}
                sellerInfo={sellerInfo}
                sellerInfoFetched={sellerInfoFetched}
              />
              <ProductSpy
                url={decodeURIComponent(url)}
                showModal={showModal}
              />
              <RevenueInsights
                url={decodeURIComponent(url)}
                showModal={showModal}
              />
              <PriceHistory
                url={decodeURIComponent(url)}
                showModal={showModal}
              />
              <KeywordAnalysis
                url={decodeURIComponent(url)}
                showModal={showModal}
              />
            </div>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
              <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={handleOk}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[{ required: true, message: 'Please input your name!' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Email"
                  name="email"
                  rules={[{ required: true, message: 'Please input your email!' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Phone"
                  name="phone"
                  rules={[{ required: true, message: 'Please input your phone number!' }]}
                >
                  <Input />
                </Form.Item>
              </Form>
            </Modal>
          </>)
      }

    </div>)
}

export default AnalyzeView
