
import { Row, Col, Button } from 'antd'
import QueueAnim from 'rc-queue-anim'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import listingOptImg from '../../static/imgs/listing-optimization.png'

function Section3 (props) {
  return (
    <div className="home-layout-wrapper home-banner">
      <div className="home-layout">
        <OverPack className="home-layout" location="home-func" playScale={0.4}>
          <QueueAnim
            className="home-banner-content-wrapper"
            delay={100}
            ease="easeOutQuart"
          >
            <h1 key="h2">
              <b>The product</b>
            </h1>
            <p key="p">Our product lets you connect your brand across marketplaces to get insights for your listings, and compare them with the leading competitors</p>
            <span key="button">
              <Button
                type="primary"
              >
                Try Product
              </Button>
            </span>
          </QueueAnim>
        </OverPack>
        <div className="home-banner-image-wrapper">
          <img src={listingOptImg} width="510px" height="460px" viewBox="0 0 510 460" />
        </div>
      </div>
    </div>)
}

export default Section3
