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
        lineNumber: 103,
        columnNumber: 12
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
        property: "og:url",
        content: props.meta.seo_data.seo_url
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
        property: "og:title",
        content: props.meta.seo_data.seo_title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
        property: "og:description",
        content: props.meta.seo_data.s_desc
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
        property: "og:image",
        content: props.meta.seo_data.seo_image
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("title", {
        children: props.meta.seo_data.s_title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 101,
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
              lineNumber: 120,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              children: "A UNIQUE PRESSURE CARE SYSTEM"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 119,
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
                    lineNumber: 129,
                    columnNumber: 29
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h4", {
                    children: props.product['title']
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 130,
                    columnNumber: 29
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("figure", {
                    className: "ind-main-img",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
                      src: props.product['images'],
                      alt: "",
                      className: "img-fluid"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 133,
                      columnNumber: 29
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 132,
                    columnNumber: 29
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                      dangerouslySetInnerHTML: {
                        __html: props.product['sub_title']
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 137,
                      columnNumber: 33
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 136,
                    columnNumber: 29
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                    dangerouslySetInnerHTML: {
                      __html: props.product['description']
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 145,
                    columnNumber: 29
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 128,
                  columnNumber: 25
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_productenquiry__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 153,
                  columnNumber: 25
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 21
              }, _this) : ''
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 98,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvW3NsdWddLmpzeCJdLCJuYW1lcyI6WyJnZXRQcm9kdWN0cyIsInNsdWciLCJmZXRjaCIsInJlcyIsImpzb24iLCJkYXRhIiwiZ2V0TWV0YSIsIml0ZW0iLCJhcGlVcmwiLCJtZXRob2QiLCJtb2RlIiwiY2FjaGUiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJyZWRpcmVjdCIsInJlZmVycmVyUG9saWN5IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZW9BcnJheSIsIlByb2R1Y3RzIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJtZXRhIiwic2VvX2RhdGEiLCJzX2Rlc2MiLCJzZW9fdXJsIiwic2VvX3RpdGxlIiwic2VvX2ltYWdlIiwic190aXRsZSIsImxvYWRlZCIsInByb2R1Y3QiLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O1NBV2VBLFc7Ozs7O2tSQUFmLGlCQUE0QkMsSUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFHc0JDLEtBQUssQ0FBQyxnRkFBOEVELElBQS9FLENBSDNCOztBQUFBO0FBR1VFLGVBSFY7QUFBQTtBQUFBLG1CQUl1QkEsR0FBRyxDQUFDQyxJQUFKLEVBSnZCOztBQUFBO0FBSVVDLGdCQUpWO0FBQUEsNkNBTVdBLElBTlg7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztTQVNlQyxPOztFQXdCZjtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs4UUFyREEsa0JB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QUE7QUFBQSxhQWxCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW9FRTtBQUNULENBbkZEOztHQUFNWixRO1VBR2FHLHFEOzs7S0FIYkgsUTs7QUFxRlNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3RzL1tzbHVnXS5hMWQyMTM4MmFkM2U5NzYxYjk1My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gIGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjsgXHJcbmltcG9ydCB7dG9hc3R9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcclxuaW1wb3J0IFByb2R1Y3RFbnF1aXJ5Rm9ybSBmcm9tICcuLy4uL3Byb2R1Y3RlbnF1aXJ5JztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoe2NvbnRleHQscGFyYW1zfSkge1xyXG4gICAgXHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIHByb3BzIDoge1xyXG4gICAgICAgICAgICAgICAgICBzbHVnOnBhcmFtcy5zbHVnLFxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgIH19O1xyXG4gICAgICBcclxuICB9XHJcbmFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RzIChzbHVnKVxyXG57XHJcbiAgXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hZG1pbi5zcGVjaWFsaXN0bWF0dHJlc3NzeXN0ZW1zLmNvbS9hcGkvcHJvZHVjdC9zaW5nbGVwcm9kdWN0L3NsdWcvJytzbHVnKVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICBcclxuICAgIHJldHVybiBkYXRhO1xyXG4gICAgIFxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGdldE1ldGEgKGl0ZW0pXHJcbntcclxuICAgIGxldCBhcGlVcmwsc2x1ZztcclxuICAgIGFwaVVybCA9ICdodHRwczovL2FkbWluLnNwZWNpYWxpc3RtYXR0cmVzc3N5c3RlbXMuY29tL2FwaS9wcm9kdWN0L2dldG1ldGFkYXRhJztcclxuICBcclxuICAgIHNsdWcgPSAnL3Byb2R1Y3RzLycraXRlbTsgXHJcbiAgICBjb25zdCBkYXRhID0geyBzbHVnIDogc2x1ZyB9O1xyXG4gICAgbGV0IHNlb0FycmF5ID0gYXdhaXQgZmV0Y2goYXBpVXJsLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLCAvLyAqR0VULCBQT1NULCBQVVQsIERFTEVURSwgZXRjLlxyXG4gICAgICBtb2RlOiAnY29ycycsIC8vIG5vLWNvcnMsICpjb3JzLCBzYW1lLW9yaWdpblxyXG4gICAgICBjYWNoZTogJ25vLWNhY2hlJywgLy8gKmRlZmF1bHQsIG5vLWNhY2hlLCByZWxvYWQsIGZvcmNlLWNhY2hlLCBvbmx5LWlmLWNhY2hlZFxyXG4gICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJywgLy8gaW5jbHVkZSwgKnNhbWUtb3JpZ2luLCBvbWl0XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgLy8gJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG4gICAgICB9LFxyXG4gICAgICByZWRpcmVjdDogJ2ZvbGxvdycsIC8vIG1hbnVhbCwgKmZvbGxvdywgZXJyb3JcclxuICAgICAgcmVmZXJyZXJQb2xpY3k6ICduby1yZWZlcnJlcicsIC8vIG5vLXJlZmVycmVyLCAqbm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGUsIG9yaWdpbiwgb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luLCBzYW1lLW9yaWdpbiwgc3RyaWN0LW9yaWdpbiwgc3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpbiwgdW5zYWZlLXVybFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSAvLyBib2R5IGRhdGEgdHlwZSBtdXN0IG1hdGNoIFwiQ29udGVudC1UeXBlXCIgaGVhZGVyXHJcbiAgICB9KTtcclxuICBcclxuIFxyXG4gICAgcmV0dXJuIHNlb0FycmF5Lmpzb24oKVxyXG4gIH1cclxuLy8gZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMoe3BhcmFtc30pID0+IHtcclxuLy8gICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRQcm9kdWN0cyhwYXJhbXMuc2x1Zyk7XHJcbi8vICAgICBjb25zdCBtZXRhZGF0YSA9IGF3YWl0IGdldE1ldGEocGFyYW1zLnNsdWcpO1xyXG4gICAgXHJcbi8vICAgICBpZihkYXRhLnJzPT0xKVxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgICAgIHByb3BzIDogeyBcclxuLy8gICAgICAgICAgICAgbG9hZGVkOnRydWUsXHJcbi8vICAgICAgICAgICAgIHByb2R1Y3Q6ZGF0YS5yZXN1bHQsXHJcbi8vICAgICAgICAgICAgIG1ldGEgOiBtZXRhZGF0YVxyXG4gICAgICAgICAgIFxyXG4vLyAgICAgICAgIH19O1xyXG4vLyAgICAgfVxyXG4vLyAgICAgZWxzZVxyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgICAgIHByb3BzIDoge1xyXG4vLyAgICAgICAgICAgICAgICAgbG9hZGVkOmZhbHNlLFxyXG4vLyAgICAgICAgICAgICAgICAgcHJvZHVjdDpudWxsLFxyXG4vLyAgICAgICAgIH19O1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vIGV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9ICgpID0+XHJcbi8vIHtcclxuLy8gICAgIHJldHVybntcclxuLy8gICAgICAgICBwYXRoczpbXSxcclxuLy8gICAgICAgICBmYWxsYmFjayA6IHRydWVcclxuLy8gICAgIH1cclxuLy8gfSBcclxuY29uc3QgUHJvZHVjdHMgPSAgKHByb3BzKT0+XHJcbiB7XHJcbiAgIFxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7IFxyXG4gIFxyXG4vLyAgICBpZihyb3V0ZXIuaXNGYWxsYmFjaylcclxuLy8gICAge1xyXG4vLyAgICAgICAgcmV0dXJuXHJcbi8vICAgICAgICAoXHJcbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuLy8gICAgICAgICAgICAgPGltZyAgc3JjPVwiL2ltZy9zcGlubmVyLmdpZlwiIGNsYXNzTmFtZT1cIndhaXRcIiBhbHQ9XCJ3YWl0XCIgd2lkdGg9XCIxMDBcIiBhbGlnbj1cImNlbnRlclwiIC8+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICApO1xyXG4vLyAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5tZXRhICYmIHByb3BzLm1ldGEucmVzPT0xID9cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICBcclxuICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtwcm9wcy5tZXRhLnNlb19kYXRhLnNfZGVzY30gLz4gICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiAgICAgICAgICAgICAgICBjb250ZW50PXtwcm9wcy5tZXRhLnNlb19kYXRhLnNlb191cmx9IC8+XHJcbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgICAgICAgICAgICAgIGNvbnRlbnQ9e3Byb3BzLm1ldGEuc2VvX2RhdGEuc2VvX3RpdGxlfSAvPlxyXG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiICAgICAgICBjb250ZW50PXtwcm9wcy5tZXRhLnNlb19kYXRhLnNfZGVzY30gLz5cclxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiAgICAgICAgICAgICAgY29udGVudD17cHJvcHMubWV0YS5zZW9fZGF0YS5zZW9faW1hZ2V9IC8+XHJcblxyXG4gICAgICAgICAgPHRpdGxlPntwcm9wcy5tZXRhLnNlb19kYXRhLnNfdGl0bGV9PC90aXRsZT5cclxuICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgOicnfVxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJpbmQtcHJvZHVjdHMtYmFubmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIG1iLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+UHJvZHVjdHM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkEgVU5JUVVFIFBSRVNTVVJFIENBUkUgU1lTVEVNPC9wPiAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHByb2R1Y3RzLXNlY1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmxvYWRlZCA/IFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5Qcm9kdWN0cyAgfCAge3Byb3BzLnByb2R1Y3RbJ3RpdGxlJ119PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND57cHJvcHMucHJvZHVjdFsndGl0bGUnXX08L2g0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiaW5kLW1haW4taW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvcHMucHJvZHVjdFsnaW1hZ2VzJ119IGFsdD1cIlwiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19odG1sOiBwcm9wcy5wcm9kdWN0WydzdWJfdGl0bGUnXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IHByb3BzLnByb2R1Y3RbJ2Rlc2NyaXB0aW9uJ11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RFbnF1aXJ5Rm9ybSAvPiAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA6Jyd9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTs7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9