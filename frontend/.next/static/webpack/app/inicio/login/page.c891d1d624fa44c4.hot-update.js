"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/inicio/login/page",{

/***/ "(app-pages-browser)/./src/app/inicio/login/page.js":
/*!**************************************!*\
  !*** ./src/app/inicio/login/page.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Authentication_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Authentication.module.css */ \"(app-pages-browser)/./src/app/styles/Authentication.module.css\");\n/* harmony import */ var _styles_Authentication_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Authentication_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Login() {\n    _s();\n    const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    const handleChange = (e)=>setForm({\n            ...form,\n            [e.target.name]: e.target.value\n        });\n    async function handleSubmit() {\n        console.log(form);\n        const res = await fetch(\"http://localhost:4000/login\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(form)\n        });\n        const data = await res.json();\n        console.log(data);\n    /*\r\n    if (res.ok) {\r\n      localStorage.setItem('token', data.token);\r\n    } else {\r\n      alert(data.error || 'Error al iniciar sesión');\r\n    }\r\n    */ }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Authentication_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: (_styles_Authentication_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),\n                    children: \"Iniciar Sesi\\xf3n\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alumnomaster2\\\\Documents\\\\GitHub\\\\2024-TPfinal-G11\\\\frontend\\\\src\\\\app\\\\inicio\\\\login\\\\page.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: (_styles_Authentication_module_css__WEBPACK_IMPORTED_MODULE_2___default().input),\n                    name: \"email\",\n                    type: \"email\",\n                    placeholder: \"Email\",\n                    onChange: handleChange,\n                    required: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alumnomaster2\\\\Documents\\\\GitHub\\\\2024-TPfinal-G11\\\\frontend\\\\src\\\\app\\\\inicio\\\\login\\\\page.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: (_styles_Authentication_module_css__WEBPACK_IMPORTED_MODULE_2___default().input),\n                    name: \"password\",\n                    type: \"password\",\n                    placeholder: \"Contrase\\xf1a\",\n                    onChange: handleChange,\n                    required: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alumnomaster2\\\\Documents\\\\GitHub\\\\2024-TPfinal-G11\\\\frontend\\\\src\\\\app\\\\inicio\\\\login\\\\page.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_Authentication_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),\n                    onClick: handleSubmit,\n                    type: \"button\",\n                    children: \"Iniciar sesi\\xf3n\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alumnomaster2\\\\Documents\\\\GitHub\\\\2024-TPfinal-G11\\\\frontend\\\\src\\\\app\\\\inicio\\\\login\\\\page.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\alumnomaster2\\\\Documents\\\\GitHub\\\\2024-TPfinal-G11\\\\frontend\\\\src\\\\app\\\\inicio\\\\login\\\\page.js\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Login, \"YN82mk+BAqI6iccZJp7HrBuCAaU=\");\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvaW5pY2lvL2xvZ2luL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFaUM7QUFDMkI7QUFFN0MsU0FBU0U7O0lBQ3RCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSiwrQ0FBUUEsQ0FBQztRQUFFSyxPQUFPO1FBQUlDLFVBQVU7SUFBRztJQUUzRCxNQUFNQyxlQUFlLENBQUNDLElBQU1KLFFBQVE7WUFBRSxHQUFHRCxJQUFJO1lBQUUsQ0FBQ0ssRUFBRUMsTUFBTSxDQUFDQyxJQUFJLENBQUMsRUFBRUYsRUFBRUMsTUFBTSxDQUFDRSxLQUFLO1FBQUM7SUFFL0UsZUFBZUM7UUFDYkMsUUFBUUMsR0FBRyxDQUFDWDtRQUNaLE1BQU1ZLE1BQU0sTUFBTUMsTUFBTSwrQkFBK0I7WUFDckRDLFFBQVE7WUFDUkMsU0FBUztnQkFBQyxnQkFBZ0I7WUFBbUI7WUFDN0NDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ2xCO1FBQ3ZCO1FBRUEsTUFBTW1CLE9BQU8sTUFBTVAsSUFBSVEsSUFBSTtRQUMzQlYsUUFBUUMsR0FBRyxDQUFDUTtJQUdaOzs7Ozs7SUFNQSxHQUNGO0lBRUEscUJBQ0U7a0JBWUUsNEVBQUNFO1lBQUlDLFdBQVd4QixvRkFBZ0I7OzhCQUM5Qiw4REFBQzBCO29CQUFHRixXQUFXeEIsZ0ZBQVk7OEJBQUU7Ozs7Ozs4QkFDN0IsOERBQUM0QjtvQkFBTUosV0FBV3hCLGdGQUFZO29CQUFFUyxNQUFLO29CQUFRb0IsTUFBSztvQkFBUUMsYUFBWTtvQkFBUUMsVUFBVXpCO29CQUFjMEIsUUFBUTs7Ozs7OzhCQUM5Ryw4REFBQ0o7b0JBQU1KLFdBQVd4QixnRkFBWTtvQkFBRVMsTUFBSztvQkFBV29CLE1BQUs7b0JBQVdDLGFBQVk7b0JBQWFDLFVBQVV6QjtvQkFBYzBCLFFBQVE7Ozs7Ozs4QkFDekgsOERBQUNDO29CQUFPVCxXQUFXeEIsaUZBQWE7b0JBQUVrQyxTQUFTdkI7b0JBQWNrQixNQUFLOzhCQUFTOzs7Ozs7Ozs7Ozs7O0FBSy9FO0dBaER3QjVCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvaW5pY2lvL2xvZ2luL3BhZ2UuanM/Nzg5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9BdXRoZW50aWNhdGlvbi5tb2R1bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcclxuICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZSh7IGVtYWlsOiAnJywgcGFzc3dvcmQ6ICcnIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4gc2V0Rm9ybSh7IC4uLmZvcm0sIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCgpIHtcclxuICAgIGNvbnNvbGUubG9nKGZvcm0pXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2xvZ2luJywge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczoge1wiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm0pXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgIFxyXG4gICAgLypcclxuICAgIGlmIChyZXMub2spIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgZGF0YS50b2tlbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydChkYXRhLmVycm9yIHx8ICdFcnJvciBhbCBpbmljaWFyIHNlc2nDs24nKTtcclxuICAgIH1cclxuICAgICovXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgey8qXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLmZvcm19IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+SW5pY2lhciBTZXNpw7NuPC9oMj5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9IG5hbWU9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSByZXF1aXJlZCAvPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0gbmFtZT1cInBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJDb250cmFzZcOxYVwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IHR5cGU9XCJzdWJtaXRcIj5JbmljaWFyIHNlc2nDs248L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgICAqL1xyXG4gICAgICB9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PkluaWNpYXIgU2VzacOzbjwvaDI+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fSBuYW1lPVwiZW1haWxcIiB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gcmVxdWlyZWQgLz5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9IG5hbWU9XCJwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiQ29udHJhc2XDsWFcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSByZXF1aXJlZCAvPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9IHR5cGU9XCJidXR0b25cIj5JbmljaWFyIHNlc2nDs248L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuXHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzdHlsZXMiLCJMb2dpbiIsImZvcm0iLCJzZXRGb3JtIiwiZW1haWwiLCJwYXNzd29yZCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJjb25zb2xlIiwibG9nIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwianNvbiIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImgyIiwidGl0bGUiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/inicio/login/page.js\n"));

/***/ })

});