
import { Row, Col, Button } from 'antd'
import QueueAnim from 'rc-queue-anim'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import listingOptImg from '../../static/imgs/listing-optimization.png'

function Section2 (props) {
  return (
    <div className="home-layout-wrapper home-banner">
      <div className="home-layout">
        <div className="home-banner-image-wrapper">
          <img src={listingOptImg} width="510px" height="460px" viewBox="0 0 510 460" />
        </div>
        <OverPack className="home-layout" location="home-func" playScale={0.4}>
          <QueueAnim
            className="home-banner-content-wrapper"
            delay={100}
            ease="easeOutQuart"
          >
            <h1 key="h2">
              <b>The extension</b>
            </h1>
            <p key="p">The extension lets you analyze any product listing while browsing the web, or your ecommerce store to easily compare ecommerce listings or analyze competitors</p>
            <span key="button">
              <Button
                type="primary"
              >
                Try Extension
              </Button>
            </span>
          </QueueAnim>
        </OverPack>
      </div>
    </div>)
}

export default Section2
