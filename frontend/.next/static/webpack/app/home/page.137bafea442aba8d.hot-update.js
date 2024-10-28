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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"(app-pages-browser)/./src/app/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [userID, setUserID] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [pins, setPins] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const storedUserID = localStorage.getItem(\"userID\");\n        if (storedUserID) {\n            setUserID(storedUserID);\n            console.log(\"UserID: \".concat(storedUserID));\n            fetchPins();\n        } else {\n            alert(\"No se encontr\\xf3 un ID de usuario.\");\n        }\n    }, []);\n    const fetchPins = async ()=>{\n        try {\n            const res = await fetch(\"http://localhost:4000/pins\");\n            if (!res.ok) throw new Error(\"Error al cargar pins\");\n            const data = await res.json();\n            setPins(data);\n        } catch (error) {\n            console.error(\"Error al cargar pins:\", error);\n        }\n    };\n    const handleLogout = ()=>{\n        localStorage.removeItem(\"userID\"); // Eliminar solo el userID\n        router.push(\"/inicio/login\");\n    };\n    // Subir imagen como Base64\n    const handleImageUpload = async ()=>{\n        if (!image || !title) {\n            alert(\"Por favor, selecciona una imagen y proporciona un t\\xedtulo.\");\n            return;\n        }\n        const reader = new FileReader();\n        reader.onloadend = async ()=>{\n            const base64Image = reader.result;\n            const storedUserID = localStorage.getItem(\"userID\");\n            const newPin = {\n                title,\n                image_base64: base64Image\n            };\n            try {\n                const res = await fetch(\"http://localhost:4000/pins\", {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify(newPin)\n                });\n                if (!res.ok) throw new Error(\"Error: \".concat(res.status));\n                const createdPin = await res.json();\n                setPins((prevPins)=>[\n                        ...prevPins,\n                        createdPin\n                    ]);\n                // Resetear el estado\n                setTitle(\"\");\n                setImage(null);\n            } catch (error) {\n                console.error(\"Error al subir imagen:\", error);\n                alert(\"No se pudo subir la imagen.\");\n            }\n        };\n        reader.readAsDataURL(image); // Convierte la imagen a Base64\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().actions),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n                        onClick: handleLogout,\n                        children: \"Cerrar Sesi\\xf3n\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alumnodigitales1\\\\Documents\\\\GitHub\\\\2024-TPfinal-G11\\\\frontend\\\\src\\\\app\\\\home\\\\page.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n                        children: \"Tableros\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alumnodigitales1\\\\Documents\\\\GitHub\\\\2024-TPfinal-G11\\\\frontend\\\\src\\\\app\\\\home\\\\page.js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"T\\xedtulo de la imagen\",\n                        value: title,\n                        onChange: (e)=>setTitle(e.target.value),\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alumnodigitales1\\\\Documents\\\\GitHub\\\\2024-TPfinal-G11\\\\frontend\\\\src\\\\app\\\\home\\\\page.js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"file\",\n                        onChange: (e)=>setImage(e.target.files[0]),\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alumnodigitales1\\\\Documents\\\\GitHub\\\\2024-TPfinal-G11\\\\frontend\\\\src\\\\app\\\\home\\\\page.js\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n                        onClick: handleImageUpload,\n                        children: \"Subir Imagen\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alumnodigitales1\\\\Documents\\\\GitHub\\\\2024-TPfinal-G11\\\\frontend\\\\src\\\\app\\\\home\\\\page.js\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\alumnodigitales1\\\\Documents\\\\GitHub\\\\2024-TPfinal-G11\\\\frontend\\\\src\\\\app\\\\home\\\\page.js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().pinContainer),\n                children: pins.map((pin)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().pin),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: pin.image_url,\n                                alt: pin.title,\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().image)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\alumnodigitales1\\\\Documents\\\\GitHub\\\\2024-TPfinal-G11\\\\frontend\\\\src\\\\app\\\\home\\\\page.js\",\n                                lineNumber: 112,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().pinTitle),\n                                children: pin.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\alumnodigitales1\\\\Documents\\\\GitHub\\\\2024-TPfinal-G11\\\\frontend\\\\src\\\\app\\\\home\\\\page.js\",\n                                lineNumber: 113,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    pin.likes,\n                                    \" Likes\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\alumnodigitales1\\\\Documents\\\\GitHub\\\\2024-TPfinal-G11\\\\frontend\\\\src\\\\app\\\\home\\\\page.js\",\n                                lineNumber: 114,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, pin.id, true, {\n                        fileName: \"C:\\\\Users\\\\alumnodigitales1\\\\Documents\\\\GitHub\\\\2024-TPfinal-G11\\\\frontend\\\\src\\\\app\\\\home\\\\page.js\",\n                        lineNumber: 111,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\alumnodigitales1\\\\Documents\\\\GitHub\\\\2024-TPfinal-G11\\\\frontend\\\\src\\\\app\\\\home\\\\page.js\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\alumnodigitales1\\\\Documents\\\\GitHub\\\\2024-TPfinal-G11\\\\frontend\\\\src\\\\app\\\\home\\\\page.js\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"NNeWHR4kpqpOv6YJc+5N5xgm5mM=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvaG9tZS9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUU0QztBQUNBO0FBQ0c7QUFFaEMsU0FBU0k7O0lBQ3RCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNPLE1BQU1DLFFBQVEsR0FBR1IsK0NBQVFBLENBQUMsRUFBRTtJQUNuQyxNQUFNLENBQUNTLE9BQU9DLFNBQVMsR0FBR1YsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDVyxPQUFPQyxTQUFTLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU1hLFNBQVNYLDBEQUFTQTtJQUV4QkQsZ0RBQVNBLENBQUM7UUFDUixNQUFNYSxlQUFlQyxhQUFhQyxPQUFPLENBQUM7UUFDMUMsSUFBSUYsY0FBYztZQUNoQlIsVUFBVVE7WUFDVkcsUUFBUUMsR0FBRyxDQUFDLFdBQXdCLE9BQWJKO1lBQ3ZCSztRQUNGLE9BQU87WUFDTEMsTUFBTTtRQUNSO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUQsWUFBWTtRQUNoQixJQUFJO1lBQ0YsTUFBTUUsTUFBTSxNQUFNQyxNQUFNO1lBQ3hCLElBQUksQ0FBQ0QsSUFBSUUsRUFBRSxFQUFFLE1BQU0sSUFBSUMsTUFBTTtZQUM3QixNQUFNQyxPQUFPLE1BQU1KLElBQUlLLElBQUk7WUFDM0JsQixRQUFRaUI7UUFDVixFQUFFLE9BQU9FLE9BQU87WUFDZFYsUUFBUVUsS0FBSyxDQUFDLHlCQUF5QkE7UUFDekM7SUFDRjtJQUVBLE1BQU1DLGVBQWU7UUFDbkJiLGFBQWFjLFVBQVUsQ0FBQyxXQUFXLDBCQUEwQjtRQUM3RGhCLE9BQU9pQixJQUFJLENBQUM7SUFDZDtJQUVBLDJCQUEyQjtJQUMzQixNQUFNQyxvQkFBb0I7UUFDeEIsSUFBSSxDQUFDdEIsU0FBUyxDQUFDRSxPQUFPO1lBQ3BCUyxNQUFNO1lBQ047UUFDRjtRQUVBLE1BQU1ZLFNBQVMsSUFBSUM7UUFFbkJELE9BQU9FLFNBQVMsR0FBRztZQUNqQixNQUFNQyxjQUFjSCxPQUFPSSxNQUFNO1lBQ2pDLE1BQU10QixlQUFlQyxhQUFhQyxPQUFPLENBQUM7WUFFMUMsTUFBTXFCLFNBQVM7Z0JBQ2IxQjtnQkFDQTJCLGNBQWNIO1lBQ2hCO1lBRUEsSUFBSTtnQkFDRixNQUFNZCxNQUFNLE1BQU1DLE1BQU0sOEJBQThCO29CQUNwRGlCLFFBQVE7b0JBQ1JDLFNBQVM7d0JBQUUsZ0JBQWdCO29CQUFtQjtvQkFDOUNDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ047Z0JBQ3ZCO2dCQUVBLElBQUksQ0FBQ2hCLElBQUlFLEVBQUUsRUFBRSxNQUFNLElBQUlDLE1BQU0sVUFBcUIsT0FBWEgsSUFBSXVCLE1BQU07Z0JBQ2pELE1BQU1DLGFBQWEsTUFBTXhCLElBQUlLLElBQUk7Z0JBQ2pDbEIsUUFBUSxDQUFDc0MsV0FBYTsyQkFBSUE7d0JBQVVEO3FCQUFXO2dCQUUvQyxxQkFBcUI7Z0JBQ3JCakMsU0FBUztnQkFDVEYsU0FBUztZQUNYLEVBQUUsT0FBT2lCLE9BQU87Z0JBQ2RWLFFBQVFVLEtBQUssQ0FBQywwQkFBMEJBO2dCQUN4Q1AsTUFBTTtZQUNSO1FBQ0Y7UUFFQVksT0FBT2UsYUFBYSxDQUFDdEMsUUFBUSwrQkFBK0I7SUFDOUQ7SUFFQSxxQkFDRSw4REFBQ3VDO1FBQUlDLFdBQVc5QywwRUFBZ0I7OzBCQUM5Qiw4REFBQzZDO2dCQUFJQyxXQUFXOUMsd0VBQWM7O2tDQUM1Qiw4REFBQ2lEO3dCQUFPSCxXQUFXOUMsdUVBQWE7d0JBQUVrRCxTQUFTekI7a0NBQWM7Ozs7OztrQ0FHekQsOERBQUN3Qjt3QkFBT0gsV0FBVzlDLHVFQUFhO2tDQUFFOzs7Ozs7a0NBQ2xDLDhEQUFDbUQ7d0JBQ0NDLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pDLE9BQU85Qzt3QkFDUCtDLFVBQVUsQ0FBQ0MsSUFBTS9DLFNBQVMrQyxFQUFFQyxNQUFNLENBQUNILEtBQUs7d0JBQ3hDSSxRQUFROzs7Ozs7a0NBRVYsOERBQUNQO3dCQUNDQyxNQUFLO3dCQUNMRyxVQUFVLENBQUNDLElBQU1qRCxTQUFTaUQsRUFBRUMsTUFBTSxDQUFDRSxLQUFLLENBQUMsRUFBRTt3QkFDM0NELFFBQVE7Ozs7OztrQ0FFViw4REFBQ1Q7d0JBQ0NILFdBQVc5Qyx1RUFBYTt3QkFDeEJrRCxTQUFTdEI7a0NBQ1Y7Ozs7Ozs7Ozs7OzswQkFLSCw4REFBQ2lCO2dCQUFJQyxXQUFXOUMsNkVBQW1COzBCQUNoQ0ksS0FBS3lELEdBQUcsQ0FBQyxDQUFDQyxvQkFDVCw4REFBQ2pCO3dCQUFpQkMsV0FBVzlDLG9FQUFVOzswQ0FDckMsOERBQUMrRDtnQ0FBSUMsS0FBS0YsSUFBSUcsU0FBUztnQ0FBRUMsS0FBS0osSUFBSXRELEtBQUs7Z0NBQUVzQyxXQUFXOUMsc0VBQVk7Ozs7OzswQ0FDaEUsOERBQUNtRTtnQ0FBR3JCLFdBQVc5Qyx5RUFBZTswQ0FBRzhELElBQUl0RCxLQUFLOzs7Ozs7MENBQzFDLDhEQUFDNkQ7O29DQUFHUCxJQUFJUSxLQUFLO29DQUFDOzs7Ozs7Ozt1QkFITlIsSUFBSVMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQVMxQjtHQWpId0J0RTs7UUFLUEYsc0RBQVNBOzs7S0FMRkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9ob21lL3BhZ2UuanM/NTg0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW3VzZXJJRCwgc2V0VXNlcklEXSA9IHVzZVN0YXRlKG51bGwpOyBcclxuICBjb25zdCBbcGlucywgc2V0UGluc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3JlZFVzZXJJRCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySUQnKTtcclxuICAgIGlmIChzdG9yZWRVc2VySUQpIHtcclxuICAgICAgc2V0VXNlcklEKHN0b3JlZFVzZXJJRCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBVc2VySUQ6ICR7c3RvcmVkVXNlcklEfWApO1xyXG4gICAgICBmZXRjaFBpbnMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KCdObyBzZSBlbmNvbnRyw7MgdW4gSUQgZGUgdXN1YXJpby4nKTsgXHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBmZXRjaFBpbnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL3BpbnMnKTtcclxuICAgICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcignRXJyb3IgYWwgY2FyZ2FyIHBpbnMnKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIHNldFBpbnMoZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhbCBjYXJnYXIgcGluczonLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXJJRCcpOyAvLyBFbGltaW5hciBzb2xvIGVsIHVzZXJJRFxyXG4gICAgcm91dGVyLnB1c2goJy9pbmljaW8vbG9naW4nKTtcclxuICB9O1xyXG5cclxuICAvLyBTdWJpciBpbWFnZW4gY29tbyBCYXNlNjRcclxuICBjb25zdCBoYW5kbGVJbWFnZVVwbG9hZCA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICghaW1hZ2UgfHwgIXRpdGxlKSB7XHJcbiAgICAgIGFsZXJ0KCdQb3IgZmF2b3IsIHNlbGVjY2lvbmEgdW5hIGltYWdlbiB5IHByb3BvcmNpb25hIHVuIHTDrXR1bG8uJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgIHJlYWRlci5vbmxvYWRlbmQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGJhc2U2NEltYWdlID0gcmVhZGVyLnJlc3VsdDtcclxuICAgICAgY29uc3Qgc3RvcmVkVXNlcklEID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJJRCcpO1xyXG5cclxuICAgICAgY29uc3QgbmV3UGluID0ge1xyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIGltYWdlX2Jhc2U2NDogYmFzZTY0SW1hZ2UsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjQwMDAvcGlucycsIHtcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdQaW4pLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKGBFcnJvcjogJHtyZXMuc3RhdHVzfWApO1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZWRQaW4gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIHNldFBpbnMoKHByZXZQaW5zKSA9PiBbLi4ucHJldlBpbnMsIGNyZWF0ZWRQaW5dKTtcclxuXHJcbiAgICAgICAgLy8gUmVzZXRlYXIgZWwgZXN0YWRvXHJcbiAgICAgICAgc2V0VGl0bGUoJycpO1xyXG4gICAgICAgIHNldEltYWdlKG51bGwpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGFsIHN1YmlyIGltYWdlbjonLCBlcnJvcik7XHJcbiAgICAgICAgYWxlcnQoJ05vIHNlIHB1ZG8gc3ViaXIgbGEgaW1hZ2VuLicpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGltYWdlKTsgLy8gQ29udmllcnRlIGxhIGltYWdlbiBhIEJhc2U2NFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uc30+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+XHJcbiAgICAgICAgICBDZXJyYXIgU2VzacOzblxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5UYWJsZXJvczwvYnV0dG9uPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUw610dWxvIGRlIGxhIGltYWdlblwiXHJcbiAgICAgICAgICB2YWx1ZT17dGl0bGV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW1hZ2UoZS50YXJnZXQuZmlsZXNbMF0pfVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IFxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlSW1hZ2VVcGxvYWR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgU3ViaXIgSW1hZ2VuXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5waW5Db250YWluZXJ9PlxyXG4gICAgICAgIHtwaW5zLm1hcCgocGluKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17cGluLmlkfSBjbGFzc05hbWU9e3N0eWxlcy5waW59PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17cGluLmltYWdlX3VybH0gYWx0PXtwaW4udGl0bGV9IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfSAvPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMucGluVGl0bGV9PntwaW4udGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgPHA+e3Bpbi5saWtlc30gTGlrZXM8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsInN0eWxlcyIsIkhvbWUiLCJ1c2VySUQiLCJzZXRVc2VySUQiLCJwaW5zIiwic2V0UGlucyIsImltYWdlIiwic2V0SW1hZ2UiLCJ0aXRsZSIsInNldFRpdGxlIiwicm91dGVyIiwic3RvcmVkVXNlcklEIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaFBpbnMiLCJhbGVydCIsInJlcyIsImZldGNoIiwib2siLCJFcnJvciIsImRhdGEiLCJqc29uIiwiZXJyb3IiLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmVJdGVtIiwicHVzaCIsImhhbmRsZUltYWdlVXBsb2FkIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZGVuZCIsImJhc2U2NEltYWdlIiwicmVzdWx0IiwibmV3UGluIiwiaW1hZ2VfYmFzZTY0IiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwiY3JlYXRlZFBpbiIsInByZXZQaW5zIiwicmVhZEFzRGF0YVVSTCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImFjdGlvbnMiLCJidXR0b24iLCJvbkNsaWNrIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInJlcXVpcmVkIiwiZmlsZXMiLCJwaW5Db250YWluZXIiLCJtYXAiLCJwaW4iLCJpbWciLCJzcmMiLCJpbWFnZV91cmwiLCJhbHQiLCJoMyIsInBpblRpdGxlIiwicCIsImxpa2VzIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/home/page.js\n"));

/***/ })

});