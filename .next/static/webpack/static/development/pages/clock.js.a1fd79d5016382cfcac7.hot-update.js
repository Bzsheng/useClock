webpackHotUpdate("static\\development\\pages\\clock.js",{

/***/ "./pages/clock.tsx":
/*!*************************!*\
  !*** ./pages/clock.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Clock; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_useClock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/useClock */ "./lib/useClock.ts");
var _jsxFileName = "C:\\Users\\1\\Desktop\\nextmovie\\pages\\clock.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Clock() {
  _s();

  var time = Object(_lib_useClock__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date());
  var dayObj = {
    1: '星期一',
    2: '星期二',
    3: '星期三',
    4: '星期四',
    5: '星期五',
    6: '星期六',
    0: '星期天'
  };
  return __jsx("div", {
    className: "jsx-3657145928" + " " + 'main',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-3657145928" + " " + 'code',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("code", {
    className: "jsx-3657145928",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "\n          const useClock = (initTime) => {\n          const [time, setTime] = useState(initTime)\n\n          useEffect(() => {\n            const id = setInterval(() => {\n              setTime(new Date())\n              }, 1000)\n            return () => clearInterval(id)\n            }, [])\n\n        return time\n          }\n         ")), __jsx("div", {
    className: "jsx-3657145928" + " " + "result",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "jsx-3657145928",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, (dayObj[time.getDay()] || '') + time.toLocaleTimeString())), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3657145928",
    __self: this
  }, ".main.jsx-3657145928{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:5rem;left:10vw;width:80vw;}.code.jsx-3657145928{width:40vw;}.result.jsx-3657145928{width:40vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcMVxcRGVza3RvcFxcbmV4dG1vdmllXFxwYWdlc1xcY2xvY2sudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDUyxBQUcwQixBQVFGLEFBSUEsV0FIYixBQUlBLCtEQVhrQixnQkFDTixVQUNDLFdBQ2IiLCJmaWxlIjoiQzpcXFVzZXJzXFwxXFxEZXNrdG9wXFxuZXh0bW92aWVcXHBhZ2VzXFxjbG9jay50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnTCoFJlYWN0wqBmcm9twqAncmVhY3QnXHJcbmltcG9ydCB1c2VDbG9jayBmcm9tICcuLi9saWIvdXNlQ2xvY2snO1xyXG5cclxuZXhwb3J0wqBkZWZhdWx0wqBmdW5jdGlvbsKgQ2xvY2soKcKge1xyXG4gIGNvbnN0IHRpbWUgPSB1c2VDbG9jayhuZXcgRGF0ZSgpKVxyXG5cclxuwqDCoGNvbnN0wqBkYXlPYmrCoD3CoHtcclxuwqDCoMKgwqAxOsKgJ+aYn+acn+S4gCcsXHJcbsKgwqDCoMKgMjrCoCfmmJ/mnJ/kuownLFxyXG7CoMKgwqDCoDM6wqAn5pif5pyf5LiJJyxcclxuwqDCoMKgwqA0OsKgJ+aYn+acn+WbmycsXHJcbsKgwqDCoMKgNTrCoCfmmJ/mnJ/kupQnLFxyXG7CoMKgwqDCoDY6wqAn5pif5pyf5YWtJyxcclxuwqDCoMKgwqAwOsKgJ+aYn+acn+WkqSdcclxuwqDCoH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvZGUnPlxyXG4gICAgICAgIDxjb2RlPlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgIGNvbnN0IHVzZUNsb2NrID0gKGluaXRUaW1lKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZShpbml0VGltZSlcclxuXHJcbiAgICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpZCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICBzZXRUaW1lKG5ldyBEYXRlKCkpXHJcbiAgICAgICAgICAgICAgfSwgMTAwMClcclxuICAgICAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaWQpXHJcbiAgICAgICAgICAgIH0sIFtdKVxyXG5cclxuICAgICAgICByZXR1cm4gdGltZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICBgfVxyXG4gICAgICAgIDwvY29kZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0XCI+XHJcbiAgICAgICAgPHA+eyhkYXlPYmpbdGltZS5nZXREYXkoKV0gfHwgJycpICsgdGltZS50b0xvY2FsZVRpbWVTdHJpbmcoKX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAubWFpbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIC8qIGZsZXgtd3JhcDogd3JhcDsgKi9cclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXJlbTtcclxuICAgICAgICAgICAgbGVmdDogMTB2dztcclxuICAgICAgICAgICAgd2lkdGg6IDgwdnc7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmNvZGUge1xyXG4gICAgICAgICAgICB3aWR0aDogNDB2dztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucmVzdWx0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDQwdnc7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\1\\\\Desktop\\\\nextmovie\\\\pages\\\\clock.tsx */"));
}

_s(Clock, "R+PESSTxWxrvs4b8p2D6glLz8eQ=", false, function () {
  return [_lib_useClock__WEBPACK_IMPORTED_MODULE_2__["default"]];
});

_c = Clock;

var _c;

$RefreshReg$(_c, "Clock");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jbG9jay50c3giXSwibmFtZXMiOlsiQ2xvY2siLCJ0aW1lIiwidXNlQ2xvY2siLCJEYXRlIiwiZGF5T2JqIiwiZ2V0RGF5IiwidG9Mb2NhbGVUaW1lU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFDOUIsTUFBTUMsSUFBSSxHQUFHQyw2REFBUSxDQUFDLElBQUlDLElBQUosRUFBRCxDQUFyQjtBQUVBLE1BQU1DLE1BQU0sR0FBRztBQUNiLE9BQUcsS0FEVTtBQUViLE9BQUcsS0FGVTtBQUdiLE9BQUcsS0FIVTtBQUliLE9BQUcsS0FKVTtBQUtiLE9BQUcsS0FMVTtBQU1iLE9BQUcsS0FOVTtBQU9iLE9BQUc7QUFQVSxHQUFmO0FBVUEsU0FDRTtBQUFBLHdDQUFlLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsd0NBQWUsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtWQURGLENBREYsRUFtQkU7QUFBQSx3Q0FBZSxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSSxDQUFDQSxNQUFNLENBQUNILElBQUksQ0FBQ0ksTUFBTCxFQUFELENBQU4sSUFBeUIsRUFBMUIsSUFBZ0NKLElBQUksQ0FBQ0ssa0JBQUwsRUFBcEMsQ0FERixDQW5CRjtBQUFBO0FBQUE7QUFBQSw0a0ZBREY7QUE2Q0Q7O0dBMUR1Qk4sSztVQUNURSxxRDs7O0tBRFNGLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGNsb2NrLmpzLmExZmQ3OWQ1MDE2MzgyY2ZjYWM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnTCoFJlYWN0wqBmcm9twqAncmVhY3QnXHJcbmltcG9ydCB1c2VDbG9jayBmcm9tICcuLi9saWIvdXNlQ2xvY2snO1xyXG5cclxuZXhwb3J0wqBkZWZhdWx0wqBmdW5jdGlvbsKgQ2xvY2soKcKge1xyXG4gIGNvbnN0IHRpbWUgPSB1c2VDbG9jayhuZXcgRGF0ZSgpKVxyXG5cclxuwqDCoGNvbnN0wqBkYXlPYmrCoD3CoHtcclxuwqDCoMKgwqAxOsKgJ+aYn+acn+S4gCcsXHJcbsKgwqDCoMKgMjrCoCfmmJ/mnJ/kuownLFxyXG7CoMKgwqDCoDM6wqAn5pif5pyf5LiJJyxcclxuwqDCoMKgwqA0OsKgJ+aYn+acn+WbmycsXHJcbsKgwqDCoMKgNTrCoCfmmJ/mnJ/kupQnLFxyXG7CoMKgwqDCoDY6wqAn5pif5pyf5YWtJyxcclxuwqDCoMKgwqAwOsKgJ+aYn+acn+WkqSdcclxuwqDCoH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvZGUnPlxyXG4gICAgICAgIDxjb2RlPlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgIGNvbnN0IHVzZUNsb2NrID0gKGluaXRUaW1lKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZShpbml0VGltZSlcclxuXHJcbiAgICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpZCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICBzZXRUaW1lKG5ldyBEYXRlKCkpXHJcbiAgICAgICAgICAgICAgfSwgMTAwMClcclxuICAgICAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaWQpXHJcbiAgICAgICAgICAgIH0sIFtdKVxyXG5cclxuICAgICAgICByZXR1cm4gdGltZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICBgfVxyXG4gICAgICAgIDwvY29kZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0XCI+XHJcbiAgICAgICAgPHA+eyhkYXlPYmpbdGltZS5nZXREYXkoKV0gfHwgJycpICsgdGltZS50b0xvY2FsZVRpbWVTdHJpbmcoKX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAubWFpbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIC8qIGZsZXgtd3JhcDogd3JhcDsgKi9cclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXJlbTtcclxuICAgICAgICAgICAgbGVmdDogMTB2dztcclxuICAgICAgICAgICAgd2lkdGg6IDgwdnc7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmNvZGUge1xyXG4gICAgICAgICAgICB3aWR0aDogNDB2dztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucmVzdWx0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDQwdnc7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9