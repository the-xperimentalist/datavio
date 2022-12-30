import React from 'react';

const footer = [
  { text: 'LinkedIn', src: '#' },
  { text: 'Facebook', src: '#' },
  { text: 'Instagram', src: '#' },
  { text: 'Twitter', src: '#' },
  { text: 'Mail', src: 'mailto:mayank@datavio.co' },
];

function antCloudFooter() {
  const children = footer.map((item, i) => (<div key={i}><a href={item.src}>{item.text}</a></div>));
  return (<div>
    <div className="logo" key="logo">
      <img src="https://gw.alipayobjects.com/zos/rmsportal/dnIbXmAgGbRxQJksRsJL.svg" width="72" height="82" />
    </div>
    <div key="nav" className="home-footer-nav-wrapper">
      {children}
    </div>
  </div>
  );
}

function Footer() {
  return (
    <div className="home-layout-wrapper home-footer-wrapper">
      <div className="home-layout">
        {antCloudFooter()}
        <p key="cop" className="copy">Copyright ©2022 Datavio</p>
      </div>
    </div>
  );
}

export default Footer;
