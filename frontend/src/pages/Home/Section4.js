
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Row, Col, Button } from 'antd';

export default function Section4() {
  return (
    <div className="home-layout-wrapper home-serve-wrapper">
      <OverPack className="home-layout" playScale={0.4}>
        <QueueAnim className="home-serve" type="bottom" key="home-func" ease="easeOutQuart" leaveReverse>
          <h2 key="h2">Our Blog</h2>
          <i key="i" className="line" />
          <QueueAnim
            key="content"
            component={Row}
            type="bottom"
            componentProps={{ gutter: 96 }}
          >
            <Col span={8} className="col" key="1">
              <QueueAnim
                type="bottom"
                className="content-wrapper home-hover"
              >
                <h3 key="h3">How to optimize your listing on amazon?</h3>
                Read Our take on how to optimize your product listing on amazon
              </QueueAnim>
            </Col>
            <Col span={8} className="col" key="2">
              <QueueAnim
                type="bottom"
                className="content-wrapper home-hover"
              >
                <h3 key="h3">How to optimize your listing on amazon?</h3>
                Read Our take on how to optimize your product listing on amazon
              </QueueAnim>
            </Col>
            <Col span={8} className="col" key="3">
              <QueueAnim
                type="bottom"
                className="content-wrapper home-hover"
              >
                <h3 key="h3">How to optimize your listing on amazon?</h3>
                Read Our take on how to optimize your product listing on amazon
              </QueueAnim>
            </Col>
          </QueueAnim>
        </QueueAnim>
        <Button
          type="primary"
          size="large"
          style={{
            marginTop: "40px"
          }}
        >
          Read Our Blog
        </Button>
      </OverPack>
    </div>);
}
