webpackHotUpdate_N_E("pages/products/[slug]",{

/***/ "./pages/products/[slug].jsx":
/*!***********************************!*\
  !*** ./pages/products/[slug].jsx ***!
  \***********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var C_xampp_htdocs_special_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
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

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  console.log(props.slug); //    if(router.isFallback)
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
        lineNumber: 104,
        columnNumber: 12
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
        property: "og:url",
        content: props.meta.seo_data.seo_url
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
        property: "og:title",
        content: props.meta.seo_data.seo_title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
        property: "og:description",
        content: props.meta.seo_data.s_desc
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
        property: "og:image",
        content: props.meta.seo_data.seo_image
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("title", {
        children: props.meta.seo_data.s_title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 102,
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
              lineNumber: 121,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              children: "A UNIQUE PRESSURE CARE SYSTEM"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 120,
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
                    lineNumber: 130,
                    columnNumber: 29
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h4", {
                    children: props.product['title']
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 131,
                    columnNumber: 29
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("figure", {
                    className: "ind-main-img",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
                      src: props.product['images'],
                      alt: "",
                      className: "img-fluid"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 134,
                      columnNumber: 29
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 133,
                    columnNumber: 29
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                      dangerouslySetInnerHTML: {
                        __html: props.product['sub_title']
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 138,
                      columnNumber: 33
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 137,
                    columnNumber: 29
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                    dangerouslySetInnerHTML: {
                      __html: props.product['description']
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 146,
                    columnNumber: 29
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
                  columnNumber: 25
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_productenquiry__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 154,
                  columnNumber: 25
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 21
              }, _this) : ''
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 99,
    columnNumber: 13
  }, _this);
  ;
};

_s(Products, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = Products;
var __N_SSP = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvW3NsdWddLmpzeCJdLCJuYW1lcyI6WyJnZXRQcm9kdWN0cyIsInNsdWciLCJmZXRjaCIsInJlcyIsImpzb24iLCJkYXRhIiwiZ2V0TWV0YSIsIml0ZW0iLCJhcGlVcmwiLCJtZXRob2QiLCJtb2RlIiwiY2FjaGUiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJyZWRpcmVjdCIsInJlZmVycmVyUG9saWN5IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZW9BcnJheSIsIlByb2R1Y3RzIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwibWV0YSIsInNlb19kYXRhIiwic19kZXNjIiwic2VvX3VybCIsInNlb190aXRsZSIsInNlb19pbWFnZSIsInNfdGl0bGUiLCJsb2FkZWQiLCJwcm9kdWN0IiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztTQVdlQSxXOzs7OztrUkFBZixpQkFBNEJDLElBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBR3NCQyxLQUFLLENBQUMsZ0ZBQThFRCxJQUEvRSxDQUgzQjs7QUFBQTtBQUdVRSxlQUhWO0FBQUE7QUFBQSxtQkFJdUJBLEdBQUcsQ0FBQ0MsSUFBSixFQUp2Qjs7QUFBQTtBQUlVQyxnQkFKVjtBQUFBLDZDQU1XQSxJQU5YOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7U0FTZUMsTzs7RUF3QmY7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW9FRTtBQUNULENBcEZEOztHQUFNZCxRO1VBR2FHLHFEOzs7S0FIYkgsUTs7QUFzRlNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3RzL1tzbHVnXS5jZmI5OWZkZGUyMWU3MWVkNWUxNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gIGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjsgXHJcbmltcG9ydCB7dG9hc3R9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcclxuaW1wb3J0IFByb2R1Y3RFbnF1aXJ5Rm9ybSBmcm9tICcuLy4uL3Byb2R1Y3RlbnF1aXJ5JztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoe2NvbnRleHQscGFyYW1zfSkge1xyXG4gICAgXHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIHByb3BzIDoge1xyXG4gICAgICAgICAgICAgICAgICBzbHVnOnBhcmFtcy5zbHVnLFxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgIH19O1xyXG4gICAgICBcclxuICB9XHJcbmFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RzIChzbHVnKVxyXG57XHJcbiAgXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hZG1pbi5zcGVjaWFsaXN0bWF0dHJlc3NzeXN0ZW1zLmNvbS9hcGkvcHJvZHVjdC9zaW5nbGVwcm9kdWN0L3NsdWcvJytzbHVnKVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICBcclxuICAgIHJldHVybiBkYXRhO1xyXG4gICAgIFxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGdldE1ldGEgKGl0ZW0pXHJcbntcclxuICAgIGxldCBhcGlVcmwsc2x1ZztcclxuICAgIGFwaVVybCA9ICdodHRwczovL2FkbWluLnNwZWNpYWxpc3RtYXR0cmVzc3N5c3RlbXMuY29tL2FwaS9wcm9kdWN0L2dldG1ldGFkYXRhJztcclxuICBcclxuICAgIHNsdWcgPSAnL3Byb2R1Y3RzLycraXRlbTsgXHJcbiAgICBjb25zdCBkYXRhID0geyBzbHVnIDogc2x1ZyB9O1xyXG4gICAgbGV0IHNlb0FycmF5ID0gYXdhaXQgZmV0Y2goYXBpVXJsLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLCAvLyAqR0VULCBQT1NULCBQVVQsIERFTEVURSwgZXRjLlxyXG4gICAgICBtb2RlOiAnY29ycycsIC8vIG5vLWNvcnMsICpjb3JzLCBzYW1lLW9yaWdpblxyXG4gICAgICBjYWNoZTogJ25vLWNhY2hlJywgLy8gKmRlZmF1bHQsIG5vLWNhY2hlLCByZWxvYWQsIGZvcmNlLWNhY2hlLCBvbmx5LWlmLWNhY2hlZFxyXG4gICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJywgLy8gaW5jbHVkZSwgKnNhbWUtb3JpZ2luLCBvbWl0XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgLy8gJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG4gICAgICB9LFxyXG4gICAgICByZWRpcmVjdDogJ2ZvbGxvdycsIC8vIG1hbnVhbCwgKmZvbGxvdywgZXJyb3JcclxuICAgICAgcmVmZXJyZXJQb2xpY3k6ICduby1yZWZlcnJlcicsIC8vIG5vLXJlZmVycmVyLCAqbm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGUsIG9yaWdpbiwgb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luLCBzYW1lLW9yaWdpbiwgc3RyaWN0LW9yaWdpbiwgc3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpbiwgdW5zYWZlLXVybFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSAvLyBib2R5IGRhdGEgdHlwZSBtdXN0IG1hdGNoIFwiQ29udGVudC1UeXBlXCIgaGVhZGVyXHJcbiAgICB9KTtcclxuICBcclxuIFxyXG4gICAgcmV0dXJuIHNlb0FycmF5Lmpzb24oKVxyXG4gIH1cclxuLy8gZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMoe3BhcmFtc30pID0+IHtcclxuLy8gICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRQcm9kdWN0cyhwYXJhbXMuc2x1Zyk7XHJcbi8vICAgICBjb25zdCBtZXRhZGF0YSA9IGF3YWl0IGdldE1ldGEocGFyYW1zLnNsdWcpO1xyXG4gICAgXHJcbi8vICAgICBpZihkYXRhLnJzPT0xKVxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgICAgIHByb3BzIDogeyBcclxuLy8gICAgICAgICAgICAgbG9hZGVkOnRydWUsXHJcbi8vICAgICAgICAgICAgIHByb2R1Y3Q6ZGF0YS5yZXN1bHQsXHJcbi8vICAgICAgICAgICAgIG1ldGEgOiBtZXRhZGF0YVxyXG4gICAgICAgICAgIFxyXG4vLyAgICAgICAgIH19O1xyXG4vLyAgICAgfVxyXG4vLyAgICAgZWxzZVxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgICAgIHByb3BzIDoge1xyXG4vLyAgICAgICAgICAgICAgICAgbG9hZGVkOmZhbHNlLFxyXG4vLyAgICAgICAgICAgICAgICAgcHJvZHVjdDpudWxsLFxyXG4vLyAgICAgICAgIH19O1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vIGV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9ICgpID0+XHJcbi8vIHtcclxuLy8gICAgIHJldHVybntcclxuLy8gICAgICAgICBwYXRoczpbXSxcclxuLy8gICAgICAgICBmYWxsYmFjayA6IHRydWVcclxuLy8gICAgIH1cclxuLy8gfSBcclxuY29uc3QgUHJvZHVjdHMgPSAgKHByb3BzKT0+XHJcbiB7XHJcbiAgIFxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7IFxyXG4gICAgY29uc29sZS5sb2cocHJvcHMuc2x1Zyk7XHJcbiAgXHJcbi8vICAgIGlmKHJvdXRlci5pc0ZhbGxiYWNrKVxyXG4vLyAgICB7XHJcbi8vICAgICAgICByZXR1cm5cclxuLy8gICAgICAgIChcclxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4vLyAgICAgICAgICAgICA8aW1nICBzcmM9XCIvaW1nL3NwaW5uZXIuZ2lmXCIgY2xhc3NOYW1lPVwid2FpdFwiIGFsdD1cIndhaXRcIiB3aWR0aD1cIjEwMFwiIGFsaWduPVwiY2VudGVyXCIgLz5cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICk7XHJcbi8vICAgIH1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLm1ldGEgJiYgcHJvcHMubWV0YS5yZXM9PTEgP1xyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3Byb3BzLm1ldGEuc2VvX2RhdGEuc19kZXNjfSAvPiAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3Byb3BzLm1ldGEuc2VvX2RhdGEuc2VvX3VybH0gLz5cclxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiAgICAgICAgICAgICAgY29udGVudD17cHJvcHMubWV0YS5zZW9fZGF0YS5zZW9fdGl0bGV9IC8+XHJcbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgICAgICAgIGNvbnRlbnQ9e3Byb3BzLm1ldGEuc2VvX2RhdGEuc19kZXNjfSAvPlxyXG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiICAgICAgICAgICAgICBjb250ZW50PXtwcm9wcy5tZXRhLnNlb19kYXRhLnNlb19pbWFnZX0gLz5cclxuXHJcbiAgICAgICAgICA8dGl0bGU+e3Byb3BzLm1ldGEuc2VvX2RhdGEuc190aXRsZX08L3RpdGxlPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA6Jyd9XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImluZC1wcm9kdWN0cy1iYW5uZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgbWItNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5Qcm9kdWN0czwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+QSBVTklRVUUgUFJFU1NVUkUgQ0FSRSBTWVNURU08L3A+ICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgcHJvZHVjdHMtc2VjXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsgcHJvcHMubG9hZGVkID8gXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PlByb2R1Y3RzICB8ICB7cHJvcHMucHJvZHVjdFsndGl0bGUnXX08L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pntwcm9wcy5wcm9kdWN0Wyd0aXRsZSddfTwvaDQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJpbmQtbWFpbi1pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9wcy5wcm9kdWN0WydpbWFnZXMnXX0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IHByb3BzLnByb2R1Y3RbJ3N1Yl90aXRsZSddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9faHRtbDogcHJvcHMucHJvZHVjdFsnZGVzY3JpcHRpb24nXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdEVucXVpcnlGb3JtIC8+ICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDonJ31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApOztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=