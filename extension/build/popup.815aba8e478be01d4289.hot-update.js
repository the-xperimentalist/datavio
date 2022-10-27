"use strict";
self["webpackHotUpdatechrome_extension_boilerplate_react"]("popup",{

/***/ "./src/pages/Popup/Popup.jsx":
/*!***********************************!*\
  !*** ./src/pages/Popup/Popup.jsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _assets_img_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/img/logo.svg */ "./src/assets/img/logo.svg");
/* harmony import */ var _containers_Greetings_Greetings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../containers/Greetings/Greetings */ "./src/containers/Greetings/Greetings.jsx");
/* harmony import */ var _Popup_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Popup.css */ "./src/pages/Popup/Popup.css");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/layout/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/typography/index.js");
/* harmony import */ var _components_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login */ "./src/pages/Popup/components/login.jsx");
/* harmony import */ var _components_signup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/signup */ "./src/pages/Popup/components/signup.jsx");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Home */ "./src/pages/Popup/components/Home.jsx");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/api */ "./src/pages/Popup/utils/api.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};










const {
  Header,
  Content,
  Footer
} = antd__WEBPACK_IMPORTED_MODULE_8__["default"];
const {
  Title
} = antd__WEBPACK_IMPORTED_MODULE_9__["default"];
let activePage = 0;
const allPageStates = ["LOGIN", "SIGNUP", "HOME", "COLLECTION", "PRODUCT"];

const Popup = () => {
  const [activePage, setActivePage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("LOGIN");
  const [userLoggedIn, setUserLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const setAnonymousUserLoggedIn = () => {
    (0,_utils_api__WEBPACK_IMPORTED_MODULE_7__.anonymousUserApi)().then(({
      data
    }) => {
      setUserLoggedIn(true);
      console.log(data);
      chrome.storage.local.set({
        "datavioToken": data.token,
        "isAnonymous": true
      }, function () {
        console.log("Anonymous Token set");
      });
    });
  };

  const setUserAdd = () => {};

  const toggleAccountForm = () => {
    if (activePage === "LOGIN") setActivePage("SIGNUP");else setActivePage("LOGIN");
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!userLoggedIn) setActivePage("LOGIN");else setActivePage("HOME");
  }, [userLoggedIn]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Header, {
    style: {
      position: 'fixed',
      zIndex: 1,
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Content, {
    className: "site-layout",
    style: {
      padding: '0 25px',
      marginTop: 64
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "site-layout-background",
    style: {
      padding: 12,
      minHeight: 480,
      marginTop: 12
    }
  }, activePage === "LOGIN" && !userLoggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Title, {
    level: 3
  }, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_login__WEBPACK_IMPORTED_MODULE_4__["default"], {
    setAnonymousUserLoggedIn: setAnonymousUserLoggedIn,
    setUserLoggedIn: setUserLoggedIn,
    toggleAccountForm: toggleAccountForm
  })) : activePage === "SIGNUP" && !userLoggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Title, {
    level: 3
  }, "Signup"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_signup__WEBPACK_IMPORTED_MODULE_5__["default"], {
    setAnonymousUserLoggedIn: setAnonymousUserLoggedIn,
    setUserLoggedIn: setUserLoggedIn,
    toggleAccountForm: toggleAccountForm
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Home__WEBPACK_IMPORTED_MODULE_6__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Footer, {
    style: {
      textAlign: 'center'
    }
  }, "Datavio \xA92022"));
};

__signature__(Popup, "useState{[activePage, setActivePage](\"LOGIN\")}\nuseState{[userLoggedIn, setUserLoggedIn](false)}\nuseEffect{}");

const _default = Popup;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Header, "Header", "/Users/mayankprasoon/Datavio/datavio/extension/src/pages/Popup/Popup.jsx");
  reactHotLoader.register(Content, "Content", "/Users/mayankprasoon/Datavio/datavio/extension/src/pages/Popup/Popup.jsx");
  reactHotLoader.register(Footer, "Footer", "/Users/mayankprasoon/Datavio/datavio/extension/src/pages/Popup/Popup.jsx");
  reactHotLoader.register(Title, "Title", "/Users/mayankprasoon/Datavio/datavio/extension/src/pages/Popup/Popup.jsx");
  reactHotLoader.register(activePage, "activePage", "/Users/mayankprasoon/Datavio/datavio/extension/src/pages/Popup/Popup.jsx");
  reactHotLoader.register(allPageStates, "allPageStates", "/Users/mayankprasoon/Datavio/datavio/extension/src/pages/Popup/Popup.jsx");
  reactHotLoader.register(Popup, "Popup", "/Users/mayankprasoon/Datavio/datavio/extension/src/pages/Popup/Popup.jsx");
  reactHotLoader.register(_default, "default", "/Users/mayankprasoon/Datavio/datavio/extension/src/pages/Popup/Popup.jsx");
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
/******/ 	__webpack_require__.h = () => ("5422b29aa1b29e2876b4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.815aba8e478be01d4289.hot-update.js.map