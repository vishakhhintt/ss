webpackHotUpdate_N_E("pages/products",{

/***/ "./pages/products/index.js":
/*!*********************************!*\
  !*** ./pages/products/index.js ***!
  \*********************************/
/*! exports provided: __N_SSP, default, appendProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Posts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendProducts", function() { return appendProducts; });
/* harmony import */ var C_xampp_htdocs_special_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_xampp_htdocs_special_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_xampp_htdocs_special_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_xampp_htdocs_special_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_xampp_htdocs_special_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);






var _jsxFileName = "C:\\xampp\\htdocs\\special-next\\pages\\products\\index.js",
    _s = $RefreshSig$(),
    _this2 = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_xampp_htdocs_special_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



 // import {appendProducts} from './extras';

var s = [];
var __N_SSP = true;
function Posts(_ref) {
  _s();

  var _this = this;

  var products = _ref.products,
      category = _ref.category;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    p_loaded: true,
    p_haveData: products.status == 1 ? true : false,
    p_isMore: true,
    p_isMoreProgress: false,
    p_page: 1
  }),
      productSatets = _useState[0],
      setAllValues = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    c_haveCat: category.status == 1 ? true : false,
    c_category: category.result,
    c_catChoosedstat: null,
    c_catChoosed: null
  }),
      categorySatets = _useState2[0],
      setAllCatValues = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(appendProducts(products.result, null)),
      p_showdata = _useState3[0],
      setDivdata = _useState3[1]; //   const [p_loaded, setIsLoaded] = useState(true);
  //   const [p_haveData, setPdata] = useState(products.status==1?true:false);
  //   const [p_isMore, setIsMore] = useState(true);
  //   const [p_isMoreProgress, setIsMoreProgress] = useState(false);
  //   const [p_page, setPage] = useState(1);
  //   const [p_showdata, setDivdata] = useState(appendData(products.result,null));


  function loadMoreData(_x) {
    return _loadMoreData.apply(this, arguments);
  }

  function _loadMoreData() {
    _loadMoreData = Object(C_xampp_htdocs_special_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_xampp_htdocs_special_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
      var cstate, p, moreData;
      return C_xampp_htdocs_special_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              cstate = categorySatets.c_catChoosed;
              setAllValues(_objectSpread(_objectSpread({}, productSatets), {}, {
                p_isMoreProgress: true
              }));
              p = productSatets.p_page + 1;
              _context.next = 6;
              return fetchMoreData(p, cstate);

            case 6:
              moreData = _context.sent;
              setDivdata(appendProducts(moreData.result, p_showdata));

              if (moreData.status == 1) {
                setAllValues(_objectSpread(_objectSpread({}, productSatets), {}, {
                  p_isMoreProgress: false,
                  p_page: p,
                  p_haveData: true,
                  p_isMore: true
                }));
              } else {
                setAllValues(_objectSpread(_objectSpread({}, productSatets), {}, {
                  p_isMoreProgress: false,
                  p_page: p,
                  p_haveData: false,
                  p_isMore: false
                }));
              }

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _loadMoreData.apply(this, arguments);
  }

  function handleCatClick(_x2, _x3) {
    return _handleCatClick.apply(this, arguments);
  }

  function _handleCatClick() {
    _handleCatClick = Object(C_xampp_htdocs_special_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_xampp_htdocs_special_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(i, c_id) {
      var cstate, cstatestat, p, moreData;
      return C_xampp_htdocs_special_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              event.preventDefault();
              cstate = categorySatets.c_catChoosed;
              cstatestat = categorySatets.c_catChoosedstat;
              p = 1;
              s = [];

              if (cstatestat == null) {
                cstatestat = [];
                cstatestat[i] = true;
              } else cstatestat[i] = !cstatestat[i];

              if (cstate == null) cstate = [];
              cstate[i] = cstatestat[i] ? c_id : null;
              setAllValues(_objectSpread(_objectSpread({}, productSatets), {}, {
                p_loaded: false,
                p_isMoreProgress: true,
                p_page: p
              }));
              _context2.next = 11;
              return fetchMoreData(p, cstate);

            case 11:
              moreData = _context2.sent;
              setAllCatValues(_objectSpread(_objectSpread({}, categorySatets), {}, {
                c_catChoosed: cstate,
                c_catChoosedstat: cstatestat
              }));
              setDivdata(appendProducts(moreData.result, s));

              if (moreData.status == 1) {
                setAllValues(_objectSpread(_objectSpread({}, productSatets), {}, {
                  p_isMoreProgress: false,
                  p_page: p,
                  p_haveData: true,
                  p_isMore: true
                }));
              } else {
                setAllValues(_objectSpread(_objectSpread({}, productSatets), {}, {
                  p_isMoreProgress: false,
                  p_page: p,
                  p_haveData: false,
                  p_isMore: false
                }));
              }

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _handleCatClick.apply(this, arguments);
  }

  function fetchMoreData(_x4, _x5) {
    return _fetchMoreData.apply(this, arguments);
  }

  function _fetchMoreData() {
    _fetchMoreData = Object(C_xampp_htdocs_special_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_xampp_htdocs_special_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(page, cstate) {
      var catSelected, apiUrl, productsArray;
      return C_xampp_htdocs_special_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              catSelected = cstate == null ? null : cstate.join(',');
              apiUrl = 'https://admin.specialistmattresssystems.com/api/Product/product';
              _context3.next = 4;
              return fetch(apiUrl, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  "cates": catSelected,
                  "page": page
                })
              });

            case 4:
              productsArray = _context3.sent;
              return _context3.abrupt("return", productsArray.json());

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _fetchMoreData.apply(this, arguments);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("section", {
      className: "payuse-banner",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "col-12 mb-5",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
              children: "Products"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              children: "A UNIQUE PRESSURE CARE SYSTEM"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "col-12 products-sec",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "row",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "card col-12",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                  className: "card-body",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h6", {
                    children: "Filter by"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 118,
                    columnNumber: 29
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "input-group filter",
                    children: categorySatets.c_haveCat ? categorySatets.c_category.map(function (category, index) {
                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                        className: "button-checkbox input-group-btn",
                        id: "btnspan" + index,
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
                          id: "btn" + index,
                          type: "button",
                          className: categorySatets.c_catChoosedstat != null && categorySatets.c_catChoosedstat[index] ? 'btn btn-primary active' : 'btn btn-default',
                          "data-color": "primary",
                          onClick: function onClick() {
                            return handleCatClick(index, category['catgory_id']);
                          },
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
                            "class": "state-icon"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 124,
                            columnNumber: 278
                          }, _this), category['category']]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 124,
                          columnNumber: 21
                        }, _this), categorySatets.c_catChoosed != null && categorySatets.c_catChoosed[index] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
                          type: "checkbox",
                          checked: true,
                          className: "hidden",
                          id: "cbox" + index
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 126,
                          columnNumber: 20
                        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
                          type: "checkbox",
                          className: "hidden",
                          id: "cbox" + index
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 128,
                          columnNumber: 20
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 123,
                        columnNumber: 17
                      }, _this);
                    }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
                      src: "img/spinner.gif",
                      className: "wait",
                      alt: "wait",
                      width: "100",
                      align: "center"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 132,
                      columnNumber: 20
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 120,
                    columnNumber: 13
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "row",
                    children: productSatets.p_loaded ? p_showdata : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
                      src: "/img/spinner.gif",
                      className: "wait",
                      alt: "wait",
                      width: "100",
                      align: "center"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 138,
                      columnNumber: 60
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 136,
                    columnNumber: 13
                  }, this), productSatets.p_loaded ? productSatets.p_isMoreProgress ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "row",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                      className: "col-12 text-center",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
                        src: "img/spinner.gif",
                        className: "wait",
                        alt: "wait",
                        width: "100",
                        align: "center"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 147,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 146,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 145,
                    columnNumber: 21
                  }, this) : productSatets.p_isMore ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "row",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                      className: "col-12 text-center",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
                        className: "btn load-btn",
                        onClick: loadMoreData,
                        type: "button",
                        children: "Load More"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 154,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 153,
                      columnNumber: 21
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 152,
                    columnNumber: 17
                  }, this) : '' : '']
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 25
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

_s(Posts, "yOiJoPikN9s0a4K/ufzA1rrLM+Q=");

_c = Posts;
;
var appendProducts = function appendProducts(products, divData) {
  if (divData == null) divData = [];

  if (products) {
    var map1 = products.map(function (p, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "col-12 col-lg-4 col-md-6 d-flex",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "/products/".concat(p.slug),
          style: {
            "color": "black"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "card",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "img-sec",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
                className: "card-img-top",
                src: p.img,
                alt: p.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 238,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 237,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "card-body",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h5", {
                className: "card-title",
                children: p.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 241,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("small", {
                style: {
                  color: '#642568'
                },
                children: p.catname
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 242,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                className: "card-text",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                  dangerouslySetInnerHTML: {
                    __html: p.small_description
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 244,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 243,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 240,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 13
      }, this);
    });
    divData.push(map1);
  } else {
    var _map = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "col-12",
      id: "noMore",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "alert alert-danger",
          role: "alert",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
            className: "alert-heading",
            children: "Sorry!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 263,
            columnNumber: 21
          }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: "No products were found."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 264,
            columnNumber: 21
          }, _this2)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 262,
          columnNumber: 17
        }, _this2)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 13
      }, _this2)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 13
    }, _this2);

    ;
    divData.push(_map);
  }

  return divData;
};

var _c;

$RefreshReg$(_c, "Posts");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvaW5kZXguanMiXSwibmFtZXMiOlsicyIsIlBvc3RzIiwicHJvZHVjdHMiLCJjYXRlZ29yeSIsInVzZVN0YXRlIiwicF9sb2FkZWQiLCJwX2hhdmVEYXRhIiwic3RhdHVzIiwicF9pc01vcmUiLCJwX2lzTW9yZVByb2dyZXNzIiwicF9wYWdlIiwicHJvZHVjdFNhdGV0cyIsInNldEFsbFZhbHVlcyIsImNfaGF2ZUNhdCIsImNfY2F0ZWdvcnkiLCJyZXN1bHQiLCJjX2NhdENob29zZWRzdGF0IiwiY19jYXRDaG9vc2VkIiwiY2F0ZWdvcnlTYXRldHMiLCJzZXRBbGxDYXRWYWx1ZXMiLCJhcHBlbmRQcm9kdWN0cyIsInBfc2hvd2RhdGEiLCJzZXREaXZkYXRhIiwibG9hZE1vcmVEYXRhIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNzdGF0ZSIsInAiLCJmZXRjaE1vcmVEYXRhIiwibW9yZURhdGEiLCJoYW5kbGVDYXRDbGljayIsImkiLCJjX2lkIiwiY3N0YXRlc3RhdCIsInBhZ2UiLCJjYXRTZWxlY3RlZCIsImpvaW4iLCJhcGlVcmwiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInByb2R1Y3RzQXJyYXkiLCJqc29uIiwibWFwIiwiaW5kZXgiLCJkaXZEYXRhIiwibWFwMSIsInNsdWciLCJpbWciLCJ0aXRsZSIsImNvbG9yIiwiY2F0bmFtZSIsIl9faHRtbCIsInNtYWxsX2Rlc2NyaXB0aW9uIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7QUFDQSxJQUFJQSxDQUFDLEdBQUcsRUFBUjs7QUFDZSxTQUFTQyxLQUFULE9BQXNDO0FBQUE7O0FBQUE7O0FBQUEsTUFBckJDLFFBQXFCLFFBQXJCQSxRQUFxQjtBQUFBLE1BQVhDLFFBQVcsUUFBWEEsUUFBVzs7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QUFjRTtBQUNGRCxXQUFPLENBQUNTLElBQVIsQ0FBYVIsSUFBYjtBQUNIOztBQUNELFNBQVFELE9BQVI7QUFDRixDQWxESyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0cy5lMTc5ZTgxZmQ3YmM4NmQwMDQ4Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlICB9ICBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjsgXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbi8vIGltcG9ydCB7YXBwZW5kUHJvZHVjdHN9IGZyb20gJy4vZXh0cmFzJztcclxubGV0IHMgPSBbXTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdHMoeyBwcm9kdWN0cywgY2F0ZWdvcnl9KSB7XHJcbiAgICBcclxuICAgIGNvbnN0IFtwcm9kdWN0U2F0ZXRzLCBzZXRBbGxWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHBfbG9hZGVkOiB0cnVlLFxyXG4gICAgICAgIHBfaGF2ZURhdGE6IHByb2R1Y3RzLnN0YXR1cz09MT90cnVlOmZhbHNlLFxyXG4gICAgICAgIHBfaXNNb3JlOiB0cnVlLFxyXG4gICAgICAgIHBfaXNNb3JlUHJvZ3Jlc3M6IGZhbHNlLFxyXG4gICAgICAgIHBfcGFnZTogMSxcclxuICAgICAgICBcclxuICAgICB9KTtcclxuICAgICBjb25zdCBbY2F0ZWdvcnlTYXRldHMsIHNldEFsbENhdFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgY19oYXZlQ2F0OmNhdGVnb3J5LnN0YXR1cz09MT90cnVlOmZhbHNlLFxyXG4gICAgICAgIGNfY2F0ZWdvcnkgOiBjYXRlZ29yeS5yZXN1bHQsXHJcbiAgICAgICAgY19jYXRDaG9vc2Vkc3RhdCA6IG51bGwsXHJcbiAgICAgICAgY19jYXRDaG9vc2VkIDogbnVsbFxyXG4gICAgICAgIFxyXG4gICAgIH0pO1xyXG4gICAgY29uc3QgW3Bfc2hvd2RhdGEsIHNldERpdmRhdGFdID0gdXNlU3RhdGUoYXBwZW5kUHJvZHVjdHMocHJvZHVjdHMucmVzdWx0LG51bGwpKTsgXHJcbiAgICAgXHJcbiAgICAvLyAgIGNvbnN0IFtwX2xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICAvLyAgIGNvbnN0IFtwX2hhdmVEYXRhLCBzZXRQZGF0YV0gPSB1c2VTdGF0ZShwcm9kdWN0cy5zdGF0dXM9PTE/dHJ1ZTpmYWxzZSk7XHJcbiAgICAvLyAgIGNvbnN0IFtwX2lzTW9yZSwgc2V0SXNNb3JlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgLy8gICBjb25zdCBbcF9pc01vcmVQcm9ncmVzcywgc2V0SXNNb3JlUHJvZ3Jlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgLy8gICBjb25zdCBbcF9wYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgLy8gICBjb25zdCBbcF9zaG93ZGF0YSwgc2V0RGl2ZGF0YV0gPSB1c2VTdGF0ZShhcHBlbmREYXRhKHByb2R1Y3RzLnJlc3VsdCxudWxsKSk7XHJcbiAgIFxyXG4gICAgYXN5bmMgZnVuY3Rpb24gbG9hZE1vcmVEYXRhKGV2ZW50KVxyXG4gICAge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGNzdGF0ZSA9IGNhdGVnb3J5U2F0ZXRzLmNfY2F0Q2hvb3NlZDtcclxuICAgICAgICBzZXRBbGxWYWx1ZXMoey4uLnByb2R1Y3RTYXRldHMscF9pc01vcmVQcm9ncmVzczp0cnVlfSk7XHJcbiAgICAgICAgbGV0IHAgPSBwcm9kdWN0U2F0ZXRzLnBfcGFnZSsxO1xyXG4gICAgICAgIGxldCBtb3JlRGF0YSA9IGF3YWl0IGZldGNoTW9yZURhdGEocCxjc3RhdGUpO1xyXG4gICAgICAgIHNldERpdmRhdGEoYXBwZW5kUHJvZHVjdHMobW9yZURhdGEucmVzdWx0LHBfc2hvd2RhdGEpKTtcclxuICAgICAgICBpZihtb3JlRGF0YS5zdGF0dXM9PTEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZXRBbGxWYWx1ZXMoey4uLnByb2R1Y3RTYXRldHMscF9pc01vcmVQcm9ncmVzczpmYWxzZSxwX3BhZ2U6cCxwX2hhdmVEYXRhOnRydWUscF9pc01vcmU6dHJ1ZX0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZXRBbGxWYWx1ZXMoey4uLnByb2R1Y3RTYXRldHMscF9pc01vcmVQcm9ncmVzczpmYWxzZSxwX3BhZ2U6cCxwX2hhdmVEYXRhOmZhbHNlLHBfaXNNb3JlOmZhbHNlfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVDYXRDbGljayhpLGNfaWQpXHJcbiAgICB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgY3N0YXRlID0gY2F0ZWdvcnlTYXRldHMuY19jYXRDaG9vc2VkO1xyXG4gICAgICAgIGxldCBjc3RhdGVzdGF0ID0gIGNhdGVnb3J5U2F0ZXRzLmNfY2F0Q2hvb3NlZHN0YXQ7XHJcbiAgICAgICAgbGV0IHAgPSAxO1xyXG4gICAgICAgIHMgPSBbXTtcclxuICAgICAgIFxyXG4gICAgICAgIGlmKGNzdGF0ZXN0YXQgPT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNzdGF0ZXN0YXQgPSBbXTtcclxuICAgICAgICAgICAgY3N0YXRlc3RhdFtpXSA9ICAgdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBjc3RhdGVzdGF0W2ldID0gIWNzdGF0ZXN0YXRbaV0gO1xyXG4gICAgICAgIGlmKGNzdGF0ZT09bnVsbClcclxuICAgICAgICAgICAgY3N0YXRlID0gW107XHJcbiAgICAgICAgY3N0YXRlW2ldID0gY3N0YXRlc3RhdFtpXSA/IGNfaWQgOiBudWxsO1xyXG4gICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0QWxsVmFsdWVzKHsuLi5wcm9kdWN0U2F0ZXRzLHBfbG9hZGVkOmZhbHNlLHBfaXNNb3JlUHJvZ3Jlc3M6dHJ1ZSxwX3BhZ2U6cH0pO1xyXG4gICAgICAgIGxldCBtb3JlRGF0YSA9IGF3YWl0IGZldGNoTW9yZURhdGEocCxjc3RhdGUpO1xyXG4gICAgICAgIHNldEFsbENhdFZhbHVlcyh7Li4uY2F0ZWdvcnlTYXRldHMsY19jYXRDaG9vc2VkOmNzdGF0ZSxjX2NhdENob29zZWRzdGF0OmNzdGF0ZXN0YXR9KTtcclxuICAgICAgICBcclxuICAgICAgICBzZXREaXZkYXRhKGFwcGVuZFByb2R1Y3RzKG1vcmVEYXRhLnJlc3VsdCxzKSk7XHJcbiAgICAgICAgaWYobW9yZURhdGEuc3RhdHVzPT0xKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2V0QWxsVmFsdWVzKHsuLi5wcm9kdWN0U2F0ZXRzLHBfaXNNb3JlUHJvZ3Jlc3M6ZmFsc2UscF9wYWdlOnAscF9oYXZlRGF0YTp0cnVlLHBfaXNNb3JlOnRydWV9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2V0QWxsVmFsdWVzKHsuLi5wcm9kdWN0U2F0ZXRzLHBfaXNNb3JlUHJvZ3Jlc3M6ZmFsc2UscF9wYWdlOnAscF9oYXZlRGF0YTpmYWxzZSxwX2lzTW9yZTpmYWxzZX0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoTW9yZURhdGEocGFnZSxjc3RhdGUpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGNhdFNlbGVjdGVkID0gY3N0YXRlPT1udWxsP251bGw6Y3N0YXRlLmpvaW4oJywnKTtcclxuICAgICAgICBsZXQgYXBpVXJsO1xyXG4gICAgICAgIGFwaVVybCA9ICdodHRwczovL2FkbWluLnNwZWNpYWxpc3RtYXR0cmVzc3N5c3RlbXMuY29tL2FwaS9Qcm9kdWN0L3Byb2R1Y3QnO1xyXG4gICAgICAgIGxldCBwcm9kdWN0c0FycmF5ID0gYXdhaXQgZmV0Y2goYXBpVXJsLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCBcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1wiY2F0ZXNcIjpjYXRTZWxlY3RlZCxcInBhZ2VcIjpwYWdlfSksIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gcHJvZHVjdHNBcnJheS5qc29uKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgLy8gcGFyc2VzIEpTT04gcmVzcG9uc2UgaW50byBuYXRpdmUgSmF2YVNjcmlwdCBvYmplY3RzXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgIFxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwYXl1c2UtYmFubmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIG1iLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5Qcm9kdWN0czwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5BIFVOSVFVRSBQUkVTU1VSRSBDQVJFIFNZU1RFTTwvcD4gICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgcHJvZHVjdHMtc2VjXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5GaWx0ZXIgYnk8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgZmlsdGVyXCI+XHJcbiAgICAgICAgICAgIHtjYXRlZ29yeVNhdGV0cy5jX2hhdmVDYXQ/XHJcbiAgICAgICAgICAgICAgICAoY2F0ZWdvcnlTYXRldHMuY19jYXRlZ29yeSkubWFwKChjYXRlZ29yeSwgaW5kZXgpID0+ICggICBcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJ1dHRvbi1jaGVja2JveCBpbnB1dC1ncm91cC1idG5cIiBpZD17XCJidG5zcGFuXCIraW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9e1wiYnRuXCIraW5kZXh9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e2NhdGVnb3J5U2F0ZXRzLmNfY2F0Q2hvb3NlZHN0YXQhPW51bGwgJiYgY2F0ZWdvcnlTYXRldHMuY19jYXRDaG9vc2Vkc3RhdFtpbmRleF0/J2J0biBidG4tcHJpbWFyeSBhY3RpdmUnOididG4gYnRuLWRlZmF1bHQnfSBkYXRhLWNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNhdENsaWNrKGluZGV4LGNhdGVnb3J5WydjYXRnb3J5X2lkJ10pfSA+PGkgY2xhc3M9XCJzdGF0ZS1pY29uXCI+PC9pPntjYXRlZ29yeVsnY2F0ZWdvcnknXX08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeVNhdGV0cy5jX2NhdENob29zZWQhPW51bGwgJiYgY2F0ZWdvcnlTYXRldHMuY19jYXRDaG9vc2VkW2luZGV4XT9cclxuICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAgY2hlY2tlZCBjbGFzc05hbWU9XCJoaWRkZW5cIiBpZD17XCJjYm94XCIraW5kZXh9IC8+XHJcbiAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgIGNsYXNzTmFtZT1cImhpZGRlblwiIGlkPXtcImNib3hcIitpbmRleH0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKSk6PGltZyAgc3JjPVwiaW1nL3NwaW5uZXIuZ2lmXCIgY2xhc3NOYW1lPVwid2FpdFwiIGFsdD1cIndhaXRcIiB3aWR0aD1cIjEwMFwiIGFsaWduPVwiY2VudGVyXCIgLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RTYXRldHMucF9sb2FkZWQgPyAgcF9zaG93ZGF0YSA6IDxpbWcgIHNyYz1cIi9pbWcvc3Bpbm5lci5naWZcIiBjbGFzc05hbWU9XCJ3YWl0XCIgYWx0PVwid2FpdFwiIHdpZHRoPVwiMTAwXCIgYWxpZ249XCJjZW50ZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RTYXRldHMucF9sb2FkZWQ/XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFNhdGV0cy5wX2lzTW9yZVByb2dyZXNzID9cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBzcmM9XCJpbWcvc3Bpbm5lci5naWZcIiBjbGFzc05hbWU9XCJ3YWl0XCIgYWx0PVwid2FpdFwiIHdpZHRoPVwiMTAwXCIgYWxpZ249XCJjZW50ZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAocHJvZHVjdFNhdGV0cy5wX2lzTW9yZT9cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gbG9hZC1idG5cIiAgb25DbGljaz17bG9hZE1vcmVEYXRhfSB0eXBlPVwiYnV0dG9uXCIgPkxvYWQgTW9yZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA6JycpXHJcbiAgICAgICAgICAgICAgICA6JydcclxuICAgICAgICAgICAgICAgIH0gXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxuXHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgICAvLyBGZXRjaCBkYXRhIGZyb20gZXh0ZXJuYWwgQVBJXHJcbiAgICBjb25zdCBwcm9kdWN0cyAgPSBhd2FpdCBnZXRQcm9kdWN0cyhudWxsLDEpO1xyXG4gICAgY29uc3QgY2F0ZWdvcnkgID0gYXdhaXQgZ2V0Q2F0ZWdvcmllcygpO1xyXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgcHJvZHVjdHMgLGNhdGVnb3J5IH0gfTtcclxuICB9O1xyXG4gXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RzIChjYXRDaG9vc2VkID0gbnVsbCxwYWdlKVxyXG57XHJcbiAgXHJcbiAgIGxldCBhcGlVcmw7XHJcbiAgIGFwaVVybCA9ICdodHRwczovL2FkbWluLnNwZWNpYWxpc3RtYXR0cmVzc3N5c3RlbXMuY29tL2FwaS9Qcm9kdWN0L3Byb2R1Y3QnO1xyXG4gIFxyXG4gICAgbGV0IHByb2R1Y3RzQXJyYXkgPSBhd2FpdCBmZXRjaChhcGlVcmwsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLCAvLyAqR0VULCBQT1NULCBQVVQsIERFTEVURSwgZXRjLlxyXG4gICAgbW9kZTogJ2NvcnMnLCAvLyBuby1jb3JzLCAqY29ycywgc2FtZS1vcmlnaW5cclxuICAgIGNhY2hlOiAnbm8tY2FjaGUnLCAvLyAqZGVmYXVsdCwgbm8tY2FjaGUsIHJlbG9hZCwgZm9yY2UtY2FjaGUsIG9ubHktaWYtY2FjaGVkXHJcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJywgLy8gaW5jbHVkZSwgKnNhbWUtb3JpZ2luLCBvbWl0XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgLy8gJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG4gICAgfSxcclxuICAgIHJlZGlyZWN0OiAnZm9sbG93JywgLy8gbWFudWFsLCAqZm9sbG93LCBlcnJvclxyXG4gICAgcmVmZXJyZXJQb2xpY3k6ICduby1yZWZlcnJlcicsIC8vIG5vLXJlZmVycmVyLCAqbm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGUsIG9yaWdpbiwgb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luLCBzYW1lLW9yaWdpbiwgc3RyaWN0LW9yaWdpbiwgc3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpbiwgdW5zYWZlLXVybFxyXG4gICAgYm9keToge1wiY2F0ZXNcIjpjYXRDaG9vc2VkLFwicGFnZVwiOnBhZ2V9LCAvLyBib2R5IGRhdGEgdHlwZSBtdXN0IG1hdGNoIFwiQ29udGVudC1UeXBlXCIgaGVhZGVyXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHByb2R1Y3RzQXJyYXkuanNvbigpOyAvLyBwYXJzZXMgSlNPTiByZXNwb25zZSBpbnRvIG5hdGl2ZSBKYXZhU2NyaXB0IG9iamVjdHNcclxuXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZ2V0Q2F0ZWdvcmllcyAoKVxyXG57XHJcbiAgXHJcbiAgbGV0IGFwaVVybDtcclxuICBhcGlVcmwgPSAnaHR0cHM6Ly9hZG1pbi5zcGVjaWFsaXN0bWF0dHJlc3NzeXN0ZW1zLmNvbS9hcGkvUHJvZHVjdC9jYXRlZ29yeSc7XHJcbiAgXHJcbiAgbGV0IGNhdGVnb3J5QXJyYXkgPSBhd2FpdCBmZXRjaChhcGlVcmwsIHtcclxuICAgIG1ldGhvZDogJ0dFVCcsIC8vICpHRVQsIFBPU1QsIFBVVCwgREVMRVRFLCBldGMuXHJcbiAgICBtb2RlOiAnY29ycycsIC8vIG5vLWNvcnMsICpjb3JzLCBzYW1lLW9yaWdpblxyXG4gICAgY2FjaGU6ICduby1jYWNoZScsIC8vICpkZWZhdWx0LCBuby1jYWNoZSwgcmVsb2FkLCBmb3JjZS1jYWNoZSwgb25seS1pZi1jYWNoZWRcclxuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLCAvLyBpbmNsdWRlLCAqc2FtZS1vcmlnaW4sIG9taXRcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAvLyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcbiAgICB9LFxyXG4gICAgcmVkaXJlY3Q6ICdmb2xsb3cnLCAvLyBtYW51YWwsICpmb2xsb3csIGVycm9yXHJcbiAgICByZWZlcnJlclBvbGljeTogJ25vLXJlZmVycmVyJyAvLyBuby1yZWZlcnJlciwgKm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlLCBvcmlnaW4sIG9yaWdpbi13aGVuLWNyb3NzLW9yaWdpbiwgc2FtZS1vcmlnaW4sIHN0cmljdC1vcmlnaW4sIHN0cmljdC1vcmlnaW4td2hlbi1jcm9zcy1vcmlnaW4sIHVuc2FmZS11cmxcclxuICAgXHJcbiAgfSk7XHJcbiAgcmV0dXJuIGNhdGVnb3J5QXJyYXkuanNvbigpOyAvLyBwYXJzZXMgSlNPTiByZXNwb25zZSBpbnRvIG5hdGl2ZSBKYXZhU2NyaXB0IG9iamVjdHNcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhcHBlbmRQcm9kdWN0cyA9IChwcm9kdWN0cyxkaXZEYXRhKSA9PiB7XHJcbiAgICBcclxuICAgIGlmKGRpdkRhdGE9PW51bGwpXHJcbiAgICBkaXZEYXRhPVtdO1xyXG4gICAgaWYocHJvZHVjdHMpXHJcbiAgICB7XHJcbiAgICAgICBjb25zdCBtYXAxID0gcHJvZHVjdHMubWFwKGZ1bmN0aW9uIChwLGluZGV4KSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1sZy00IGNvbC1tZC02IGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0cy8ke3Auc2x1Z31gfSAgc3R5bGU9e3tcImNvbG9yXCI6XCJibGFja1wifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLXNlY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBzcmM9e3AuaW1nfSBhbHQ9e3AudGl0bGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57cC50aXRsZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIHN0eWxlPXt7Y29sb3I6JyM2NDI1NjgnfX0+e3AuY2F0bmFtZX08L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHAuc21hbGxfZGVzY3JpcHRpb259fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZGl2RGF0YS5wdXNoKG1hcDEpO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IG1hcDEgPSAgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiIGlkPVwibm9Nb3JlXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIiByb2xlPVwiYWxlcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiYWxlcnQtaGVhZGluZ1wiPlNvcnJ5ITwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+Tm8gcHJvZHVjdHMgd2VyZSBmb3VuZC48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApOztcclxuICAgICAgICBkaXZEYXRhLnB1c2gobWFwMSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKGRpdkRhdGEpOyBcclxuIH07Il0sInNvdXJjZVJvb3QiOiIifQ==