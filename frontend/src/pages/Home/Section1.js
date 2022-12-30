import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Row, Col } from 'antd';

import competitorAnalysisImg from '../../static/imgs/competitor-analysis.png'
import reviewInsightsImg from '../../static/imgs/review-insights.png'
import listingOptImg from '../../static/imgs/listing-optimization.png'

const page1 = [
  {
    title: 'Listing Optimization',
    content: 'Optimize your listing for your marketplace',
    src: listingOptImg,
  },
  {
    title: 'Competition Analysis',
    content: 'Analyze competitors of your category and sub-category',
    src: competitorAnalysisImg,
  },
  {
    title: 'Review Analysis',
    content: 'Analyze all your reviews on your listing',
    src: reviewInsightsImg,
  },
  // {
  //   title: 'Omnichannel Management',
  //   content: 'Manage your listings across marketplaces',
  //   src: 'https://gw.alipayobjects.com/zos/rmsportal/oxmXLgGjCeXfYPcVSbKg.png',
  // }
];

export default function Section1() {
  const children = page1.map((d, i) => (
    <QueueAnim
      component={Col}
      key={i}
      type="bottom"
      className="col"
      componentProps={{ span: 8 }}
    >
      <img className="image" key={`image${i}`} src={d.src} />
      <h3 key="h3">{d.title}</h3>
      <p key="p">{d.content}</p>
    </QueueAnim>
  ));
  return (
    <div className="home-layout-wrapper home-func-wrapper" id="home-func" >
      <h2>Tools</h2>
      <i className="line" />
      <OverPack className="home-layout" location="home-func" playScale={0.4}>
        <QueueAnim className="home-func" type="bottom" key="home-func" ease="easeOutQuart" leaveReverse>
          <QueueAnim
            key="content"
            component={Row}
            type="bottom"
            componentProps={{ gutter: 171 }}
          >
            {children}
          </QueueAnim>
        </QueueAnim>
      </OverPack>
    </div>);
}
