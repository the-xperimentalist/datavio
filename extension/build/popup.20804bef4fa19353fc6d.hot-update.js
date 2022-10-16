"use strict";
self["webpackHotUpdatechrome_extension_boilerplate_react"]("popup",{

/***/ "./src/pages/Popup/components/product.jsx":
/*!************************************************!*\
  !*** ./src/pages/Popup/components/product.jsx ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './index.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/MoreOutlined.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/typography/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/menu/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/dropdown/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/row/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/page-header/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/tag/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};






const {
  Paragraph
} = antd__WEBPACK_IMPORTED_MODULE_3__["default"];
const menu = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["default"], {
  items: [{
    key: '1',
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "http://www.alipay.com/"
    }, "1st menu item")
  }, {
    key: '2',
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "http://www.taobao.com/"
    }, "2nd menu item")
  }, {
    key: '3',
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "http://www.tmall.com/"
    }, "3rd menu item")
  }]
});

const DropdownMenu = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"], {
  key: "more",
  overlay: menu,
  placement: "bottomRight"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["default"], {
  type: "text",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["default"], {
    style: {
      fontSize: 20
    }
  })
}));

const routes = [{
  path: 'index',
  breadcrumbName: 'First-level Menu'
}, {
  path: 'first',
  breadcrumbName: 'Second-level Menu'
}, {
  path: 'second',
  breadcrumbName: 'Third-level Menu'
}];

const IconLink = ({
  src,
  text
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  className: "example-link"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
  className: "example-link-icon",
  src: src,
  alt: text
}), text);

const content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Paragraph, null, "Ant Design interprets the color system into two levels: a system-level color system and a product-level color system."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Paragraph, null, "Ant Design's design team preferred to design with the HSB color model, which makes it easier for designers to have a clear psychological expectation of color when adjusting colors, as well as facilitate communication in teams."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconLink, {
  src: "https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg",
  text: "Quick Start"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconLink, {
  src: "https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg",
  text: " Product Info"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconLink, {
  src: "https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg",
  text: "Product Doc"
})));

const Content = ({
  children,
  extraContent
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
  style: {
    flex: 1
  }
}, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
  className: "image"
}, extraContent));

const Product = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_9__["default"], {
  title: "Title",
  className: "site-page-header",
  subTitle: "This is a subtitle",
  tags: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "blue"
  }, "Running"),
  extra: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: "3"
  }, "Operation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: "2"
  }, "Operation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: "1",
    type: "primary"
  }, "Primary"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DropdownMenu, {
    key: "more"
  })],
  avatar: {
    src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4'
  },
  breadcrumb: {
    routes
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Content, {
  extraContent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "https://gw.alipayobjects.com/zos/antfincdn/K%24NnlsB%26hz/pageHeader.svg",
    alt: "content",
    width: "100%"
  })
}, content));

const _default = Product;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Paragraph, "Paragraph", "/Users/mayankprasoon/Datavio/datavio/extension/src/pages/Popup/components/product.jsx");
  reactHotLoader.register(menu, "menu", "/Users/mayankprasoon/Datavio/datavio/extension/src/pages/Popup/components/product.jsx");
  reactHotLoader.register(DropdownMenu, "DropdownMenu", "/Users/mayankprasoon/Datavio/datavio/extension/src/pages/Popup/components/product.jsx");
  reactHotLoader.register(routes, "routes", "/Users/mayankprasoon/Datavio/datavio/extension/src/pages/Popup/components/product.jsx");
  reactHotLoader.register(IconLink, "IconLink", "/Users/mayankprasoon/Datavio/datavio/extension/src/pages/Popup/components/product.jsx");
  reactHotLoader.register(content, "content", "/Users/mayankprasoon/Datavio/datavio/extension/src/pages/Popup/components/product.jsx");
  reactHotLoader.register(Content, "Content", "/Users/mayankprasoon/Datavio/datavio/extension/src/pages/Popup/components/product.jsx");
  reactHotLoader.register(Product, "Product", "/Users/mayankprasoon/Datavio/datavio/extension/src/pages/Popup/components/product.jsx");
  reactHotLoader.register(_default, "default", "/Users/mayankprasoon/Datavio/datavio/extension/src/pages/Popup/components/product.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a15a0d0edbb43090e5d3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.20804bef4fa19353fc6d.hot-update.js.map