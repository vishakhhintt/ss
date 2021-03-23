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
                className: "card-title",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvaW5kZXguanMiXSwibmFtZXMiOlsicyIsIlBvc3RzIiwicHJvZHVjdHMiLCJjYXRlZ29yeSIsInVzZVN0YXRlIiwicF9sb2FkZWQiLCJwX2hhdmVEYXRhIiwic3RhdHVzIiwicF9pc01vcmUiLCJwX2lzTW9yZVByb2dyZXNzIiwicF9wYWdlIiwicHJvZHVjdFNhdGV0cyIsInNldEFsbFZhbHVlcyIsImNfaGF2ZUNhdCIsImNfY2F0ZWdvcnkiLCJyZXN1bHQiLCJjX2NhdENob29zZWRzdGF0IiwiY19jYXRDaG9vc2VkIiwiY2F0ZWdvcnlTYXRldHMiLCJzZXRBbGxDYXRWYWx1ZXMiLCJhcHBlbmRQcm9kdWN0cyIsInBfc2hvd2RhdGEiLCJzZXREaXZkYXRhIiwibG9hZE1vcmVEYXRhIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNzdGF0ZSIsInAiLCJmZXRjaE1vcmVEYXRhIiwibW9yZURhdGEiLCJoYW5kbGVDYXRDbGljayIsImkiLCJjX2lkIiwiY3N0YXRlc3RhdCIsInBhZ2UiLCJjYXRTZWxlY3RlZCIsImpvaW4iLCJhcGlVcmwiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInByb2R1Y3RzQXJyYXkiLCJqc29uIiwibWFwIiwiaW5kZXgiLCJkaXZEYXRhIiwibWFwMSIsInNsdWciLCJpbWciLCJ0aXRsZSIsImNvbG9yIiwiY2F0bmFtZSIsIl9faHRtbCIsInNtYWxsX2Rlc2NyaXB0aW9uIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLENBQUMsR0FBRyxFQUFSOztBQUNlLFNBQVNDLEtBQVQsT0FBc0M7QUFBQTs7QUFBQTs7QUFBQSxNQUFyQkMsUUFBcUIsUUFBckJBLFFBQXFCO0FBQUEsTUFBWEMsUUFBVyxRQUFYQSxRQUFXOztB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QWNFO0FBQ0ZELFdBQU8sQ0FBQ1MsSUFBUixDQUFhUixJQUFiO0FBQ0g7O0FBQ0QsU0FBUUQsT0FBUjtBQUNGLENBbERLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3RzLmExYTAzM2M5OWY1MGIzOGY4NTM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgIH0gIGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiOyBcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmxldCBzID0gW107XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RzKHsgcHJvZHVjdHMsIGNhdGVnb3J5fSkge1xyXG4gICAgXHJcbiAgICBjb25zdCBbcHJvZHVjdFNhdGV0cywgc2V0QWxsVmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBwX2xvYWRlZDogdHJ1ZSxcclxuICAgICAgICBwX2hhdmVEYXRhOiBwcm9kdWN0cy5zdGF0dXM9PTE/dHJ1ZTpmYWxzZSxcclxuICAgICAgICBwX2lzTW9yZTogdHJ1ZSxcclxuICAgICAgICBwX2lzTW9yZVByb2dyZXNzOiBmYWxzZSxcclxuICAgICAgICBwX3BhZ2U6IDEsXHJcbiAgICAgICAgXHJcbiAgICAgfSk7XHJcbiAgICAgY29uc3QgW2NhdGVnb3J5U2F0ZXRzLCBzZXRBbGxDYXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGNfaGF2ZUNhdDpjYXRlZ29yeS5zdGF0dXM9PTE/dHJ1ZTpmYWxzZSxcclxuICAgICAgICBjX2NhdGVnb3J5IDogY2F0ZWdvcnkucmVzdWx0LFxyXG4gICAgICAgIGNfY2F0Q2hvb3NlZHN0YXQgOiBudWxsLFxyXG4gICAgICAgIGNfY2F0Q2hvb3NlZCA6IG51bGxcclxuICAgICAgICBcclxuICAgICB9KTtcclxuICAgIGNvbnN0IFtwX3Nob3dkYXRhLCBzZXREaXZkYXRhXSA9IHVzZVN0YXRlKGFwcGVuZFByb2R1Y3RzKHByb2R1Y3RzLnJlc3VsdCxudWxsKSk7IFxyXG4gICAgIFxyXG4gICAgLy8gICBjb25zdCBbcF9sb2FkZWQsIHNldElzTG9hZGVkXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgLy8gICBjb25zdCBbcF9oYXZlRGF0YSwgc2V0UGRhdGFdID0gdXNlU3RhdGUocHJvZHVjdHMuc3RhdHVzPT0xP3RydWU6ZmFsc2UpO1xyXG4gICAgLy8gICBjb25zdCBbcF9pc01vcmUsIHNldElzTW9yZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIC8vICAgY29uc3QgW3BfaXNNb3JlUHJvZ3Jlc3MsIHNldElzTW9yZVByb2dyZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIC8vICAgY29uc3QgW3BfcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIC8vICAgY29uc3QgW3Bfc2hvd2RhdGEsIHNldERpdmRhdGFdID0gdXNlU3RhdGUoYXBwZW5kRGF0YShwcm9kdWN0cy5yZXN1bHQsbnVsbCkpO1xyXG4gICBcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRNb3JlRGF0YShldmVudClcclxuICAgIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBjc3RhdGUgPSBjYXRlZ29yeVNhdGV0cy5jX2NhdENob29zZWQ7XHJcbiAgICAgICAgc2V0QWxsVmFsdWVzKHsuLi5wcm9kdWN0U2F0ZXRzLHBfaXNNb3JlUHJvZ3Jlc3M6dHJ1ZX0pO1xyXG4gICAgICAgIGxldCBwID0gcHJvZHVjdFNhdGV0cy5wX3BhZ2UrMTtcclxuICAgICAgICBsZXQgbW9yZURhdGEgPSBhd2FpdCBmZXRjaE1vcmVEYXRhKHAsY3N0YXRlKTtcclxuICAgICAgICBzZXREaXZkYXRhKGFwcGVuZFByb2R1Y3RzKG1vcmVEYXRhLnJlc3VsdCxwX3Nob3dkYXRhKSk7XHJcbiAgICAgICAgaWYobW9yZURhdGEuc3RhdHVzPT0xKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2V0QWxsVmFsdWVzKHsuLi5wcm9kdWN0U2F0ZXRzLHBfaXNNb3JlUHJvZ3Jlc3M6ZmFsc2UscF9wYWdlOnAscF9oYXZlRGF0YTp0cnVlLHBfaXNNb3JlOnRydWV9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2V0QWxsVmFsdWVzKHsuLi5wcm9kdWN0U2F0ZXRzLHBfaXNNb3JlUHJvZ3Jlc3M6ZmFsc2UscF9wYWdlOnAscF9oYXZlRGF0YTpmYWxzZSxwX2lzTW9yZTpmYWxzZX0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlQ2F0Q2xpY2soaSxjX2lkKVxyXG4gICAge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGNzdGF0ZSA9IGNhdGVnb3J5U2F0ZXRzLmNfY2F0Q2hvb3NlZDtcclxuICAgICAgICBsZXQgY3N0YXRlc3RhdCA9ICBjYXRlZ29yeVNhdGV0cy5jX2NhdENob29zZWRzdGF0O1xyXG4gICAgICAgIGxldCBwID0gMTtcclxuICAgICAgICBzID0gW107XHJcbiAgICAgICBcclxuICAgICAgICBpZihjc3RhdGVzdGF0ID09IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjc3RhdGVzdGF0ID0gW107XHJcbiAgICAgICAgICAgIGNzdGF0ZXN0YXRbaV0gPSAgIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgY3N0YXRlc3RhdFtpXSA9ICFjc3RhdGVzdGF0W2ldIDtcclxuICAgICAgICBpZihjc3RhdGU9PW51bGwpXHJcbiAgICAgICAgICAgIGNzdGF0ZSA9IFtdO1xyXG4gICAgICAgIGNzdGF0ZVtpXSA9IGNzdGF0ZXN0YXRbaV0gPyBjX2lkIDogbnVsbDtcclxuICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHNldEFsbFZhbHVlcyh7Li4ucHJvZHVjdFNhdGV0cyxwX2xvYWRlZDpmYWxzZSxwX2lzTW9yZVByb2dyZXNzOnRydWUscF9wYWdlOnB9KTtcclxuICAgICAgICBsZXQgbW9yZURhdGEgPSBhd2FpdCBmZXRjaE1vcmVEYXRhKHAsY3N0YXRlKTtcclxuICAgICAgICBzZXRBbGxDYXRWYWx1ZXMoey4uLmNhdGVnb3J5U2F0ZXRzLGNfY2F0Q2hvb3NlZDpjc3RhdGUsY19jYXRDaG9vc2Vkc3RhdDpjc3RhdGVzdGF0fSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0RGl2ZGF0YShhcHBlbmRQcm9kdWN0cyhtb3JlRGF0YS5yZXN1bHQscykpO1xyXG4gICAgICAgIGlmKG1vcmVEYXRhLnN0YXR1cz09MSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNldEFsbFZhbHVlcyh7Li4ucHJvZHVjdFNhdGV0cyxwX2lzTW9yZVByb2dyZXNzOmZhbHNlLHBfcGFnZTpwLHBfaGF2ZURhdGE6dHJ1ZSxwX2lzTW9yZTp0cnVlfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNldEFsbFZhbHVlcyh7Li4ucHJvZHVjdFNhdGV0cyxwX2lzTW9yZVByb2dyZXNzOmZhbHNlLHBfcGFnZTpwLHBfaGF2ZURhdGE6ZmFsc2UscF9pc01vcmU6ZmFsc2V9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaE1vcmVEYXRhKHBhZ2UsY3N0YXRlKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBjYXRTZWxlY3RlZCA9IGNzdGF0ZT09bnVsbD9udWxsOmNzdGF0ZS5qb2luKCcsJyk7XHJcbiAgICAgICAgbGV0IGFwaVVybDtcclxuICAgICAgICBhcGlVcmwgPSAnaHR0cHM6Ly9hZG1pbi5zcGVjaWFsaXN0bWF0dHJlc3NzeXN0ZW1zLmNvbS9hcGkvUHJvZHVjdC9wcm9kdWN0JztcclxuICAgICAgICBsZXQgcHJvZHVjdHNBcnJheSA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJywgXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcImNhdGVzXCI6Y2F0U2VsZWN0ZWQsXCJwYWdlXCI6cGFnZX0pLCBcclxuICAgICAgICB9KTtcclxuICAgICAgcmV0dXJuIHByb2R1Y3RzQXJyYXkuanNvbigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgIC8vIHBhcnNlcyBKU09OIHJlc3BvbnNlIGludG8gbmF0aXZlIEphdmFTY3JpcHQgb2JqZWN0c1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICBcclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicGF5dXNlLWJhbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBtYi01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+UHJvZHVjdHM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+QSBVTklRVUUgUFJFU1NVUkUgQ0FSRSBTWVNURU08L3A+ICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHByb2R1Y3RzLXNlY1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+RmlsdGVyIGJ5PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIGZpbHRlclwiPlxyXG4gICAgICAgICAgICB7Y2F0ZWdvcnlTYXRldHMuY19oYXZlQ2F0P1xyXG4gICAgICAgICAgICAgICAgKGNhdGVnb3J5U2F0ZXRzLmNfY2F0ZWdvcnkpLm1hcCgoY2F0ZWdvcnksIGluZGV4KSA9PiAoICAgXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidXR0b24tY2hlY2tib3ggaW5wdXQtZ3JvdXAtYnRuXCIgaWQ9e1wiYnRuc3BhblwiK2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPXtcImJ0blwiK2luZGV4fSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtjYXRlZ29yeVNhdGV0cy5jX2NhdENob29zZWRzdGF0IT1udWxsICYmIGNhdGVnb3J5U2F0ZXRzLmNfY2F0Q2hvb3NlZHN0YXRbaW5kZXhdPydidG4gYnRuLXByaW1hcnkgYWN0aXZlJzonYnRuIGJ0bi1kZWZhdWx0J30gZGF0YS1jb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDYXRDbGljayhpbmRleCxjYXRlZ29yeVsnY2F0Z29yeV9pZCddKX0gPjxpIGNsYXNzPVwic3RhdGUtaWNvblwiPjwvaT57Y2F0ZWdvcnlbJ2NhdGVnb3J5J119PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnlTYXRldHMuY19jYXRDaG9vc2VkIT1udWxsICYmIGNhdGVnb3J5U2F0ZXRzLmNfY2F0Q2hvb3NlZFtpbmRleF0/XHJcbiAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgIGNoZWNrZWQgY2xhc3NOYW1lPVwiaGlkZGVuXCIgaWQ9e1wiY2JveFwiK2luZGV4fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiICBjbGFzc05hbWU9XCJoaWRkZW5cIiBpZD17XCJjYm94XCIraW5kZXh9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICkpOjxpbWcgIHNyYz1cImltZy9zcGlubmVyLmdpZlwiIGNsYXNzTmFtZT1cIndhaXRcIiBhbHQ9XCJ3YWl0XCIgd2lkdGg9XCIxMDBcIiBhbGlnbj1cImNlbnRlclwiIC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0U2F0ZXRzLnBfbG9hZGVkID8gIHBfc2hvd2RhdGEgOiA8aW1nICBzcmM9XCIvaW1nL3NwaW5uZXIuZ2lmXCIgY2xhc3NOYW1lPVwid2FpdFwiIGFsdD1cIndhaXRcIiB3aWR0aD1cIjEwMFwiIGFsaWduPVwiY2VudGVyXCIgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0U2F0ZXRzLnBfbG9hZGVkP1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RTYXRldHMucF9pc01vcmVQcm9ncmVzcyA/XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgc3JjPVwiaW1nL3NwaW5uZXIuZ2lmXCIgY2xhc3NOYW1lPVwid2FpdFwiIGFsdD1cIndhaXRcIiB3aWR0aD1cIjEwMFwiIGFsaWduPVwiY2VudGVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgKHByb2R1Y3RTYXRldHMucF9pc01vcmU/XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGxvYWQtYnRuXCIgIG9uQ2xpY2s9e2xvYWRNb3JlRGF0YX0gdHlwZT1cImJ1dHRvblwiID5Mb2FkIE1vcmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgOicnKVxyXG4gICAgICAgICAgICAgICAgOicnXHJcbiAgICAgICAgICAgICAgICB9IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcblxyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gICAgLy8gRmV0Y2ggZGF0YSBmcm9tIGV4dGVybmFsIEFQSVxyXG4gICAgY29uc3QgcHJvZHVjdHMgID0gYXdhaXQgZ2V0UHJvZHVjdHMobnVsbCwxKTtcclxuICAgIGNvbnN0IGNhdGVnb3J5ICA9IGF3YWl0IGdldENhdGVnb3JpZXMoKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgcHJvZHVjdHMgLGNhdGVnb3J5IH0gfTtcclxuICB9O1xyXG4gXHJcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdHMgKGNhdENob29zZWQgPSBudWxsLHBhZ2UpXHJcbntcclxuICBcclxuICBsZXQgYXBpVXJsO1xyXG4gIGFwaVVybCA9ICdodHRwczovL2FkbWluLnNwZWNpYWxpc3RtYXR0cmVzc3N5c3RlbXMuY29tL2FwaS9Qcm9kdWN0L3Byb2R1Y3QnO1xyXG4gIFxyXG4gIGxldCBwcm9kdWN0c0FycmF5ID0gYXdhaXQgZmV0Y2goYXBpVXJsLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJywgLy8gKkdFVCwgUE9TVCwgUFVULCBERUxFVEUsIGV0Yy5cclxuICAgIG1vZGU6ICdjb3JzJywgLy8gbm8tY29ycywgKmNvcnMsIHNhbWUtb3JpZ2luXHJcbiAgICBjYWNoZTogJ25vLWNhY2hlJywgLy8gKmRlZmF1bHQsIG5vLWNhY2hlLCByZWxvYWQsIGZvcmNlLWNhY2hlLCBvbmx5LWlmLWNhY2hlZFxyXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsIC8vIGluY2x1ZGUsICpzYW1lLW9yaWdpbiwgb21pdFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgIC8vICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcclxuICAgIH0sXHJcbiAgICByZWRpcmVjdDogJ2ZvbGxvdycsIC8vIG1hbnVhbCwgKmZvbGxvdywgZXJyb3JcclxuICAgIHJlZmVycmVyUG9saWN5OiAnbm8tcmVmZXJyZXInLCAvLyBuby1yZWZlcnJlciwgKm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlLCBvcmlnaW4sIG9yaWdpbi13aGVuLWNyb3NzLW9yaWdpbiwgc2FtZS1vcmlnaW4sIHN0cmljdC1vcmlnaW4sIHN0cmljdC1vcmlnaW4td2hlbi1jcm9zcy1vcmlnaW4sIHVuc2FmZS11cmxcclxuICAgIGJvZHk6IHtcImNhdGVzXCI6Y2F0Q2hvb3NlZCxcInBhZ2VcIjpwYWdlfSwgLy8gYm9keSBkYXRhIHR5cGUgbXVzdCBtYXRjaCBcIkNvbnRlbnQtVHlwZVwiIGhlYWRlclxyXG4gIH0pO1xyXG4gIHJldHVybiBwcm9kdWN0c0FycmF5Lmpzb24oKTsgLy8gcGFyc2VzIEpTT04gcmVzcG9uc2UgaW50byBuYXRpdmUgSmF2YVNjcmlwdCBvYmplY3RzXHJcblxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGdldENhdGVnb3JpZXMgKClcclxue1xyXG4gIFxyXG4gIGxldCBhcGlVcmw7XHJcbiAgYXBpVXJsID0gJ2h0dHBzOi8vYWRtaW4uc3BlY2lhbGlzdG1hdHRyZXNzc3lzdGVtcy5jb20vYXBpL1Byb2R1Y3QvY2F0ZWdvcnknO1xyXG4gIFxyXG4gIGxldCBjYXRlZ29yeUFycmF5ID0gYXdhaXQgZmV0Y2goYXBpVXJsLCB7XHJcbiAgICBtZXRob2Q6ICdHRVQnLCAvLyAqR0VULCBQT1NULCBQVVQsIERFTEVURSwgZXRjLlxyXG4gICAgbW9kZTogJ2NvcnMnLCAvLyBuby1jb3JzLCAqY29ycywgc2FtZS1vcmlnaW5cclxuICAgIGNhY2hlOiAnbm8tY2FjaGUnLCAvLyAqZGVmYXVsdCwgbm8tY2FjaGUsIHJlbG9hZCwgZm9yY2UtY2FjaGUsIG9ubHktaWYtY2FjaGVkXHJcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJywgLy8gaW5jbHVkZSwgKnNhbWUtb3JpZ2luLCBvbWl0XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgLy8gJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG4gICAgfSxcclxuICAgIHJlZGlyZWN0OiAnZm9sbG93JywgLy8gbWFudWFsLCAqZm9sbG93LCBlcnJvclxyXG4gICAgcmVmZXJyZXJQb2xpY3k6ICduby1yZWZlcnJlcicgLy8gbm8tcmVmZXJyZXIsICpuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZSwgb3JpZ2luLCBvcmlnaW4td2hlbi1jcm9zcy1vcmlnaW4sIHNhbWUtb3JpZ2luLCBzdHJpY3Qtb3JpZ2luLCBzdHJpY3Qtb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luLCB1bnNhZmUtdXJsXHJcbiAgIFxyXG4gIH0pO1xyXG4gIHJldHVybiBjYXRlZ29yeUFycmF5Lmpzb24oKTsgLy8gcGFyc2VzIEpTT04gcmVzcG9uc2UgaW50byBuYXRpdmUgSmF2YVNjcmlwdCBvYmplY3RzXHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYXBwZW5kUHJvZHVjdHMgPSAocHJvZHVjdHMsZGl2RGF0YSkgPT4ge1xyXG4gICAgXHJcbiAgICBpZihkaXZEYXRhPT1udWxsKVxyXG4gICAgZGl2RGF0YT1bXTtcclxuICAgIGlmKHByb2R1Y3RzKVxyXG4gICAge1xyXG4gICAgICAgY29uc3QgbWFwMSA9IHByb2R1Y3RzLm1hcChmdW5jdGlvbiAocCxpbmRleCkgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbGctNCBjb2wtbWQtNiBkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdHMvJHtwLnNsdWd9YH0gIHN0eWxlPXt7XCJjb2xvclwiOlwiYmxhY2tcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1zZWNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIgc3JjPXtwLmltZ30gYWx0PXtwLnRpdGxlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e3AudGl0bGV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBzdHlsZT17e2NvbG9yOicjNjQyNTY4J319PntwLmNhdG5hbWV9PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwLnNtYWxsX2Rlc2NyaXB0aW9ufX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGRpdkRhdGEucHVzaChtYXAxKTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBtYXAxID0gIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIiBpZD1cIm5vTW9yZVwiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImFsZXJ0LWhlYWRpbmdcIj5Tb3JyeSE8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPk5vIHByb2R1Y3RzIHdlcmUgZm91bmQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTs7XHJcbiAgICAgICAgZGl2RGF0YS5wdXNoKG1hcDEpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChkaXZEYXRhKTsgXHJcbiB9OyJdLCJzb3VyY2VSb290IjoiIn0=