webpackHotUpdate_N_E("pages/products/[slug]",{

/***/ "./pages/products/[slug].jsx":
/*!***********************************!*\
  !*** ./pages/products/[slug].jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_xampp_htdocs_special_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_xampp_htdocs_special_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_xampp_htdocs_special_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_xampp_htdocs_special_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _productenquiry__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../productenquiry */ "./pages/productenquiry.js");




var _jsxFileName = "C:\\xampp\\htdocs\\special-next\\pages\\products\\[slug].jsx",
    _this = undefined,
    _s = $RefreshSig$();










function getProducts(_x) {
  return _getProducts.apply(this, arguments);
}

function _getProducts() {
  _getProducts = Object(C_xampp_htdocs_special_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_xampp_htdocs_special_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(slug) {
    var res, data;
    return C_xampp_htdocs_special_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('https://admin.specialistmattresssystems.com/api/product/singleproduct/slug/' + slug);

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getProducts.apply(this, arguments);
}

function getMeta(_x2) {
  return _getMeta.apply(this, arguments);
} // export const getStaticProps = async({params}) => {
//     const data = await getProducts(params.slug);
//     const metadata = await getMeta(params.slug);
//     if(data.rs==1)
//     {
//         return {
//             props : { 
//             loaded:true,
//             product:data.result,
//             meta : metadata
//         }};
//     }
//     else
//     {
//         return {
//             props : {
//                 loaded:false,
//                 product:null,
//         }};
//     }
// }
// export const getStaticPaths = () =>
// {
//     return{
//         paths:[],
//         fallback : true
//     }
// } 


function _getMeta() {
  _getMeta = Object(C_xampp_htdocs_special_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_xampp_htdocs_special_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(item) {
    var apiUrl, slug, data, seoArray;
    return C_xampp_htdocs_special_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            apiUrl = 'https://admin.specialistmattresssystems.com/api/product/getmetadata';
            slug = '/products/' + item;
            data = {
              slug: slug
            };
            _context2.next = 5;
            return fetch(apiUrl, {
              method: 'POST',
              // *GET, POST, PUT, DELETE, etc.
              mode: 'cors',
              // no-cors, *cors, same-origin
              cache: 'no-cache',
              // *default, no-cache, reload, force-cache, only-if-cached
              credentials: 'same-origin',
              // include, *same-origin, omit
              headers: {
                'Content-Type': 'application/json' // 'Content-Type': 'application/x-www-form-urlencoded',

              },
              redirect: 'follow',
              // manual, *follow, error
              referrerPolicy: 'no-referrer',
              // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
              body: JSON.stringify(data) // body data type must match "Content-Type" header

            });

          case 5:
            seoArray = _context2.sent;
            return _context2.abrupt("return", seoArray.json());

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getMeta.apply(this, arguments);
}

var Products = function Products(props) {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])(); //    if(router.isFallback)
  //    {
  //        return
  //        (
  //         <div className="row">
  //             <img  src="/img/spinner.gif" className="wait" alt="wait" width="100" align="center" />
  //         </div>
  //        );
  //    }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: [props.meta && props.meta.res == 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
        name: "description",
        content: props.meta.seo_data.s_desc
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 12
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
        property: "og:url",
        content: props.meta.seo_data.seo_url
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
        property: "og:title",
        content: props.meta.seo_data.seo_title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
        property: "og:description",
        content: props.meta.seo_data.s_desc
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
        property: "og:image",
        content: props.meta.seo_data.seo_image
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("title", {
        children: props.meta.seo_data.s_title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }, _this) : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
      className: "ind-products-banner",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "col-12 mb-5",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
              children: "Products"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              children: "A UNIQUE PRESSURE CARE SYSTEM"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "col-12 products-sec",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "row",
              children: props.loaded ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                className: "card col-12",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                  className: "card-body",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h6", {
                    children: ["Products  |  ", props.product['title']]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 121,
                    columnNumber: 29
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h4", {
                    children: props.product['title']
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 122,
                    columnNumber: 29
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("figure", {
                    className: "ind-main-img",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
                      src: props.product['images'],
                      alt: "",
                      className: "img-fluid"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 125,
                      columnNumber: 29
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 124,
                    columnNumber: 29
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                      dangerouslySetInnerHTML: {
                        __html: props.product['sub_title']
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 129,
                      columnNumber: 33
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 128,
                    columnNumber: 29
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                    dangerouslySetInnerHTML: {
                      __html: props.product['description']
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 137,
                    columnNumber: 29
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 25
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_productenquiry__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 145,
                  columnNumber: 25
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 21
              }, _this) : ''
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 13
  }, _this);
  ;
};

_s(Products, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = Products;
/* harmony default export */ __webpack_exports__["default"] = (Products);

var _c;

$RefreshReg$(_c, "Products");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvW3NsdWddLmpzeCJdLCJuYW1lcyI6WyJnZXRQcm9kdWN0cyIsInNsdWciLCJmZXRjaCIsInJlcyIsImpzb24iLCJkYXRhIiwiZ2V0TWV0YSIsIml0ZW0iLCJhcGlVcmwiLCJtZXRob2QiLCJtb2RlIiwiY2FjaGUiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJyZWRpcmVjdCIsInJlZmVycmVyUG9saWN5IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZW9BcnJheSIsIlByb2R1Y3RzIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJtZXRhIiwic2VvX2RhdGEiLCJzX2Rlc2MiLCJzZW9fdXJsIiwic2VvX3RpdGxlIiwic2VvX2ltYWdlIiwic190aXRsZSIsImxvYWRlZCIsInByb2R1Y3QiLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7U0FHZUEsVzs7Ozs7a1JBQWYsaUJBQTRCQyxJQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUdzQkMsS0FBSyxDQUFDLGdGQUE4RUQsSUFBL0UsQ0FIM0I7O0FBQUE7QUFHVUUsZUFIVjtBQUFBO0FBQUEsbUJBSXVCQSxHQUFHLENBQUNDLElBQUosRUFKdkI7O0FBQUE7QUFJVUMsZ0JBSlY7QUFBQSw2Q0FNV0EsSUFOWDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O1NBU2VDLE87O0VBd0JmO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OzhRQXJEQSxrQkFB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QTtBQUFBLGFBbEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBb0VFO0FBQ1QsQ0FuRkQ7O0dBQU1aLFE7VUFHYUcscUQ7OztLQUhiSCxRO0FBcUZTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0cy9bc2x1Z10uMWJhZWQyOGY3MGJlNmFjODZlZTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9ICBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7IFxyXG5pbXBvcnQge3RvYXN0fSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XHJcbmltcG9ydCBQcm9kdWN0RW5xdWlyeUZvcm0gZnJvbSAnLi8uLi9wcm9kdWN0ZW5xdWlyeSc7XHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdHMgKHNsdWcpXHJcbntcclxuICBcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FkbWluLnNwZWNpYWxpc3RtYXR0cmVzc3N5c3RlbXMuY29tL2FwaS9wcm9kdWN0L3NpbmdsZXByb2R1Y3Qvc2x1Zy8nK3NsdWcpXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gIFxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgXHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZ2V0TWV0YSAoaXRlbSlcclxue1xyXG4gICAgbGV0IGFwaVVybCxzbHVnO1xyXG4gICAgYXBpVXJsID0gJ2h0dHBzOi8vYWRtaW4uc3BlY2lhbGlzdG1hdHRyZXNzc3lzdGVtcy5jb20vYXBpL3Byb2R1Y3QvZ2V0bWV0YWRhdGEnO1xyXG4gIFxyXG4gICAgc2x1ZyA9ICcvcHJvZHVjdHMvJytpdGVtOyBcclxuICAgIGNvbnN0IGRhdGEgPSB7IHNsdWcgOiBzbHVnIH07XHJcbiAgICBsZXQgc2VvQXJyYXkgPSBhd2FpdCBmZXRjaChhcGlVcmwsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsIC8vICpHRVQsIFBPU1QsIFBVVCwgREVMRVRFLCBldGMuXHJcbiAgICAgIG1vZGU6ICdjb3JzJywgLy8gbm8tY29ycywgKmNvcnMsIHNhbWUtb3JpZ2luXHJcbiAgICAgIGNhY2hlOiAnbm8tY2FjaGUnLCAvLyAqZGVmYXVsdCwgbm8tY2FjaGUsIHJlbG9hZCwgZm9yY2UtY2FjaGUsIG9ubHktaWYtY2FjaGVkXHJcbiAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLCAvLyBpbmNsdWRlLCAqc2FtZS1vcmlnaW4sIG9taXRcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAvLyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHJlZGlyZWN0OiAnZm9sbG93JywgLy8gbWFudWFsLCAqZm9sbG93LCBlcnJvclxyXG4gICAgICByZWZlcnJlclBvbGljeTogJ25vLXJlZmVycmVyJywgLy8gbm8tcmVmZXJyZXIsICpuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZSwgb3JpZ2luLCBvcmlnaW4td2hlbi1jcm9zcy1vcmlnaW4sIHNhbWUtb3JpZ2luLCBzdHJpY3Qtb3JpZ2luLCBzdHJpY3Qtb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luLCB1bnNhZmUtdXJsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpIC8vIGJvZHkgZGF0YSB0eXBlIG11c3QgbWF0Y2ggXCJDb250ZW50LVR5cGVcIiBoZWFkZXJcclxuICAgIH0pO1xyXG4gIFxyXG4gXHJcbiAgICByZXR1cm4gc2VvQXJyYXkuanNvbigpXHJcbiAgfVxyXG4vLyBleHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyh7cGFyYW1zfSkgPT4ge1xyXG4vLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFByb2R1Y3RzKHBhcmFtcy5zbHVnKTtcclxuLy8gICAgIGNvbnN0IG1ldGFkYXRhID0gYXdhaXQgZ2V0TWV0YShwYXJhbXMuc2x1Zyk7XHJcbiAgICBcclxuLy8gICAgIGlmKGRhdGEucnM9PTEpXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICAgICAgcHJvcHMgOiB7IFxyXG4vLyAgICAgICAgICAgICBsb2FkZWQ6dHJ1ZSxcclxuLy8gICAgICAgICAgICAgcHJvZHVjdDpkYXRhLnJlc3VsdCxcclxuLy8gICAgICAgICAgICAgbWV0YSA6IG1ldGFkYXRhXHJcbiAgICAgICAgICAgXHJcbi8vICAgICAgICAgfX07XHJcbi8vICAgICB9XHJcbi8vICAgICBlbHNlXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICAgICAgcHJvcHMgOiB7XHJcbi8vICAgICAgICAgICAgICAgICBsb2FkZWQ6ZmFsc2UsXHJcbi8vICAgICAgICAgICAgICAgICBwcm9kdWN0Om51bGwsXHJcbi8vICAgICAgICAgfX07XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy8gZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gKCkgPT5cclxuLy8ge1xyXG4vLyAgICAgcmV0dXJue1xyXG4vLyAgICAgICAgIHBhdGhzOltdLFxyXG4vLyAgICAgICAgIGZhbGxiYWNrIDogdHJ1ZVxyXG4vLyAgICAgfVxyXG4vLyB9IFxyXG5jb25zdCBQcm9kdWN0cyA9ICAocHJvcHMpPT5cclxuIHtcclxuICAgXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTsgXHJcbiAgXHJcbi8vICAgIGlmKHJvdXRlci5pc0ZhbGxiYWNrKVxyXG4vLyAgICB7XHJcbi8vICAgICAgICByZXR1cm5cclxuLy8gICAgICAgIChcclxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4vLyAgICAgICAgICAgICA8aW1nICBzcmM9XCIvaW1nL3NwaW5uZXIuZ2lmXCIgY2xhc3NOYW1lPVwid2FpdFwiIGFsdD1cIndhaXRcIiB3aWR0aD1cIjEwMFwiIGFsaWduPVwiY2VudGVyXCIgLz5cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICk7XHJcbi8vICAgIH1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLm1ldGEgJiYgcHJvcHMubWV0YS5yZXM9PTEgP1xyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3Byb3BzLm1ldGEuc2VvX2RhdGEuc19kZXNjfSAvPiAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3Byb3BzLm1ldGEuc2VvX2RhdGEuc2VvX3VybH0gLz5cclxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiAgICAgICAgICAgICAgY29udGVudD17cHJvcHMubWV0YS5zZW9fZGF0YS5zZW9fdGl0bGV9IC8+XHJcbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgICAgICAgIGNvbnRlbnQ9e3Byb3BzLm1ldGEuc2VvX2RhdGEuc19kZXNjfSAvPlxyXG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiICAgICAgICAgICAgICBjb250ZW50PXtwcm9wcy5tZXRhLnNlb19kYXRhLnNlb19pbWFnZX0gLz5cclxuXHJcbiAgICAgICAgICA8dGl0bGU+e3Byb3BzLm1ldGEuc2VvX2RhdGEuc190aXRsZX08L3RpdGxlPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA6Jyd9XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImluZC1wcm9kdWN0cy1iYW5uZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgbWItNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5Qcm9kdWN0czwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+QSBVTklRVUUgUFJFU1NVUkUgQ0FSRSBTWVNURU08L3A+ICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgcHJvZHVjdHMtc2VjXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsgcHJvcHMubG9hZGVkID8gXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PlByb2R1Y3RzICB8ICB7cHJvcHMucHJvZHVjdFsndGl0bGUnXX08L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pntwcm9wcy5wcm9kdWN0Wyd0aXRsZSddfTwvaDQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJpbmQtbWFpbi1pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9wcy5wcm9kdWN0WydpbWFnZXMnXX0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IHByb3BzLnByb2R1Y3RbJ3N1Yl90aXRsZSddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9faHRtbDogcHJvcHMucHJvZHVjdFsnZGVzY3JpcHRpb24nXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdEVucXVpcnlGb3JtIC8+ICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDonJ31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApOztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=