"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/home/page",{

/***/ "(app-pages-browser)/./src/app/home/page.js":
/*!******************************!*\
  !*** ./src/app/home/page.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"(app-pages-browser)/./src/app/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [pins, setPins] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const userID = localStorage.getItem(\"userID\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!userID) {\n            router.push(\"/login\");\n        } else {\n            console.log(\"UserID: \".concat(userID));\n            fetchPins();\n        }\n    }, [\n        userID\n    ]);\n    const fetchPins = async ()=>{\n        try {\n            const res = await fetch(\"http://localhost:4000/pins\");\n            if (!res.ok) throw new Error(\"Error al cargar pins\");\n            const data = await res.json();\n            setPins(data);\n        } catch (error) {\n            console.error(\"Error al cargar pins:\", error);\n        }\n    };\n    const handleLogout = ()=>{\n        localStorage.removeItem(\"userID\"); // Eliminar solo el userID\n        router.push(\"/login\");\n    };\n    // Subir imagen como Base64\n    const handleImageUpload = async (e)=>{\n        e.preventDefault();\n        const reader = new FileReader();\n        reader.onloadend = async ()=>{\n            const base64Image = reader.result;\n            const newPin = {\n                title,\n                image_base64: base64Image\n            };\n            try {\n                const res = await fetch(\"http://localhost:4000/pins\", {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify(newPin)\n                });\n                if (!res.ok) throw new Error(\"Error: \".concat(res.status));\n                const createdPin = await res.json();\n                setPins((prevPins)=>[\n                        ...prevPins,\n                        createdPin\n                    ]);\n                setTitle(\"\");\n                setImage(null);\n            } catch (error) {\n                console.error(\"Error al subir imagen:\", error);\n                alert(\"No se pudo subir la imagen.\");\n            }\n        };\n        reader.readAsDataURL(image); // Convierte la imagen a Base64\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().actions),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n                        onClick: handleLogout,\n                        children: \"Cerrar Sesi\\xf3n\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alumnomaster2\\\\Documents\\\\GitHub\\\\2024-TPfinal-G11\\\\frontend\\\\src\\\\app\\\\home\\\\page.js\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n                        children: \"Tableros\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alumnomaster2\\\\Documents\\\\GitHub\\\\2024-TPfinal-G11\\\\frontend\\\\src\\\\app\\\\home\\\\page.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleImageUpload,\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().uploadForm),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                placeholder: \"T\\xedtulo de la imagen\",\n                                value: title,\n                                onChange: (e)=>setTitle(e.target.value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\alumnomaster2\\\\Documents\\\\GitHub\\\\2024-TPfinal-G11\\\\frontend\\\\src\\\\app\\\\home\\\\page.js\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"file\",\n                                onChange: (e)=>setImage(e.target.files[0]),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\alumnomaster2\\\\Documents\\\\GitHub\\\\2024-TPfinal-G11\\\\frontend\\\\src\\\\app\\\\home\\\\page.js\",\n                                lineNumber: 95,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n                                children: \"Subir Imagen\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\alumnomaster2\\\\Documents\\\\GitHub\\\\2024-TPfinal-G11\\\\frontend\\\\src\\\\app\\\\home\\\\page.js\",\n                                lineNumber: 100,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\alumnomaster2\\\\Documents\\\\GitHub\\\\2024-TPfinal-G11\\\\frontend\\\\src\\\\app\\\\home\\\\page.js\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\alumnomaster2\\\\Documents\\\\GitHub\\\\2024-TPfinal-G11\\\\frontend\\\\src\\\\app\\\\home\\\\page.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().pinContainer),\n                children: pins.map((pin)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().pin),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: pin.image_url,\n                                alt: pin.title,\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().image)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\alumnomaster2\\\\Documents\\\\GitHub\\\\2024-TPfinal-G11\\\\frontend\\\\src\\\\app\\\\home\\\\page.js\",\n                                lineNumber: 110,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().pinTitle),\n                                children: pin.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\alumnomaster2\\\\Documents\\\\GitHub\\\\2024-TPfinal-G11\\\\frontend\\\\src\\\\app\\\\home\\\\page.js\",\n                                lineNumber: 111,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    pin.likes,\n                                    \" Likes\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\alumnomaster2\\\\Documents\\\\GitHub\\\\2024-TPfinal-G11\\\\frontend\\\\src\\\\app\\\\home\\\\page.js\",\n                                lineNumber: 112,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, pin.id, true, {\n                        fileName: \"C:\\\\Users\\\\alumnomaster2\\\\Documents\\\\GitHub\\\\2024-TPfinal-G11\\\\frontend\\\\src\\\\app\\\\home\\\\page.js\",\n                        lineNumber: 109,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\alumnomaster2\\\\Documents\\\\GitHub\\\\2024-TPfinal-G11\\\\frontend\\\\src\\\\app\\\\home\\\\page.js\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\alumnomaster2\\\\Documents\\\\GitHub\\\\2024-TPfinal-G11\\\\frontend\\\\src\\\\app\\\\home\\\\page.js\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"9Q17MPQAUmXLdFgiMZtakuyPbQ8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvaG9tZS9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUU0QztBQUNBO0FBQ0c7QUFFaEMsU0FBU0k7O0lBQ3RCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ25DLE1BQU0sQ0FBQ08sT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNTLE9BQU9DLFNBQVMsR0FBR1YsK0NBQVFBLENBQUM7SUFDbkMsTUFBTVcsU0FBU1QsMERBQVNBO0lBR3hCLE1BQU1VLFNBQVNDLGFBQWFDLE9BQU8sQ0FBQztJQUdwQ2IsZ0RBQVNBLENBQUM7UUFDUixJQUFJLENBQUNXLFFBQVE7WUFDWEQsT0FBT0ksSUFBSSxDQUFDO1FBQ2QsT0FBTztZQUNMQyxRQUFRQyxHQUFHLENBQUMsV0FBa0IsT0FBUEw7WUFDdkJNO1FBQ0Y7SUFDRixHQUFHO1FBQUNOO0tBQU87SUFHWCxNQUFNTSxZQUFZO1FBQ2hCLElBQUk7WUFDRixNQUFNQyxNQUFNLE1BQU1DLE1BQU07WUFDeEIsSUFBSSxDQUFDRCxJQUFJRSxFQUFFLEVBQUUsTUFBTSxJQUFJQyxNQUFNO1lBQzdCLE1BQU1DLE9BQU8sTUFBTUosSUFBSUssSUFBSTtZQUMzQmxCLFFBQVFpQjtRQUNWLEVBQUUsT0FBT0UsT0FBTztZQUNkVCxRQUFRUyxLQUFLLENBQUMseUJBQXlCQTtRQUN6QztJQUNGO0lBR0EsTUFBTUMsZUFBZTtRQUNuQmIsYUFBYWMsVUFBVSxDQUFDLFdBQVcsMEJBQTBCO1FBQzdEaEIsT0FBT0ksSUFBSSxDQUFDO0lBQ2Q7SUFFQSwyQkFBMkI7SUFDM0IsTUFBTWEsb0JBQW9CLE9BQU9DO1FBQy9CQSxFQUFFQyxjQUFjO1FBQ2hCLE1BQU1DLFNBQVMsSUFBSUM7UUFFbkJELE9BQU9FLFNBQVMsR0FBRztZQUNqQixNQUFNQyxjQUFjSCxPQUFPSSxNQUFNO1lBRWpDLE1BQU1DLFNBQVM7Z0JBQ2IzQjtnQkFDQTRCLGNBQWNIO1lBQ2hCO1lBRUEsSUFBSTtnQkFDRixNQUFNZixNQUFNLE1BQU1DLE1BQU0sOEJBQThCO29CQUNwRGtCLFFBQVE7b0JBQ1JDLFNBQVM7d0JBQUUsZ0JBQWdCO29CQUFtQjtvQkFDOUNDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ047Z0JBQ3ZCO2dCQUVBLElBQUksQ0FBQ2pCLElBQUlFLEVBQUUsRUFBRSxNQUFNLElBQUlDLE1BQU0sVUFBcUIsT0FBWEgsSUFBSXdCLE1BQU07Z0JBQ2pELE1BQU1DLGFBQWEsTUFBTXpCLElBQUlLLElBQUk7Z0JBQ2pDbEIsUUFBUSxDQUFDdUMsV0FBYTsyQkFBSUE7d0JBQVVEO3FCQUFXO2dCQUUvQ2xDLFNBQVM7Z0JBQ1RGLFNBQVM7WUFDWCxFQUFFLE9BQU9pQixPQUFPO2dCQUNkVCxRQUFRUyxLQUFLLENBQUMsMEJBQTBCQTtnQkFDeENxQixNQUFNO1lBQ1I7UUFDRjtRQUVBZixPQUFPZ0IsYUFBYSxDQUFDeEMsUUFBUSwrQkFBK0I7SUFDOUQ7SUFFQSxxQkFDRSw4REFBQ3lDO1FBQUlDLFdBQVc5QywwRUFBZ0I7OzBCQUU5Qiw4REFBQzZDO2dCQUFJQyxXQUFXOUMsd0VBQWM7O2tDQUM1Qiw4REFBQ2lEO3dCQUFPSCxXQUFXOUMsdUVBQWE7d0JBQUVrRCxTQUFTM0I7a0NBQWM7Ozs7OztrQ0FHekQsOERBQUMwQjt3QkFBT0gsV0FBVzlDLHVFQUFhO2tDQUFFOzs7Ozs7a0NBQ2xDLDhEQUFDbUQ7d0JBQUtDLFVBQVUzQjt3QkFBbUJxQixXQUFXOUMsMkVBQWlCOzswQ0FDN0QsOERBQUNzRDtnQ0FDQ0MsTUFBSztnQ0FDTEMsYUFBWTtnQ0FDWkMsT0FBT25EO2dDQUNQb0QsVUFBVSxDQUFDaEMsSUFBTW5CLFNBQVNtQixFQUFFaUMsTUFBTSxDQUFDRixLQUFLO2dDQUN4Q0csUUFBUTs7Ozs7OzBDQUVWLDhEQUFDTjtnQ0FDQ0MsTUFBSztnQ0FDTEcsVUFBVSxDQUFDaEMsSUFBTXJCLFNBQVNxQixFQUFFaUMsTUFBTSxDQUFDRSxLQUFLLENBQUMsRUFBRTtnQ0FDM0NELFFBQVE7Ozs7OzswQ0FFViw4REFBQ1g7Z0NBQU9NLE1BQUs7Z0NBQVNULFdBQVc5Qyx1RUFBYTswQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU9wRCw4REFBQzZDO2dCQUFJQyxXQUFXOUMsNkVBQW1COzBCQUNoQ0UsS0FBSzZELEdBQUcsQ0FBQyxDQUFDQyxvQkFDVCw4REFBQ25CO3dCQUFpQkMsV0FBVzlDLG9FQUFVOzswQ0FDckMsOERBQUNpRTtnQ0FBSUMsS0FBS0YsSUFBSUcsU0FBUztnQ0FBRUMsS0FBS0osSUFBSTFELEtBQUs7Z0NBQUV3QyxXQUFXOUMsc0VBQVk7Ozs7OzswQ0FDaEUsOERBQUNxRTtnQ0FBR3ZCLFdBQVc5Qyx5RUFBZTswQ0FBR2dFLElBQUkxRCxLQUFLOzs7Ozs7MENBQzFDLDhEQUFDaUU7O29DQUFHUCxJQUFJUSxLQUFLO29DQUFDOzs7Ozs7Ozt1QkFITlIsSUFBSVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQVMxQjtHQS9Hd0J4RTs7UUFJUEYsc0RBQVNBOzs7S0FKRkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9ob21lL3BhZ2UuanM/NTg0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW3BpbnMsIHNldFBpbnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gXHJcbiAgY29uc3QgdXNlcklEID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJJRCcpO1xyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghdXNlcklEKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBVc2VySUQ6ICR7dXNlcklEfWApO1xyXG4gICAgICBmZXRjaFBpbnMoKTtcclxuICAgIH1cclxuICB9LCBbdXNlcklEXSk7XHJcblxyXG5cclxuICBjb25zdCBmZXRjaFBpbnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL3BpbnMnKTtcclxuICAgICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcignRXJyb3IgYWwgY2FyZ2FyIHBpbnMnKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIHNldFBpbnMoZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhbCBjYXJnYXIgcGluczonLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VySUQnKTsgLy8gRWxpbWluYXIgc29sbyBlbCB1c2VySURcclxuICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICB9O1xyXG5cclxuICAvLyBTdWJpciBpbWFnZW4gY29tbyBCYXNlNjRcclxuICBjb25zdCBoYW5kbGVJbWFnZVVwbG9hZCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgIHJlYWRlci5vbmxvYWRlbmQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGJhc2U2NEltYWdlID0gcmVhZGVyLnJlc3VsdDtcclxuXHJcbiAgICAgIGNvbnN0IG5ld1BpbiA9IHtcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBpbWFnZV9iYXNlNjQ6IGJhc2U2NEltYWdlLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL3BpbnMnLCB7XHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3UGluKSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcihgRXJyb3I6ICR7cmVzLnN0YXR1c31gKTtcclxuICAgICAgICBjb25zdCBjcmVhdGVkUGluID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICBzZXRQaW5zKChwcmV2UGlucykgPT4gWy4uLnByZXZQaW5zLCBjcmVhdGVkUGluXSk7XHJcblxyXG4gICAgICAgIHNldFRpdGxlKCcnKTtcclxuICAgICAgICBzZXRJbWFnZShudWxsKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhbCBzdWJpciBpbWFnZW46JywgZXJyb3IpO1xyXG4gICAgICAgIGFsZXJ0KCdObyBzZSBwdWRvIHN1YmlyIGxhIGltYWdlbi4nKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChpbWFnZSk7IC8vIENvbnZpZXJ0ZSBsYSBpbWFnZW4gYSBCYXNlNjRcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICB7fVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbnN9PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlxyXG4gICAgICAgICAgQ2VycmFyIFNlc2nDs25cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+VGFibGVyb3M8L2J1dHRvbj5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlSW1hZ2VVcGxvYWR9IGNsYXNzTmFtZT17c3R5bGVzLnVwbG9hZEZvcm19PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUw610dWxvIGRlIGxhIGltYWdlblwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJbWFnZShlLnRhcmdldC5maWxlc1swXSl9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5cclxuICAgICAgICAgICAgU3ViaXIgSW1hZ2VuXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qIExpc3RhZG8gZGUgcGlucyAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5waW5Db250YWluZXJ9PlxyXG4gICAgICAgIHtwaW5zLm1hcCgocGluKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17cGluLmlkfSBjbGFzc05hbWU9e3N0eWxlcy5waW59PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17cGluLmltYWdlX3VybH0gYWx0PXtwaW4udGl0bGV9IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfSAvPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMucGluVGl0bGV9PntwaW4udGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgPHA+e3Bpbi5saWtlc30gTGlrZXM8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsInN0eWxlcyIsIkhvbWUiLCJwaW5zIiwic2V0UGlucyIsImltYWdlIiwic2V0SW1hZ2UiLCJ0aXRsZSIsInNldFRpdGxlIiwicm91dGVyIiwidXNlcklEIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hQaW5zIiwicmVzIiwiZmV0Y2giLCJvayIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJlcnJvciIsImhhbmRsZUxvZ291dCIsInJlbW92ZUl0ZW0iLCJoYW5kbGVJbWFnZVVwbG9hZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJiYXNlNjRJbWFnZSIsInJlc3VsdCIsIm5ld1BpbiIsImltYWdlX2Jhc2U2NCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YXR1cyIsImNyZWF0ZWRQaW4iLCJwcmV2UGlucyIsImFsZXJ0IiwicmVhZEFzRGF0YVVSTCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImFjdGlvbnMiLCJidXR0b24iLCJvbkNsaWNrIiwiZm9ybSIsIm9uU3VibWl0IiwidXBsb2FkRm9ybSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInJlcXVpcmVkIiwiZmlsZXMiLCJwaW5Db250YWluZXIiLCJtYXAiLCJwaW4iLCJpbWciLCJzcmMiLCJpbWFnZV91cmwiLCJhbHQiLCJoMyIsInBpblRpdGxlIiwicCIsImxpa2VzIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/home/page.js\n"));

/***/ })

});