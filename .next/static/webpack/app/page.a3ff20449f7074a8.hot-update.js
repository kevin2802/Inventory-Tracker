"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/firebase */ \"(app-pages-browser)/./firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [inventory, setInventory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [itemName, setItemName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const updateInventory = async ()=>{\n        const snapshot = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore, \"inventory\"));\n        const docs = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)(snapshot);\n        const inventoryList = [];\n        docs.forEach((doc)=>{\n            inventoryList.push({\n                name: doc.id,\n                ...doc.data()\n            });\n        });\n        setInventory(inventoryList);\n    };\n    const removeItem = async (item)=>{\n        const docref = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore, \"inventory\"), item) //the doc we are getting from db\n        ;\n        const docsnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(docref);\n        if (docsnapshot.exists()) {\n            const { count } = docsnapshot.data();\n            if (count == 1) {\n                await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.deleteDoc)(docref) //if count is 1 and we are deleting then delete the docref from db\n                ;\n            } else {\n                await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(docref, {\n                    count: count - 1\n                }) //set count -1\n                ;\n            }\n        }\n    };\n    const addItem = async (item)=>{\n        const docref = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore, \"inventory\"), item) //the doc we are getting from db\n        ;\n        const docsnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(docref);\n        if (docsnapshot.exists()) {\n            const { count } = docsnapshot.data();\n            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(docref, {\n                count: count - 1\n            }) //if it exists add one\n            ;\n        } else {\n            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(docref, {\n                count: 1\n            }) //set quanity to 1 if doc doesnt exist\n            ;\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        updateInventory();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-4xl text-center font-semibold my-7\",\n                children: \"Inventory Management\"\n            }, void 0, false, {\n                fileName: \"/Users/kevin/Documents/Inventory-Tracker/app/page.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"min-w-full border-collapse block md:table center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        className: \"block md:table-header-group\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            className: \"border border-gray-300 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"bg-gray-600 p-2 text-white font-bold md:border md:border-gray-300 text-left block md:table-cell\",\n                                    children: \"Name\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kevin/Documents/Inventory-Tracker/app/page.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"bg-gray-600 p-2 text-white font-bold md:border md:border-gray-300 text-left block md:table-cell\",\n                                    children: \"Count\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kevin/Documents/Inventory-Tracker/app/page.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"bg-gray-600 p-2 text-white font-bold md:border md:border-gray-300 text-left block md:table-cell\",\n                                    children: \"Actions\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kevin/Documents/Inventory-Tracker/app/page.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kevin/Documents/Inventory-Tracker/app/page.js\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/Documents/Inventory-Tracker/app/page.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        className: \"block md:table-row-group\",\n                        children: inventory.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                className: \"bg-gray-300 border border-gray-500 md:border-none block md:table-row\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"p-2 md:border md:border-gray-300 text-left block md:table-cell\",\n                                        children: item.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kevin/Documents/Inventory-Tracker/app/page.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"p-2 md:border md:border-gray-300 text-left block md:table-cell\",\n                                        children: item.count\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kevin/Documents/Inventory-Tracker/app/page.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"p-2 md:border md:border-gray-300 text-left block md:table-cell\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-500 rounded\",\n                                                onClick: ()=>addItem(item.name),\n                                                children: \"Add\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kevin/Documents/Inventory-Tracker/app/page.js\",\n                                                lineNumber: 76,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded ml-2\",\n                                                onClick: ()=>removeItem(item.name),\n                                                children: \"Remove\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kevin/Documents/Inventory-Tracker/app/page.js\",\n                                                lineNumber: 77,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kevin/Documents/Inventory-Tracker/app/page.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, item.name, true, {\n                                fileName: \"/Users/kevin/Documents/Inventory-Tracker/app/page.js\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/Documents/Inventory-Tracker/app/page.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kevin/Documents/Inventory-Tracker/app/page.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kevin/Documents/Inventory-Tracker/app/page.js\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"XEU0pFG1ZOq5zh9Gh76fHMKQatw=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UyxJQUFNWixRQUFRTCxLQUFLSixJQUFJOzBEQUFHOzs7Ozs7MERBQ3RKLDhEQUFDb0I7Z0RBQU9SLFdBQVU7Z0RBQWdHUyxTQUFTLElBQU1sQixXQUFXQyxLQUFLSixJQUFJOzBEQUFHOzs7Ozs7Ozs7Ozs7OytCQUxuSkksS0FBS0osSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCOUI7R0FqRndCYjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qcz9iZTY3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQge3VzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBmaXJlc3RvcmUgfSBmcm9tIFwiQC9maXJlYmFzZVwiO1xuaW1wb3J0IHsgY29sbGVjdGlvbiwgZGVsZXRlRG9jLCBnZXREb2MsIGdldERvY3MsIHF1ZXJ5LCBzZXREb2MsIGRvY30gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtpbnZlbnRvcnksc2V0SW52ZW50b3J5XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2l0ZW1OYW1lLCBzZXRJdGVtTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtvcGVuLHNldE9wZW5dPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCB1cGRhdGVJbnZlbnRvcnkgPSBhc3luYyAoKSA9PntcbiAgICBjb25zdCBzbmFwc2hvdCA9IHF1ZXJ5KGNvbGxlY3Rpb24oZmlyZXN0b3JlLCdpbnZlbnRvcnknKSlcbiAgICBjb25zdCBkb2NzID0gYXdhaXQgZ2V0RG9jcyhzbmFwc2hvdClcbiAgICBjb25zdCBpbnZlbnRvcnlMaXN0PVtdXG4gICAgZG9jcy5mb3JFYWNoKChkb2MpPT57XG4gICAgICBpbnZlbnRvcnlMaXN0LnB1c2goe1xuICAgICAgICBuYW1lOmRvYy5pZCxcbiAgICAgICAgLi4uZG9jLmRhdGEoKSxcbiAgICAgIH0pXG4gICAgfSlcbiAgICBzZXRJbnZlbnRvcnkoaW52ZW50b3J5TGlzdCk7XG4gIH1cbiAgY29uc3QgcmVtb3ZlSXRlbSA9IGFzeW5jKGl0ZW0pPT57XG4gICAgY29uc3QgZG9jcmVmID0gZG9jKGNvbGxlY3Rpb24oZmlyZXN0b3JlLCdpbnZlbnRvcnknKSxpdGVtKSAvL3RoZSBkb2Mgd2UgYXJlIGdldHRpbmcgZnJvbSBkYlxuICAgIGNvbnN0IGRvY3NuYXBzaG90ID0gYXdhaXQgZ2V0RG9jKGRvY3JlZilcbiAgICBpZihkb2NzbmFwc2hvdC5leGlzdHMoKSl7XG4gICAgICBjb25zdCB7Y291bnR9ID0gZG9jc25hcHNob3QuZGF0YSgpXG4gICAgICBpZihjb3VudCA9PSAxKXtcbiAgICAgICAgYXdhaXQgZGVsZXRlRG9jKGRvY3JlZikvL2lmIGNvdW50IGlzIDEgYW5kIHdlIGFyZSBkZWxldGluZyB0aGVuIGRlbGV0ZSB0aGUgZG9jcmVmIGZyb20gZGJcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIGF3YWl0IHNldERvYyhkb2NyZWYse2NvdW50OmNvdW50LTF9KS8vc2V0IGNvdW50IC0xXG4gICAgICB9XG4gICAgfVxuXG5cbiAgfVxuICBjb25zdCBhZGRJdGVtID0gYXN5bmMoaXRlbSk9PntcbiAgICBjb25zdCBkb2NyZWYgPSBkb2MoY29sbGVjdGlvbihmaXJlc3RvcmUsJ2ludmVudG9yeScpLGl0ZW0pIC8vdGhlIGRvYyB3ZSBhcmUgZ2V0dGluZyBmcm9tIGRiXG4gICAgY29uc3QgZG9jc25hcHNob3QgPSBhd2FpdCBnZXREb2MoZG9jcmVmKVxuICAgIGlmKGRvY3NuYXBzaG90LmV4aXN0cygpKXtcbiAgICAgIGNvbnN0IHtjb3VudH0gPSBkb2NzbmFwc2hvdC5kYXRhKClcbiAgICAgIFxuICAgICAgYXdhaXQgc2V0RG9jKGRvY3JlZix7Y291bnQ6Y291bnQtMX0pLy9pZiBpdCBleGlzdHMgYWRkIG9uZVxuICAgICAgXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICBhd2FpdCBzZXREb2MoZG9jcmVmLHtjb3VudDoxfSkvL3NldCBxdWFuaXR5IHRvIDEgaWYgZG9jIGRvZXNudCBleGlzdFxuICAgIH1cblxuXG4gIH1cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgdXBkYXRlSW52ZW50b3J5KClcbiAgfSxbXVxuICApXG4gIHJldHVybiAoXG4gICAgPGRpdj4gXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTR4bCB0ZXh0LWNlbnRlciBmb250LXNlbWlib2xkIG15LTdcIj5JbnZlbnRvcnkgTWFuYWdlbWVudDwvcD5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJtaW4tdy1mdWxsIGJvcmRlci1jb2xsYXBzZSBibG9jayBtZDp0YWJsZSBjZW50ZXJcIj5cbiAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cImJsb2NrIG1kOnRhYmxlLWhlYWRlci1ncm91cFwiPlxuICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwIG1kOmJvcmRlci1ub25lIGJsb2NrIG1kOnRhYmxlLXJvdyBhYnNvbHV0ZSAtdG9wLWZ1bGwgbWQ6dG9wLWF1dG8gLWxlZnQtZnVsbCBtZDpsZWZ0LWF1dG8gbWQ6cmVsYXRpdmVcIj5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJiZy1ncmF5LTYwMCBwLTIgdGV4dC13aGl0ZSBmb250LWJvbGQgbWQ6Ym9yZGVyIG1kOmJvcmRlci1ncmF5LTMwMCB0ZXh0LWxlZnQgYmxvY2sgbWQ6dGFibGUtY2VsbFwiPk5hbWU8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImJnLWdyYXktNjAwIHAtMiB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBtZDpib3JkZXIgbWQ6Ym9yZGVyLWdyYXktMzAwIHRleHQtbGVmdCBibG9jayBtZDp0YWJsZS1jZWxsXCI+Q291bnQ8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImJnLWdyYXktNjAwIHAtMiB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBtZDpib3JkZXIgbWQ6Ym9yZGVyLWdyYXktMzAwIHRleHQtbGVmdCBibG9jayBtZDp0YWJsZS1jZWxsXCI+QWN0aW9uczwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cImJsb2NrIG1kOnRhYmxlLXJvdy1ncm91cFwiPlxuICAgICAgICAgIHtpbnZlbnRvcnkubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8dHIga2V5PXtpdGVtLm5hbWV9IGNsYXNzTmFtZT1cImJnLWdyYXktMzAwIGJvcmRlciBib3JkZXItZ3JheS01MDAgbWQ6Ym9yZGVyLW5vbmUgYmxvY2sgbWQ6dGFibGUtcm93XCI+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwLTIgbWQ6Ym9yZGVyIG1kOmJvcmRlci1ncmF5LTMwMCB0ZXh0LWxlZnQgYmxvY2sgbWQ6dGFibGUtY2VsbFwiPntpdGVtLm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInAtMiBtZDpib3JkZXIgbWQ6Ym9yZGVyLWdyYXktMzAwIHRleHQtbGVmdCBibG9jayBtZDp0YWJsZS1jZWxsXCI+e2l0ZW0uY291bnR9PC90ZD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInAtMiBtZDpib3JkZXIgbWQ6Ym9yZGVyLWdyYXktMzAwIHRleHQtbGVmdCBibG9jayBtZDp0YWJsZS1jZWxsXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTEgcHgtMiBib3JkZXIgYm9yZGVyLWdyZWVuLTUwMCByb3VuZGVkXCIgb25DbGljaz17KCkgPT4gYWRkSXRlbShpdGVtLm5hbWUpfT5BZGQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgaG92ZXI6YmctcmVkLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0xIHB4LTIgYm9yZGVyIGJvcmRlci1yZWQtNTAwIHJvdW5kZWQgbWwtMlwiIG9uQ2xpY2s9eygpID0+IHJlbW92ZUl0ZW0oaXRlbS5uYW1lKX0+UmVtb3ZlPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgXG4gICAgPC9kaXY+XG4gICk7XG4gICAgXG5cbiAgXG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImZpcmVzdG9yZSIsImNvbGxlY3Rpb24iLCJkZWxldGVEb2MiLCJnZXREb2MiLCJnZXREb2NzIiwicXVlcnkiLCJzZXREb2MiLCJkb2MiLCJIb21lIiwiaW52ZW50b3J5Iiwic2V0SW52ZW50b3J5IiwiaXRlbU5hbWUiLCJzZXRJdGVtTmFtZSIsIm9wZW4iLCJzZXRPcGVuIiwidXBkYXRlSW52ZW50b3J5Iiwic25hcHNob3QiLCJkb2NzIiwiaW52ZW50b3J5TGlzdCIsImZvckVhY2giLCJwdXNoIiwibmFtZSIsImlkIiwiZGF0YSIsInJlbW92ZUl0ZW0iLCJpdGVtIiwiZG9jcmVmIiwiZG9jc25hcHNob3QiLCJleGlzdHMiLCJjb3VudCIsImFkZEl0ZW0iLCJkaXYiLCJwIiwiY2xhc3NOYW1lIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJ0Ym9keSIsIm1hcCIsInRkIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});