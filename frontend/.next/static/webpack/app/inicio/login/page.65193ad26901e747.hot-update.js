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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Authentication_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Authentication.module.css */ \"(app-pages-browser)/./src/app/styles/Authentication.module.css\");\n/* harmony import */ var _styles_Authentication_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Authentication_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Login() {\n    _s();\n    const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    const handleChange = (e)=>setForm({\n            ...form,\n            [e.target.name]: e.target.value\n        });\n    async function handleSubmit() {\n        console.log(form);\n        const res = await fetch(\"http://localhost:4000/login\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(form)\n        });\n        const data = await res.json();\n        console.log(data);\n        if (res.status == 401) {\n            console.log(\"Credenciales invalidas\");\n        } else {\n            localStorage.setItem(\"userID\", data.id); //localStorage.getItem(\"userID\")\n            location.href = \"/home\";\n        }\n    /*\r\n    if (res.ok) {\r\n      localStorage.setItem('token', data.token);\r\n    } else {\r\n      alert(data.error || 'Error al iniciar sesión');\r\n    }\r\n    */ }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Authentication_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: (_styles_Authentication_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),\n                    children: \"Iniciar Sesi\\xf3n\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alumnomaster2\\\\Documents\\\\GitHub\\\\2024-TPfinal-G11\\\\frontend\\\\src\\\\app\\\\inicio\\\\login\\\\page.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: (_styles_Authentication_module_css__WEBPACK_IMPORTED_MODULE_2___default().input),\n                    name: \"email\",\n                    type: \"email\",\n                    placeholder: \"Email\",\n                    onChange: handleChange,\n                    required: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alumnomaster2\\\\Documents\\\\GitHub\\\\2024-TPfinal-G11\\\\frontend\\\\src\\\\app\\\\inicio\\\\login\\\\page.js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: (_styles_Authentication_module_css__WEBPACK_IMPORTED_MODULE_2___default().input),\n                    name: \"password\",\n                    type: \"password\",\n                    placeholder: \"Contrase\\xf1a\",\n                    onChange: handleChange,\n                    required: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alumnomaster2\\\\Documents\\\\GitHub\\\\2024-TPfinal-G11\\\\frontend\\\\src\\\\app\\\\inicio\\\\login\\\\page.js\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_Authentication_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),\n                    onClick: handleSubmit,\n                    type: \"button\",\n                    children: \"Iniciar sesi\\xf3n\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alumnomaster2\\\\Documents\\\\GitHub\\\\2024-TPfinal-G11\\\\frontend\\\\src\\\\app\\\\inicio\\\\login\\\\page.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\alumnomaster2\\\\Documents\\\\GitHub\\\\2024-TPfinal-G11\\\\frontend\\\\src\\\\app\\\\inicio\\\\login\\\\page.js\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Login, \"YN82mk+BAqI6iccZJp7HrBuCAaU=\");\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvaW5pY2lvL2xvZ2luL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFaUM7QUFDMkI7QUFFN0MsU0FBU0U7O0lBQ3RCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSiwrQ0FBUUEsQ0FBQztRQUFFSyxPQUFPO1FBQUlDLFVBQVU7SUFBRztJQUUzRCxNQUFNQyxlQUFlLENBQUNDLElBQU1KLFFBQVE7WUFBRSxHQUFHRCxJQUFJO1lBQUUsQ0FBQ0ssRUFBRUMsTUFBTSxDQUFDQyxJQUFJLENBQUMsRUFBRUYsRUFBRUMsTUFBTSxDQUFDRSxLQUFLO1FBQUM7SUFFL0UsZUFBZUM7UUFDYkMsUUFBUUMsR0FBRyxDQUFDWDtRQUNaLE1BQU1ZLE1BQU0sTUFBTUMsTUFBTSwrQkFBK0I7WUFDckRDLFFBQVE7WUFDUkMsU0FBUztnQkFBQyxnQkFBZ0I7WUFBbUI7WUFDN0NDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ2xCO1FBQ3ZCO1FBRUEsTUFBTW1CLE9BQU8sTUFBTVAsSUFBSVEsSUFBSTtRQUMzQlYsUUFBUUMsR0FBRyxDQUFDUTtRQUNaLElBQUlQLElBQUlTLE1BQU0sSUFBSSxLQUFLO1lBQ3JCWCxRQUFRQyxHQUFHLENBQUM7UUFDZCxPQUNJO1lBQ0ZXLGFBQWFDLE9BQU8sQ0FBQyxVQUFVSixLQUFLSyxFQUFFLEdBQUcsZ0NBQWdDO1lBQ3pFQyxTQUFTQyxJQUFJLEdBQUc7UUFDbEI7SUFFQTs7Ozs7O0lBTUEsR0FDRjtJQUVBLHFCQUNFO2tCQVlFLDRFQUFDQztZQUFJQyxXQUFXOUIsb0ZBQWdCOzs4QkFDOUIsOERBQUNnQztvQkFBR0YsV0FBVzlCLGdGQUFZOzhCQUFFOzs7Ozs7OEJBQzdCLDhEQUFDa0M7b0JBQU1KLFdBQVc5QixnRkFBWTtvQkFBRVMsTUFBSztvQkFBUTBCLE1BQUs7b0JBQVFDLGFBQVk7b0JBQVFDLFVBQVUvQjtvQkFBY2dDLFFBQVE7Ozs7Ozs4QkFDOUcsOERBQUNKO29CQUFNSixXQUFXOUIsZ0ZBQVk7b0JBQUVTLE1BQUs7b0JBQVcwQixNQUFLO29CQUFXQyxhQUFZO29CQUFhQyxVQUFVL0I7b0JBQWNnQyxRQUFROzs7Ozs7OEJBQ3pILDhEQUFDQztvQkFBT1QsV0FBVzlCLGlGQUFhO29CQUFFd0MsU0FBUzdCO29CQUFjd0IsTUFBSzs4QkFBUzs7Ozs7Ozs7Ozs7OztBQUsvRTtHQXREd0JsQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2luaWNpby9sb2dpbi9wYWdlLmpzPzc4OTAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvQXV0aGVudGljYXRpb24ubW9kdWxlLmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XHJcbiAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoeyBlbWFpbDogJycsIHBhc3N3b3JkOiAnJyB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHNldEZvcm0oeyAuLi5mb3JtLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhmb3JtKVxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9sb2dpbicsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIix9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtKVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIGlmIChyZXMuc3RhdHVzID09IDQwMSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkNyZWRlbmNpYWxlcyBpbnZhbGlkYXNcIilcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VySUQnLCBkYXRhLmlkKTsgLy9sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJRFwiKVxyXG4gICAgICBsb2NhdGlvbi5ocmVmID0gJy9ob21lJ1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIGRhdGEudG9rZW4pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxlcnQoZGF0YS5lcnJvciB8fCAnRXJyb3IgYWwgaW5pY2lhciBzZXNpw7NuJyk7XHJcbiAgICB9XHJcbiAgICAqL1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHsvKlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PkluaWNpYXIgU2VzacOzbjwvaDI+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fSBuYW1lPVwiZW1haWxcIiB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gcmVxdWlyZWQgLz5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9IG5hbWU9XCJwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiQ29udHJhc2XDsWFcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSByZXF1aXJlZCAvPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSB0eXBlPVwic3VibWl0XCI+SW5pY2lhciBzZXNpw7NuPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICAgKi9cclxuICAgICAgfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5JbmljaWFyIFNlc2nDs248L2gyPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0gbmFtZT1cImVtYWlsXCIgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fSBuYW1lPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIkNvbnRyYXNlw7FhXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gcmVxdWlyZWQgLz5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17aGFuZGxlU3VibWl0fSB0eXBlPVwiYnV0dG9uXCI+SW5pY2lhciBzZXNpw7NuPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcblxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVzIiwiTG9naW4iLCJmb3JtIiwic2V0Rm9ybSIsImVtYWlsIiwicGFzc3dvcmQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwiY29uc29sZSIsImxvZyIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImpzb24iLCJzdGF0dXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiaWQiLCJsb2NhdGlvbiIsImhyZWYiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJoMiIsInRpdGxlIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/inicio/login/page.js\n"));

/***/ })

});