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
                lineNumber: 239,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 238,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "card-body",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h5", {
                className: "card-title product-title",
                children: p.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 242,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("small", {
                style: {
                  color: '#642568'
                },
                children: p.catname
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 243,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                className: "card-text",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                  dangerouslySetInnerHTML: {
                    __html: p.small_description
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 245,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 244,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 241,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 237,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 235,
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
            lineNumber: 264,
            columnNumber: 21
          }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: "No products were found."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 265,
            columnNumber: 21
          }, _this2)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 17
        }, _this2)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 13
      }, _this2)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 259,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvaW5kZXguanMiXSwibmFtZXMiOlsicyIsIlBvc3RzIiwicHJvZHVjdHMiLCJjYXRlZ29yeSIsInVzZVN0YXRlIiwicF9sb2FkZWQiLCJwX2hhdmVEYXRhIiwic3RhdHVzIiwicF9pc01vcmUiLCJwX2lzTW9yZVByb2dyZXNzIiwicF9wYWdlIiwicHJvZHVjdFNhdGV0cyIsInNldEFsbFZhbHVlcyIsImNfaGF2ZUNhdCIsImNfY2F0ZWdvcnkiLCJyZXN1bHQiLCJjX2NhdENob29zZWRzdGF0IiwiY19jYXRDaG9vc2VkIiwiY2F0ZWdvcnlTYXRldHMiLCJzZXRBbGxDYXRWYWx1ZXMiLCJhcHBlbmRQcm9kdWN0cyIsInBfc2hvd2RhdGEiLCJzZXREaXZkYXRhIiwibG9hZE1vcmVEYXRhIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNzdGF0ZSIsInAiLCJmZXRjaE1vcmVEYXRhIiwibW9yZURhdGEiLCJoYW5kbGVDYXRDbGljayIsImkiLCJjX2lkIiwiY3N0YXRlc3RhdCIsInBhZ2UiLCJjYXRTZWxlY3RlZCIsImpvaW4iLCJhcGlVcmwiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInByb2R1Y3RzQXJyYXkiLCJqc29uIiwibWFwIiwiaW5kZXgiLCJkaXZEYXRhIiwibWFwMSIsInNsdWciLCJpbWciLCJ0aXRsZSIsImNvbG9yIiwiY2F0bmFtZSIsIl9faHRtbCIsInNtYWxsX2Rlc2NyaXB0aW9uIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLENBQUMsR0FBRyxFQUFSOztBQUNlLFNBQVNDLEtBQVQsT0FBc0M7QUFBQTs7QUFBQTs7QUFBQSxNQUFyQkMsUUFBcUIsUUFBckJBLFFBQXFCO0FBQUEsTUFBWEMsUUFBVyxRQUFYQSxRQUFXOztBQUFBLGtCQUVYQyxzREFBUSxDQUFDO0FBQzNDQyxZQUFRLEVBQUUsSUFEaUM7QUFFM0NDLGNBQVUsRUFBRUosUUFBUSxDQUFDSyxNQUFULElBQWlCLENBQWpCLEdBQW1CLElBQW5CLEdBQXdCLEtBRk87QUFHM0NDLFlBQVEsRUFBRSxJQUhpQztBQUkzQ0Msb0JBQWdCLEVBQUUsS0FKeUI7QUFLM0NDLFVBQU0sRUFBRTtBQUxtQyxHQUFELENBRkc7QUFBQSxNQUUxQ0MsYUFGMEM7QUFBQSxNQUUzQkMsWUFGMkI7O0FBQUEsbUJBVU5SLHNEQUFRLENBQUM7QUFDaERTLGFBQVMsRUFBQ1YsUUFBUSxDQUFDSSxNQUFULElBQWlCLENBQWpCLEdBQW1CLElBQW5CLEdBQXdCLEtBRGM7QUFFaERPLGNBQVUsRUFBR1gsUUFBUSxDQUFDWSxNQUYwQjtBQUdoREMsb0JBQWdCLEVBQUcsSUFINkI7QUFJaERDLGdCQUFZLEVBQUc7QUFKaUMsR0FBRCxDQVZGO0FBQUEsTUFVekNDLGNBVnlDO0FBQUEsTUFVekJDLGVBVnlCOztBQUFBLG1CQWlCaEJmLHNEQUFRLENBQUNnQixjQUFjLENBQUNsQixRQUFRLENBQUNhLE1BQVYsRUFBaUIsSUFBakIsQ0FBZixDQWpCUTtBQUFBLE1BaUIxQ00sVUFqQjBDO0FBQUEsTUFpQjlCQyxVQWpCOEIsa0JBbUJqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQXhCaUQsV0EwQmxDQyxZQTFCa0M7QUFBQTtBQUFBOztBQUFBO0FBQUEscVJBMEJqRCxpQkFBNEJDLEtBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVJQSxtQkFBSyxDQUFDQyxjQUFOO0FBQ0lDLG9CQUhSLEdBR2lCUixjQUFjLENBQUNELFlBSGhDO0FBSUlMLDBCQUFZLGlDQUFLRCxhQUFMO0FBQW1CRixnQ0FBZ0IsRUFBQztBQUFwQyxpQkFBWjtBQUNJa0IsZUFMUixHQUtZaEIsYUFBYSxDQUFDRCxNQUFkLEdBQXFCLENBTGpDO0FBQUE7QUFBQSxxQkFNeUJrQixhQUFhLENBQUNELENBQUQsRUFBR0QsTUFBSCxDQU50Qzs7QUFBQTtBQU1RRyxzQkFOUjtBQU9JUCx3QkFBVSxDQUFDRixjQUFjLENBQUNTLFFBQVEsQ0FBQ2QsTUFBVixFQUFpQk0sVUFBakIsQ0FBZixDQUFWOztBQUNBLGtCQUFHUSxRQUFRLENBQUN0QixNQUFULElBQWlCLENBQXBCLEVBQ0E7QUFDSUssNEJBQVksaUNBQUtELGFBQUw7QUFBbUJGLGtDQUFnQixFQUFDLEtBQXBDO0FBQTBDQyx3QkFBTSxFQUFDaUIsQ0FBakQ7QUFBbURyQiw0QkFBVSxFQUFDLElBQTlEO0FBQW1FRSwwQkFBUSxFQUFDO0FBQTVFLG1CQUFaO0FBQ0gsZUFIRCxNQUtBO0FBQ0lJLDRCQUFZLGlDQUFLRCxhQUFMO0FBQW1CRixrQ0FBZ0IsRUFBQyxLQUFwQztBQUEwQ0Msd0JBQU0sRUFBQ2lCLENBQWpEO0FBQW1EckIsNEJBQVUsRUFBQyxLQUE5RDtBQUFvRUUsMEJBQVEsRUFBQztBQUE3RSxtQkFBWjtBQUNIOztBQWZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBMUJpRDtBQUFBO0FBQUE7O0FBQUEsV0E0Q2xDc0IsY0E1Q2tDO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHVSQTRDakQsa0JBQThCQyxDQUE5QixFQUFnQ0MsSUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUlSLG1CQUFLLENBQUNDLGNBQU47QUFDSUMsb0JBSFIsR0FHaUJSLGNBQWMsQ0FBQ0QsWUFIaEM7QUFJUWdCLHdCQUpSLEdBSXNCZixjQUFjLENBQUNGLGdCQUpyQztBQUtRVyxlQUxSLEdBS1ksQ0FMWjtBQU1JM0IsZUFBQyxHQUFHLEVBQUo7O0FBRUEsa0JBQUdpQyxVQUFVLElBQUksSUFBakIsRUFDQTtBQUNJQSwwQkFBVSxHQUFHLEVBQWI7QUFDQUEsMEJBQVUsQ0FBQ0YsQ0FBRCxDQUFWLEdBQWtCLElBQWxCO0FBQ0gsZUFKRCxNQU1JRSxVQUFVLENBQUNGLENBQUQsQ0FBVixHQUFnQixDQUFDRSxVQUFVLENBQUNGLENBQUQsQ0FBM0I7O0FBQ0osa0JBQUdMLE1BQU0sSUFBRSxJQUFYLEVBQ0lBLE1BQU0sR0FBRyxFQUFUO0FBQ0pBLG9CQUFNLENBQUNLLENBQUQsQ0FBTixHQUFZRSxVQUFVLENBQUNGLENBQUQsQ0FBVixHQUFnQkMsSUFBaEIsR0FBdUIsSUFBbkM7QUFHQXBCLDBCQUFZLGlDQUFLRCxhQUFMO0FBQW1CTix3QkFBUSxFQUFDLEtBQTVCO0FBQWtDSSxnQ0FBZ0IsRUFBQyxJQUFuRDtBQUF3REMsc0JBQU0sRUFBQ2lCO0FBQS9ELGlCQUFaO0FBcEJKO0FBQUEscUJBcUJ5QkMsYUFBYSxDQUFDRCxDQUFELEVBQUdELE1BQUgsQ0FyQnRDOztBQUFBO0FBcUJRRyxzQkFyQlI7QUFzQklWLDZCQUFlLGlDQUFLRCxjQUFMO0FBQW9CRCw0QkFBWSxFQUFDUyxNQUFqQztBQUF3Q1YsZ0NBQWdCLEVBQUNpQjtBQUF6RCxpQkFBZjtBQUVBWCx3QkFBVSxDQUFDRixjQUFjLENBQUNTLFFBQVEsQ0FBQ2QsTUFBVixFQUFpQmYsQ0FBakIsQ0FBZixDQUFWOztBQUNBLGtCQUFHNkIsUUFBUSxDQUFDdEIsTUFBVCxJQUFpQixDQUFwQixFQUNBO0FBQ0lLLDRCQUFZLGlDQUFLRCxhQUFMO0FBQW1CRixrQ0FBZ0IsRUFBQyxLQUFwQztBQUEwQ0Msd0JBQU0sRUFBQ2lCLENBQWpEO0FBQW1EckIsNEJBQVUsRUFBQyxJQUE5RDtBQUFtRUUsMEJBQVEsRUFBQztBQUE1RSxtQkFBWjtBQUNILGVBSEQsTUFLQTtBQUNJSSw0QkFBWSxpQ0FBS0QsYUFBTDtBQUFtQkYsa0NBQWdCLEVBQUMsS0FBcEM7QUFBMENDLHdCQUFNLEVBQUNpQixDQUFqRDtBQUFtRHJCLDRCQUFVLEVBQUMsS0FBOUQ7QUFBb0VFLDBCQUFRLEVBQUM7QUFBN0UsbUJBQVo7QUFDSDs7QUFoQ0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0E1Q2lEO0FBQUE7QUFBQTs7QUFBQSxXQThFbENvQixhQTlFa0M7QUFBQTtBQUFBOztBQUFBO0FBQUEsc1JBOEVqRCxrQkFBNkJNLElBQTdCLEVBQWtDUixNQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFUVMseUJBRlIsR0FFc0JULE1BQU0sSUFBRSxJQUFSLEdBQWEsSUFBYixHQUFrQkEsTUFBTSxDQUFDVSxJQUFQLENBQVksR0FBWixDQUZ4QztBQUlJQyxvQkFBTSxHQUFHLGlFQUFUO0FBSko7QUFBQSxxQkFLOEJDLEtBQUssQ0FBQ0QsTUFBRCxFQUFTO0FBQ3BDRSxzQkFBTSxFQUFFLE1BRDRCO0FBRXBDQyx1QkFBTyxFQUFFO0FBQ0wsa0NBQWdCO0FBRFgsaUJBRjJCO0FBS3BDQyxvQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFDLDJCQUFRUixXQUFUO0FBQXFCLDBCQUFPRDtBQUE1QixpQkFBZjtBQUw4QixlQUFULENBTG5DOztBQUFBO0FBS1FVLDJCQUxSO0FBQUEsZ0RBWVNBLGFBQWEsQ0FBQ0MsSUFBZCxFQVpUOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBOUVpRDtBQUFBO0FBQUE7O0FBaUdqRCxzQkFDSTtBQUFBLDJCQUVJO0FBQVMsZUFBUyxFQUFDLGVBQW5CO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsS0FBZjtBQUFBLGtDQUNJO0FBQUsscUJBQVMsRUFBQyxhQUFmO0FBQUEsb0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFNSjtBQUFLLHFCQUFTLEVBQUMscUJBQWY7QUFBQSxtQ0FDQTtBQUFLLHVCQUFTLEVBQUMsS0FBZjtBQUFBLHFDQUNJO0FBQUsseUJBQVMsRUFBQyxhQUFmO0FBQUEsdUNBQ0k7QUFBSywyQkFBUyxFQUFDLFdBQWY7QUFBQSwwQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFESixlQUdaO0FBQUssNkJBQVMsRUFBQyxvQkFBZjtBQUFBLDhCQUNDM0IsY0FBYyxDQUFDTCxTQUFmLEdBQ0lLLGNBQWMsQ0FBQ0osVUFBaEIsQ0FBNEJnQyxHQUE1QixDQUFnQyxVQUFDM0MsUUFBRCxFQUFXNEMsS0FBWDtBQUFBLDBDQUNoQztBQUFNLGlDQUFTLEVBQUMsaUNBQWhCO0FBQWtELDBCQUFFLEVBQUUsWUFBVUEsS0FBaEU7QUFBQSxnREFDSTtBQUFRLDRCQUFFLEVBQUUsUUFBTUEsS0FBbEI7QUFBeUIsOEJBQUksRUFBQyxRQUE5QjtBQUF1QyxtQ0FBUyxFQUFFN0IsY0FBYyxDQUFDRixnQkFBZixJQUFpQyxJQUFqQyxJQUF5Q0UsY0FBYyxDQUFDRixnQkFBZixDQUFnQytCLEtBQWhDLENBQXpDLEdBQWdGLHdCQUFoRixHQUF5RyxpQkFBM0o7QUFBOEssd0NBQVcsU0FBekw7QUFBbU0saUNBQU8sRUFBRTtBQUFBLG1DQUFNakIsY0FBYyxDQUFDaUIsS0FBRCxFQUFPNUMsUUFBUSxDQUFDLFlBQUQsQ0FBZixDQUFwQjtBQUFBLDJCQUE1TTtBQUFBLGtEQUFpUTtBQUFHLHFDQUFNO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FBalEsRUFBNFJBLFFBQVEsQ0FBQyxVQUFELENBQXBTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FESixFQUVJZSxjQUFjLENBQUNELFlBQWYsSUFBNkIsSUFBN0IsSUFBcUNDLGNBQWMsQ0FBQ0QsWUFBZixDQUE0QjhCLEtBQTVCLENBQXJDLGdCQUNEO0FBQU8sOEJBQUksRUFBQyxVQUFaO0FBQXdCLGlDQUFPLE1BQS9CO0FBQWdDLG1DQUFTLEVBQUMsUUFBMUM7QUFBbUQsNEJBQUUsRUFBRSxTQUFPQTtBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURDLGdCQUdEO0FBQU8sOEJBQUksRUFBQyxVQUFaO0FBQXdCLG1DQUFTLEVBQUMsUUFBbEM7QUFBMkMsNEJBQUUsRUFBRSxTQUFPQTtBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFEZ0M7QUFBQSxxQkFBaEMsQ0FESCxnQkFXTTtBQUFNLHlCQUFHLEVBQUMsaUJBQVY7QUFBNEIsK0JBQVMsRUFBQyxNQUF0QztBQUE2Qyx5QkFBRyxFQUFDLE1BQWpEO0FBQXdELDJCQUFLLEVBQUMsS0FBOUQ7QUFBb0UsMkJBQUssRUFBQztBQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWlA7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFIWSxlQW1CWjtBQUFLLDZCQUFTLEVBQUMsS0FBZjtBQUFBLDhCQUVRcEMsYUFBYSxDQUFDTixRQUFkLEdBQTBCZ0IsVUFBMUIsZ0JBQXVDO0FBQU0seUJBQUcsRUFBQyxrQkFBVjtBQUE2QiwrQkFBUyxFQUFDLE1BQXZDO0FBQThDLHlCQUFHLEVBQUMsTUFBbEQ7QUFBeUQsMkJBQUssRUFBQyxLQUEvRDtBQUFxRSwyQkFBSyxFQUFDO0FBQTNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFuQlksRUEwQkpWLGFBQWEsQ0FBQ04sUUFBZCxHQUNBTSxhQUFhLENBQUNGLGdCQUFkLGdCQUNBO0FBQUssNkJBQVMsRUFBQyxLQUFmO0FBQUEsMkNBQ0k7QUFBSywrQkFBUyxFQUFDLG9CQUFmO0FBQUEsNkNBQ0E7QUFBTSwyQkFBRyxFQUFDLGlCQUFWO0FBQTRCLGlDQUFTLEVBQUMsTUFBdEM7QUFBNkMsMkJBQUcsRUFBQyxNQUFqRDtBQUF3RCw2QkFBSyxFQUFDLEtBQTlEO0FBQW9FLDZCQUFLLEVBQUM7QUFBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURBLEdBT0FFLGFBQWEsQ0FBQ0gsUUFBZCxnQkFDSjtBQUFLLDZCQUFTLEVBQUMsS0FBZjtBQUFBLDJDQUNJO0FBQUssK0JBQVMsRUFBQyxvQkFBZjtBQUFBLDZDQUNJO0FBQVEsaUNBQVMsRUFBQyxjQUFsQjtBQUFrQywrQkFBTyxFQUFFZSxZQUEzQztBQUF5RCw0QkFBSSxFQUFDLFFBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREksR0FNSCxFQWRHLEdBZUgsRUF6Q087QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkosbUJBREo7QUFxRUg7O0dBdEt1QnRCLEs7O0tBQUFBLEs7QUE2S3JCO0FBK0NJLElBQU1tQixjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNsQixRQUFELEVBQVU4QyxPQUFWLEVBQXNCO0FBRWhELE1BQUdBLE9BQU8sSUFBRSxJQUFaLEVBQ0FBLE9BQU8sR0FBQyxFQUFSOztBQUNBLE1BQUc5QyxRQUFILEVBQ0E7QUFDRyxRQUFNK0MsSUFBSSxHQUFHL0MsUUFBUSxDQUFDNEMsR0FBVCxDQUFhLFVBQVVuQixDQUFWLEVBQVlvQixLQUFaLEVBQ3pCO0FBQ0ksMEJBQ0E7QUFBSyxpQkFBUyxFQUFDLGlDQUFmO0FBQUEsK0JBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLHNCQUFlcEIsQ0FBQyxDQUFDdUIsSUFBakIsQ0FBVjtBQUFvQyxlQUFLLEVBQUU7QUFBQyxxQkFBUTtBQUFULFdBQTNDO0FBQUEsaUNBQ0k7QUFBSyxxQkFBUyxFQUFDLE1BQWY7QUFBQSxvQ0FDSTtBQUFLLHVCQUFTLEVBQUMsU0FBZjtBQUFBLHFDQUNJO0FBQUsseUJBQVMsRUFBQyxjQUFmO0FBQThCLG1CQUFHLEVBQUV2QixDQUFDLENBQUN3QixHQUFyQztBQUEwQyxtQkFBRyxFQUFFeEIsQ0FBQyxDQUFDeUI7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFJSTtBQUFLLHVCQUFTLEVBQUMsV0FBZjtBQUFBLHNDQUNJO0FBQUkseUJBQVMsRUFBQywwQkFBZDtBQUFBLDBCQUEwQ3pCLENBQUMsQ0FBQ3lCO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosZUFFSTtBQUFPLHFCQUFLLEVBQUU7QUFBQ0MsdUJBQUssRUFBQztBQUFQLGlCQUFkO0FBQUEsMEJBQWtDMUIsQ0FBQyxDQUFDMkI7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGSixlQUdJO0FBQUcseUJBQVMsRUFBQyxXQUFiO0FBQUEsdUNBQ0k7QUFBSyx5Q0FBdUIsRUFBRTtBQUFFQywwQkFBTSxFQUFFNUIsQ0FBQyxDQUFDNkI7QUFBWjtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQTtBQWtCSCxLQXBCVyxDQUFiO0FBcUJDUixXQUFPLENBQUNTLElBQVIsQ0FBYVIsSUFBYjtBQUNILEdBeEJELE1BMEJBO0FBRUksUUFBTUEsSUFBSSxnQkFDTjtBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQXdCLFFBQUUsRUFBQyxRQUEzQjtBQUFBLDZCQUVBO0FBQUssaUJBQVMsRUFBQyxFQUFmO0FBQUEsK0JBRUk7QUFBSyxtQkFBUyxFQUFDLG9CQUFmO0FBQW9DLGNBQUksRUFBQyxPQUF6QztBQUFBLGtDQUNJO0FBQUkscUJBQVMsRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjs7QUFjRTtBQUNGRCxXQUFPLENBQUNTLElBQVIsQ0FBYVIsSUFBYjtBQUNIOztBQUNELFNBQVFELE9BQVI7QUFDRixDQWxESyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0cy4xMjdmNjFmMTg0MWQ4Njc3MmYxMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlICB9ICBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjsgXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5sZXQgcyA9IFtdO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0cyh7IHByb2R1Y3RzLCBjYXRlZ29yeX0pIHtcclxuICAgIFxyXG4gICAgY29uc3QgW3Byb2R1Y3RTYXRldHMsIHNldEFsbFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgcF9sb2FkZWQ6IHRydWUsXHJcbiAgICAgICAgcF9oYXZlRGF0YTogcHJvZHVjdHMuc3RhdHVzPT0xP3RydWU6ZmFsc2UsXHJcbiAgICAgICAgcF9pc01vcmU6IHRydWUsXHJcbiAgICAgICAgcF9pc01vcmVQcm9ncmVzczogZmFsc2UsXHJcbiAgICAgICAgcF9wYWdlOiAxLFxyXG4gICAgICAgIFxyXG4gICAgIH0pO1xyXG4gICAgIGNvbnN0IFtjYXRlZ29yeVNhdGV0cywgc2V0QWxsQ2F0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBjX2hhdmVDYXQ6Y2F0ZWdvcnkuc3RhdHVzPT0xP3RydWU6ZmFsc2UsXHJcbiAgICAgICAgY19jYXRlZ29yeSA6IGNhdGVnb3J5LnJlc3VsdCxcclxuICAgICAgICBjX2NhdENob29zZWRzdGF0IDogbnVsbCxcclxuICAgICAgICBjX2NhdENob29zZWQgOiBudWxsXHJcbiAgICAgICAgXHJcbiAgICAgfSk7XHJcbiAgICBjb25zdCBbcF9zaG93ZGF0YSwgc2V0RGl2ZGF0YV0gPSB1c2VTdGF0ZShhcHBlbmRQcm9kdWN0cyhwcm9kdWN0cy5yZXN1bHQsbnVsbCkpOyBcclxuICAgICBcclxuICAgIC8vICAgY29uc3QgW3BfbG9hZGVkLCBzZXRJc0xvYWRlZF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIC8vICAgY29uc3QgW3BfaGF2ZURhdGEsIHNldFBkYXRhXSA9IHVzZVN0YXRlKHByb2R1Y3RzLnN0YXR1cz09MT90cnVlOmZhbHNlKTtcclxuICAgIC8vICAgY29uc3QgW3BfaXNNb3JlLCBzZXRJc01vcmVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICAvLyAgIGNvbnN0IFtwX2lzTW9yZVByb2dyZXNzLCBzZXRJc01vcmVQcm9ncmVzc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAvLyAgIGNvbnN0IFtwX3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcbiAgICAvLyAgIGNvbnN0IFtwX3Nob3dkYXRhLCBzZXREaXZkYXRhXSA9IHVzZVN0YXRlKGFwcGVuZERhdGEocHJvZHVjdHMucmVzdWx0LG51bGwpKTtcclxuICAgXHJcbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkTW9yZURhdGEoZXZlbnQpXHJcbiAgICB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgY3N0YXRlID0gY2F0ZWdvcnlTYXRldHMuY19jYXRDaG9vc2VkO1xyXG4gICAgICAgIHNldEFsbFZhbHVlcyh7Li4ucHJvZHVjdFNhdGV0cyxwX2lzTW9yZVByb2dyZXNzOnRydWV9KTtcclxuICAgICAgICBsZXQgcCA9IHByb2R1Y3RTYXRldHMucF9wYWdlKzE7XHJcbiAgICAgICAgbGV0IG1vcmVEYXRhID0gYXdhaXQgZmV0Y2hNb3JlRGF0YShwLGNzdGF0ZSk7XHJcbiAgICAgICAgc2V0RGl2ZGF0YShhcHBlbmRQcm9kdWN0cyhtb3JlRGF0YS5yZXN1bHQscF9zaG93ZGF0YSkpO1xyXG4gICAgICAgIGlmKG1vcmVEYXRhLnN0YXR1cz09MSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNldEFsbFZhbHVlcyh7Li4ucHJvZHVjdFNhdGV0cyxwX2lzTW9yZVByb2dyZXNzOmZhbHNlLHBfcGFnZTpwLHBfaGF2ZURhdGE6dHJ1ZSxwX2lzTW9yZTp0cnVlfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNldEFsbFZhbHVlcyh7Li4ucHJvZHVjdFNhdGV0cyxwX2lzTW9yZVByb2dyZXNzOmZhbHNlLHBfcGFnZTpwLHBfaGF2ZURhdGE6ZmFsc2UscF9pc01vcmU6ZmFsc2V9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUNhdENsaWNrKGksY19pZClcclxuICAgIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBjc3RhdGUgPSBjYXRlZ29yeVNhdGV0cy5jX2NhdENob29zZWQ7XHJcbiAgICAgICAgbGV0IGNzdGF0ZXN0YXQgPSAgY2F0ZWdvcnlTYXRldHMuY19jYXRDaG9vc2Vkc3RhdDtcclxuICAgICAgICBsZXQgcCA9IDE7XHJcbiAgICAgICAgcyA9IFtdO1xyXG4gICAgICAgXHJcbiAgICAgICAgaWYoY3N0YXRlc3RhdCA9PSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY3N0YXRlc3RhdCA9IFtdO1xyXG4gICAgICAgICAgICBjc3RhdGVzdGF0W2ldID0gICB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGNzdGF0ZXN0YXRbaV0gPSAhY3N0YXRlc3RhdFtpXSA7XHJcbiAgICAgICAgaWYoY3N0YXRlPT1udWxsKVxyXG4gICAgICAgICAgICBjc3RhdGUgPSBbXTtcclxuICAgICAgICBjc3RhdGVbaV0gPSBjc3RhdGVzdGF0W2ldID8gY19pZCA6IG51bGw7XHJcbiAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBzZXRBbGxWYWx1ZXMoey4uLnByb2R1Y3RTYXRldHMscF9sb2FkZWQ6ZmFsc2UscF9pc01vcmVQcm9ncmVzczp0cnVlLHBfcGFnZTpwfSk7XHJcbiAgICAgICAgbGV0IG1vcmVEYXRhID0gYXdhaXQgZmV0Y2hNb3JlRGF0YShwLGNzdGF0ZSk7XHJcbiAgICAgICAgc2V0QWxsQ2F0VmFsdWVzKHsuLi5jYXRlZ29yeVNhdGV0cyxjX2NhdENob29zZWQ6Y3N0YXRlLGNfY2F0Q2hvb3NlZHN0YXQ6Y3N0YXRlc3RhdH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNldERpdmRhdGEoYXBwZW5kUHJvZHVjdHMobW9yZURhdGEucmVzdWx0LHMpKTtcclxuICAgICAgICBpZihtb3JlRGF0YS5zdGF0dXM9PTEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZXRBbGxWYWx1ZXMoey4uLnByb2R1Y3RTYXRldHMscF9pc01vcmVQcm9ncmVzczpmYWxzZSxwX3BhZ2U6cCxwX2hhdmVEYXRhOnRydWUscF9pc01vcmU6dHJ1ZX0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZXRBbGxWYWx1ZXMoey4uLnByb2R1Y3RTYXRldHMscF9pc01vcmVQcm9ncmVzczpmYWxzZSxwX3BhZ2U6cCxwX2hhdmVEYXRhOmZhbHNlLHBfaXNNb3JlOmZhbHNlfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hNb3JlRGF0YShwYWdlLGNzdGF0ZSlcclxuICAgIHtcclxuICAgICAgICBsZXQgY2F0U2VsZWN0ZWQgPSBjc3RhdGU9PW51bGw/bnVsbDpjc3RhdGUuam9pbignLCcpO1xyXG4gICAgICAgIGxldCBhcGlVcmw7XHJcbiAgICAgICAgYXBpVXJsID0gJ2h0dHBzOi8vYWRtaW4uc3BlY2lhbGlzdG1hdHRyZXNzc3lzdGVtcy5jb20vYXBpL1Byb2R1Y3QvcHJvZHVjdCc7XHJcbiAgICAgICAgbGV0IHByb2R1Y3RzQXJyYXkgPSBhd2FpdCBmZXRjaChhcGlVcmwsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsIFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XCJjYXRlc1wiOmNhdFNlbGVjdGVkLFwicGFnZVwiOnBhZ2V9KSwgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBwcm9kdWN0c0FycmF5Lmpzb24oKTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAvLyBwYXJzZXMgSlNPTiByZXNwb25zZSBpbnRvIG5hdGl2ZSBKYXZhU2NyaXB0IG9iamVjdHNcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBheXVzZS1iYW5uZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgbWItNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlByb2R1Y3RzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkEgVU5JUVVFIFBSRVNTVVJFIENBUkUgU1lTVEVNPC9wPiAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBwcm9kdWN0cy1zZWNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PkZpbHRlciBieTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBmaWx0ZXJcIj5cclxuICAgICAgICAgICAge2NhdGVnb3J5U2F0ZXRzLmNfaGF2ZUNhdD9cclxuICAgICAgICAgICAgICAgIChjYXRlZ29yeVNhdGV0cy5jX2NhdGVnb3J5KS5tYXAoKGNhdGVnb3J5LCBpbmRleCkgPT4gKCAgIFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnV0dG9uLWNoZWNrYm94IGlucHV0LWdyb3VwLWJ0blwiIGlkPXtcImJ0bnNwYW5cIitpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD17XCJidG5cIitpbmRleH0gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17Y2F0ZWdvcnlTYXRldHMuY19jYXRDaG9vc2Vkc3RhdCE9bnVsbCAmJiBjYXRlZ29yeVNhdGV0cy5jX2NhdENob29zZWRzdGF0W2luZGV4XT8nYnRuIGJ0bi1wcmltYXJ5IGFjdGl2ZSc6J2J0biBidG4tZGVmYXVsdCd9IGRhdGEtY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gaGFuZGxlQ2F0Q2xpY2soaW5kZXgsY2F0ZWdvcnlbJ2NhdGdvcnlfaWQnXSl9ID48aSBjbGFzcz1cInN0YXRlLWljb25cIj48L2k+e2NhdGVnb3J5WydjYXRlZ29yeSddfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAge2NhdGVnb3J5U2F0ZXRzLmNfY2F0Q2hvb3NlZCE9bnVsbCAmJiBjYXRlZ29yeVNhdGV0cy5jX2NhdENob29zZWRbaW5kZXhdP1xyXG4gICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiICBjaGVja2VkIGNsYXNzTmFtZT1cImhpZGRlblwiIGlkPXtcImNib3hcIitpbmRleH0gLz5cclxuICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAgY2xhc3NOYW1lPVwiaGlkZGVuXCIgaWQ9e1wiY2JveFwiK2luZGV4fSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApKTo8aW1nICBzcmM9XCJpbWcvc3Bpbm5lci5naWZcIiBjbGFzc05hbWU9XCJ3YWl0XCIgYWx0PVwid2FpdFwiIHdpZHRoPVwiMTAwXCIgYWxpZ249XCJjZW50ZXJcIiAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFNhdGV0cy5wX2xvYWRlZCA/ICBwX3Nob3dkYXRhIDogPGltZyAgc3JjPVwiL2ltZy9zcGlubmVyLmdpZlwiIGNsYXNzTmFtZT1cIndhaXRcIiBhbHQ9XCJ3YWl0XCIgd2lkdGg9XCIxMDBcIiBhbGlnbj1cImNlbnRlclwiIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFNhdGV0cy5wX2xvYWRlZD9cclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0U2F0ZXRzLnBfaXNNb3JlUHJvZ3Jlc3MgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIHNyYz1cImltZy9zcGlubmVyLmdpZlwiIGNsYXNzTmFtZT1cIndhaXRcIiBhbHQ9XCJ3YWl0XCIgd2lkdGg9XCIxMDBcIiBhbGlnbj1cImNlbnRlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgIChwcm9kdWN0U2F0ZXRzLnBfaXNNb3JlP1xyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBsb2FkLWJ0blwiICBvbkNsaWNrPXtsb2FkTW9yZURhdGF9IHR5cGU9XCJidXR0b25cIiA+TG9hZCBNb3JlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDonJylcclxuICAgICAgICAgICAgICAgIDonJ1xyXG4gICAgICAgICAgICAgICAgfSBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG5cclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICAgIC8vIEZldGNoIGRhdGEgZnJvbSBleHRlcm5hbCBBUElcclxuICAgIGNvbnN0IHByb2R1Y3RzICA9IGF3YWl0IGdldFByb2R1Y3RzKG51bGwsMSk7XHJcbiAgICBjb25zdCBjYXRlZ29yeSAgPSBhd2FpdCBnZXRDYXRlZ29yaWVzKCk7XHJcbiAgICBcclxuICAgIHJldHVybiB7IHByb3BzOiB7IHByb2R1Y3RzICxjYXRlZ29yeSB9IH07XHJcbiAgfTtcclxuIFxyXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RzIChjYXRDaG9vc2VkID0gbnVsbCxwYWdlKVxyXG57XHJcbiAgXHJcbiAgbGV0IGFwaVVybDtcclxuICBhcGlVcmwgPSAnaHR0cHM6Ly9hZG1pbi5zcGVjaWFsaXN0bWF0dHJlc3NzeXN0ZW1zLmNvbS9hcGkvUHJvZHVjdC9wcm9kdWN0JztcclxuICBcclxuICBsZXQgcHJvZHVjdHNBcnJheSA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsIC8vICpHRVQsIFBPU1QsIFBVVCwgREVMRVRFLCBldGMuXHJcbiAgICBtb2RlOiAnY29ycycsIC8vIG5vLWNvcnMsICpjb3JzLCBzYW1lLW9yaWdpblxyXG4gICAgY2FjaGU6ICduby1jYWNoZScsIC8vICpkZWZhdWx0LCBuby1jYWNoZSwgcmVsb2FkLCBmb3JjZS1jYWNoZSwgb25seS1pZi1jYWNoZWRcclxuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLCAvLyBpbmNsdWRlLCAqc2FtZS1vcmlnaW4sIG9taXRcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAvLyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcbiAgICB9LFxyXG4gICAgcmVkaXJlY3Q6ICdmb2xsb3cnLCAvLyBtYW51YWwsICpmb2xsb3csIGVycm9yXHJcbiAgICByZWZlcnJlclBvbGljeTogJ25vLXJlZmVycmVyJywgLy8gbm8tcmVmZXJyZXIsICpuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZSwgb3JpZ2luLCBvcmlnaW4td2hlbi1jcm9zcy1vcmlnaW4sIHNhbWUtb3JpZ2luLCBzdHJpY3Qtb3JpZ2luLCBzdHJpY3Qtb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luLCB1bnNhZmUtdXJsXHJcbiAgICBib2R5OiB7XCJjYXRlc1wiOmNhdENob29zZWQsXCJwYWdlXCI6cGFnZX0sIC8vIGJvZHkgZGF0YSB0eXBlIG11c3QgbWF0Y2ggXCJDb250ZW50LVR5cGVcIiBoZWFkZXJcclxuICB9KTtcclxuICByZXR1cm4gcHJvZHVjdHNBcnJheS5qc29uKCk7IC8vIHBhcnNlcyBKU09OIHJlc3BvbnNlIGludG8gbmF0aXZlIEphdmFTY3JpcHQgb2JqZWN0c1xyXG5cclxufVxyXG5hc3luYyBmdW5jdGlvbiBnZXRDYXRlZ29yaWVzICgpXHJcbntcclxuICBcclxuICBsZXQgYXBpVXJsO1xyXG4gIGFwaVVybCA9ICdodHRwczovL2FkbWluLnNwZWNpYWxpc3RtYXR0cmVzc3N5c3RlbXMuY29tL2FwaS9Qcm9kdWN0L2NhdGVnb3J5JztcclxuICBcclxuICBsZXQgY2F0ZWdvcnlBcnJheSA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xyXG4gICAgbWV0aG9kOiAnR0VUJywgLy8gKkdFVCwgUE9TVCwgUFVULCBERUxFVEUsIGV0Yy5cclxuICAgIG1vZGU6ICdjb3JzJywgLy8gbm8tY29ycywgKmNvcnMsIHNhbWUtb3JpZ2luXHJcbiAgICBjYWNoZTogJ25vLWNhY2hlJywgLy8gKmRlZmF1bHQsIG5vLWNhY2hlLCByZWxvYWQsIGZvcmNlLWNhY2hlLCBvbmx5LWlmLWNhY2hlZFxyXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsIC8vIGluY2x1ZGUsICpzYW1lLW9yaWdpbiwgb21pdFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgIC8vICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcclxuICAgIH0sXHJcbiAgICByZWRpcmVjdDogJ2ZvbGxvdycsIC8vIG1hbnVhbCwgKmZvbGxvdywgZXJyb3JcclxuICAgIHJlZmVycmVyUG9saWN5OiAnbm8tcmVmZXJyZXInIC8vIG5vLXJlZmVycmVyLCAqbm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGUsIG9yaWdpbiwgb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luLCBzYW1lLW9yaWdpbiwgc3RyaWN0LW9yaWdpbiwgc3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpbiwgdW5zYWZlLXVybFxyXG4gICBcclxuICB9KTtcclxuICByZXR1cm4gY2F0ZWdvcnlBcnJheS5qc29uKCk7IC8vIHBhcnNlcyBKU09OIHJlc3BvbnNlIGludG8gbmF0aXZlIEphdmFTY3JpcHQgb2JqZWN0c1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFwcGVuZFByb2R1Y3RzID0gKHByb2R1Y3RzLGRpdkRhdGEpID0+IHtcclxuICAgIFxyXG4gICAgaWYoZGl2RGF0YT09bnVsbClcclxuICAgIGRpdkRhdGE9W107XHJcbiAgICBpZihwcm9kdWN0cylcclxuICAgIHtcclxuICAgICAgIGNvbnN0IG1hcDEgPSBwcm9kdWN0cy5tYXAoZnVuY3Rpb24gKHAsaW5kZXgpIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLWxnLTQgY29sLW1kLTYgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2R1Y3RzLyR7cC5zbHVnfWB9ICBzdHlsZT17e1wiY29sb3JcIjpcImJsYWNrXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctc2VjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIHNyYz17cC5pbWd9IGFsdD17cC50aXRsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSBwcm9kdWN0LXRpdGxlXCI+e3AudGl0bGV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBzdHlsZT17e2NvbG9yOicjNjQyNTY4J319PntwLmNhdG5hbWV9PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwLnNtYWxsX2Rlc2NyaXB0aW9ufX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGRpdkRhdGEucHVzaChtYXAxKTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBtYXAxID0gIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIiBpZD1cIm5vTW9yZVwiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImFsZXJ0LWhlYWRpbmdcIj5Tb3JyeSE8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPk5vIHByb2R1Y3RzIHdlcmUgZm91bmQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTs7XHJcbiAgICAgICAgZGl2RGF0YS5wdXNoKG1hcDEpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChkaXZEYXRhKTsgXHJcbiB9OyJdLCJzb3VyY2VSb290IjoiIn0=