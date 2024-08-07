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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/firebase */ \"(app-pages-browser)/./firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [inventory, setInventory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [itemName, setItemName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [itemCount, setItemCount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const updateInventory = async ()=>{\n        const snapshot = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore, \"inventory\"));\n        const docs = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)(snapshot);\n        const inventoryList = [];\n        docs.forEach((doc)=>{\n            inventoryList.push({\n                name: doc.id,\n                ...doc.data()\n            });\n        });\n        setInventory(inventoryList);\n    };\n    const removeItem = async (item)=>{\n        const docref = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore, \"inventory\"), item) //the doc we are getting from db\n        ;\n        const docsnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(docref);\n        if (docsnapshot.exists()) {\n            const { count } = docsnapshot.data();\n            if (count == 1) {\n                await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.deleteDoc)(docref) //if count is 1 and we are deleting then delete the docref from db\n                ;\n            } else {\n                await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(docref, {\n                    count: count - 1\n                }) //set count -1\n                ;\n            }\n        }\n        updateInventory();\n    };\n    const addItem = async (item)=>{\n        const docref = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore, \"inventory\"), item) //the doc we are getting from db\n        ;\n        const docsnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(docref);\n        if (docsnapshot.exists()) {\n            const { count } = docsnapshot.data();\n            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(docref, {\n                count: count + 1\n            }) //if it exists add one\n            ;\n        } else {\n            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(docref, {\n                count: 1\n            }) //set quanity to 1 if doc doesnt exist\n            ;\n        }\n        updateInventory();\n    };\n    const addNewItem = async ()=>{\n        const docref = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore, \"inventory\"), itemName);\n        const docsnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(docref);\n        if (docsnapshot.exists()) {\n            const { count } = docsnapshot.data();\n            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(docref, {\n                count: count + itemCount\n            });\n        } else {\n            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(docref, {\n                count: itemCount\n            });\n        }\n        updateInventory(); //update inventory\n    };\n    const handleOpen = ()=>{\n        setOpen(true);\n    };\n    const handleClose = ()=>{\n        setOpen(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        updateInventory();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-4xl text-center font-semibold my-7\",\n                children: \"Inventory Management\"\n            }, void 0, false, {\n                fileName: \"/Users/kevin/Documents/Inventory-Tracker/app/page.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4 flex justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: itemName,\n                        onChange: (e)=>setItemName(e.target.value),\n                        className: \"bg-slate-50\",\n                        type: \"text\",\n                        placeholder: \"Item Name\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/Documents/Inventory-Tracker/app/page.js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: itemCount,\n                        onChange: (e)=>setItemCount(parseInt(e.target.value)),\n                        className: \"bg-slate-50\",\n                        type: \"number\",\n                        placeholder: \"Item Count\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/Documents/Inventory-Tracker/app/page.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: addNewItem,\n                        className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded\",\n                        children: \"Add to Inventory\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/Documents/Inventory-Tracker/app/page.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kevin/Documents/Inventory-Tracker/app/page.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"p-4 max-w-full mx-auto border-collapse block md:table center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        className: \"block md:table-header-group\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            className: \"border border-gray-300 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"bg-gray-600 p-2 text-white font-bold md:border md:border-gray-300 text-left block md:table-cell\",\n                                    children: \"Name\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kevin/Documents/Inventory-Tracker/app/page.js\",\n                                    lineNumber: 91,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"bg-gray-600 p-2 text-white font-bold md:border md:border-gray-300 text-left block md:table-cell\",\n                                    children: \"Count\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kevin/Documents/Inventory-Tracker/app/page.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"bg-gray-600 p-2 text-white font-bold md:border md:border-gray-300 text-left block md:table-cell\",\n                                    children: \"Actions\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kevin/Documents/Inventory-Tracker/app/page.js\",\n                                    lineNumber: 93,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kevin/Documents/Inventory-Tracker/app/page.js\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/Documents/Inventory-Tracker/app/page.js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        className: \"block md:table-row-group\",\n                        children: inventory.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                className: \"bg-gray-300 border border-gray-500 md:border-none block md:table-row\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"p-2 md:border md:border-gray-300 text-left block md:table-cell\",\n                                        children: item.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kevin/Documents/Inventory-Tracker/app/page.js\",\n                                        lineNumber: 99,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"p-2 md:border md:border-gray-300 text-left block md:table-cell\",\n                                        children: item.count\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kevin/Documents/Inventory-Tracker/app/page.js\",\n                                        lineNumber: 100,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"p-2 md:border md:border-gray-300 text-left block md:table-cell\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-500 rounded\",\n                                                onClick: ()=>addItem(item.name),\n                                                children: \"Add\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kevin/Documents/Inventory-Tracker/app/page.js\",\n                                                lineNumber: 102,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded ml-2\",\n                                                onClick: ()=>removeItem(item.name),\n                                                children: \"Remove\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kevin/Documents/Inventory-Tracker/app/page.js\",\n                                                lineNumber: 103,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kevin/Documents/Inventory-Tracker/app/page.js\",\n                                        lineNumber: 101,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, item.name, true, {\n                                fileName: \"/Users/kevin/Documents/Inventory-Tracker/app/page.js\",\n                                lineNumber: 98,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/kevin/Documents/Inventory-Tracker/app/page.js\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kevin/Documents/Inventory-Tracker/app/page.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kevin/Documents/Inventory-Tracker/app/page.js\",\n        lineNumber: 81,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"jVDcb9XXx0M0HrrOK6ffxa2E2p0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVdDLEtBQUtKLElBQUk7MERBQUc7Ozs7Ozs7Ozs7Ozs7K0JBTG5KSSxLQUFLSixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUI5QjtHQTNHd0JmO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGZpcmVzdG9yZSB9IGZyb20gXCJAL2ZpcmViYXNlXCI7XG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBkZWxldGVEb2MsIGdldERvYywgZ2V0RG9jcywgcXVlcnksIHNldERvYywgZG9jfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2ludmVudG9yeSxzZXRJbnZlbnRvcnldID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbaXRlbU5hbWUsIHNldEl0ZW1OYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2l0ZW1Db3VudCwgc2V0SXRlbUNvdW50XSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbb3BlbixzZXRPcGVuXT0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgdXBkYXRlSW52ZW50b3J5ID0gYXN5bmMgKCkgPT57XG4gICAgY29uc3Qgc25hcHNob3QgPSBxdWVyeShjb2xsZWN0aW9uKGZpcmVzdG9yZSwnaW52ZW50b3J5JykpXG4gICAgY29uc3QgZG9jcyA9IGF3YWl0IGdldERvY3Moc25hcHNob3QpXG4gICAgY29uc3QgaW52ZW50b3J5TGlzdD1bXVxuICAgIGRvY3MuZm9yRWFjaCgoZG9jKT0+e1xuICAgICAgaW52ZW50b3J5TGlzdC5wdXNoKHtcbiAgICAgICAgbmFtZTpkb2MuaWQsXG4gICAgICAgIC4uLmRvYy5kYXRhKCksXG4gICAgICB9KVxuICAgIH0pXG4gICAgc2V0SW52ZW50b3J5KGludmVudG9yeUxpc3QpO1xuICB9XG4gIGNvbnN0IHJlbW92ZUl0ZW0gPSBhc3luYyhpdGVtKT0+e1xuICAgIGNvbnN0IGRvY3JlZiA9IGRvYyhjb2xsZWN0aW9uKGZpcmVzdG9yZSwnaW52ZW50b3J5JyksaXRlbSkgLy90aGUgZG9jIHdlIGFyZSBnZXR0aW5nIGZyb20gZGJcbiAgICBjb25zdCBkb2NzbmFwc2hvdCA9IGF3YWl0IGdldERvYyhkb2NyZWYpXG4gICAgaWYoZG9jc25hcHNob3QuZXhpc3RzKCkpe1xuICAgICAgY29uc3Qge2NvdW50fSA9IGRvY3NuYXBzaG90LmRhdGEoKVxuICAgICAgaWYoY291bnQgPT0gMSl7XG4gICAgICAgIGF3YWl0IGRlbGV0ZURvYyhkb2NyZWYpLy9pZiBjb3VudCBpcyAxIGFuZCB3ZSBhcmUgZGVsZXRpbmcgdGhlbiBkZWxldGUgdGhlIGRvY3JlZiBmcm9tIGRiXG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICBhd2FpdCBzZXREb2MoZG9jcmVmLHtjb3VudDpjb3VudC0xfSkvL3NldCBjb3VudCAtMVxuICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGVJbnZlbnRvcnkoKTtcblxuICB9XG5cbiAgY29uc3QgYWRkSXRlbSA9IGFzeW5jKGl0ZW0pPT57XG4gICAgY29uc3QgZG9jcmVmID0gZG9jKGNvbGxlY3Rpb24oZmlyZXN0b3JlLCdpbnZlbnRvcnknKSxpdGVtKSAvL3RoZSBkb2Mgd2UgYXJlIGdldHRpbmcgZnJvbSBkYlxuICAgIGNvbnN0IGRvY3NuYXBzaG90ID0gYXdhaXQgZ2V0RG9jKGRvY3JlZilcbiAgICBpZihkb2NzbmFwc2hvdC5leGlzdHMoKSl7XG4gICAgICBjb25zdCB7Y291bnR9ID0gZG9jc25hcHNob3QuZGF0YSgpXG4gICAgICBcbiAgICAgIGF3YWl0IHNldERvYyhkb2NyZWYse2NvdW50OmNvdW50KzF9KS8vaWYgaXQgZXhpc3RzIGFkZCBvbmVcbiAgICAgIFxuICAgIH1cbiAgICBlbHNle1xuICAgICAgYXdhaXQgc2V0RG9jKGRvY3JlZix7Y291bnQ6MX0pLy9zZXQgcXVhbml0eSB0byAxIGlmIGRvYyBkb2VzbnQgZXhpc3RcbiAgICB9XG5cbiAgICB1cGRhdGVJbnZlbnRvcnkoKTtcbiAgfVxuICBjb25zdCBhZGROZXdJdGVtID0gYXN5bmMoKT0+e1xuICAgIGNvbnN0IGRvY3JlZiA9IGRvYyhjb2xsZWN0aW9uKGZpcmVzdG9yZSwgJ2ludmVudG9yeScpLCBpdGVtTmFtZSk7XG4gICAgY29uc3QgZG9jc25hcHNob3QgPSBhd2FpdCBnZXREb2MoZG9jcmVmKTtcbiAgICBpZiAoZG9jc25hcHNob3QuZXhpc3RzKCkpIHtcbiAgICAgIGNvbnN0IHsgY291bnQgfSA9IGRvY3NuYXBzaG90LmRhdGEoKTtcbiAgICAgIGF3YWl0IHNldERvYyhkb2NyZWYsIHsgY291bnQ6IGNvdW50ICsgaXRlbUNvdW50IH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBhd2FpdCBzZXREb2MoZG9jcmVmLCB7IGNvdW50OiBpdGVtQ291bnQgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlSW52ZW50b3J5KCk7Ly91cGRhdGUgaW52ZW50b3J5XG4gIH1cbiAgY29uc3QgaGFuZGxlT3BlbiA9ICgpPT57XG4gICAgc2V0T3Blbih0cnVlKVxuICB9XG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCk9PntcbiAgICBzZXRPcGVuKGZhbHNlKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgdXBkYXRlSW52ZW50b3J5KClcbiAgfSxbXVxuICApXG4gIHJldHVybiAoXG4gICAgPGRpdj4gXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTR4bCB0ZXh0LWNlbnRlciBmb250LXNlbWlib2xkIG15LTdcIj5JbnZlbnRvcnkgTWFuYWdlbWVudDwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCBmbGV4IGp1c3RpZnktY2VudGVyXCIgPlxuICAgICAgICA8aW5wdXQgdmFsdWU9e2l0ZW1OYW1lfSBvbkNoYW5nZT17KGUpID0+IHNldEl0ZW1OYW1lKGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPSdiZy1zbGF0ZS01MCcgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkl0ZW0gTmFtZVwiPjwvaW5wdXQ+XG4gICAgICAgIDxpbnB1dCB2YWx1ZT17aXRlbUNvdW50fSBvbkNoYW5nZT17KGUpID0+IHNldEl0ZW1Db3VudChwYXJzZUludChlLnRhcmdldC52YWx1ZSkpfSBjbGFzc05hbWU9J2JnLXNsYXRlLTUwJ3R5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIkl0ZW0gQ291bnRcIj48L2lucHV0PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZE5ld0l0ZW19IGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkXCI+QWRkIHRvIEludmVudG9yeTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwicC00IG1heC13LWZ1bGwgbXgtYXV0byBib3JkZXItY29sbGFwc2UgYmxvY2sgbWQ6dGFibGUgY2VudGVyXCI+XG4gICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJibG9jayBtZDp0YWJsZS1oZWFkZXItZ3JvdXBcIj5cbiAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBtZDpib3JkZXItbm9uZSBibG9jayBtZDp0YWJsZS1yb3cgYWJzb2x1dGUgLXRvcC1mdWxsIG1kOnRvcC1hdXRvIC1sZWZ0LWZ1bGwgbWQ6bGVmdC1hdXRvIG1kOnJlbGF0aXZlXCI+XG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiYmctZ3JheS02MDAgcC0yIHRleHQtd2hpdGUgZm9udC1ib2xkIG1kOmJvcmRlciBtZDpib3JkZXItZ3JheS0zMDAgdGV4dC1sZWZ0IGJsb2NrIG1kOnRhYmxlLWNlbGxcIj5OYW1lPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJiZy1ncmF5LTYwMCBwLTIgdGV4dC13aGl0ZSBmb250LWJvbGQgbWQ6Ym9yZGVyIG1kOmJvcmRlci1ncmF5LTMwMCB0ZXh0LWxlZnQgYmxvY2sgbWQ6dGFibGUtY2VsbFwiPkNvdW50PC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJiZy1ncmF5LTYwMCBwLTIgdGV4dC13aGl0ZSBmb250LWJvbGQgbWQ6Ym9yZGVyIG1kOmJvcmRlci1ncmF5LTMwMCB0ZXh0LWxlZnQgYmxvY2sgbWQ6dGFibGUtY2VsbFwiPkFjdGlvbnM8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJibG9jayBtZDp0YWJsZS1yb3ctZ3JvdXBcIj5cbiAgICAgICAgICB7aW52ZW50b3J5Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPHRyIGtleT17aXRlbS5uYW1lfSBjbGFzc05hbWU9XCJiZy1ncmF5LTMwMCBib3JkZXIgYm9yZGVyLWdyYXktNTAwIG1kOmJvcmRlci1ub25lIGJsb2NrIG1kOnRhYmxlLXJvd1wiPlxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicC0yIG1kOmJvcmRlciBtZDpib3JkZXItZ3JheS0zMDAgdGV4dC1sZWZ0IGJsb2NrIG1kOnRhYmxlLWNlbGxcIj57aXRlbS5uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwLTIgbWQ6Ym9yZGVyIG1kOmJvcmRlci1ncmF5LTMwMCB0ZXh0LWxlZnQgYmxvY2sgbWQ6dGFibGUtY2VsbFwiPntpdGVtLmNvdW50fTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwLTIgbWQ6Ym9yZGVyIG1kOmJvcmRlci1ncmF5LTMwMCB0ZXh0LWxlZnQgYmxvY2sgbWQ6dGFibGUtY2VsbFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0xIHB4LTIgYm9yZGVyIGJvcmRlci1ncmVlbi01MDAgcm91bmRlZFwiIG9uQ2xpY2s9eygpID0+IGFkZEl0ZW0oaXRlbS5uYW1lKX0+QWRkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1yZWQtNTAwIGhvdmVyOmJnLXJlZC03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMSBweC0yIGJvcmRlciBib3JkZXItcmVkLTUwMCByb3VuZGVkIG1sLTJcIiBvbkNsaWNrPXsoKSA9PiByZW1vdmVJdGVtKGl0ZW0ubmFtZSl9PlJlbW92ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIFxuICAgIDwvZGl2PlxuICApO1xuICAgIFxuXG4gIFxufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZGVsZXRlRG9jIiwiZ2V0RG9jIiwiZ2V0RG9jcyIsInF1ZXJ5Iiwic2V0RG9jIiwiZG9jIiwiSG9tZSIsImludmVudG9yeSIsInNldEludmVudG9yeSIsIml0ZW1OYW1lIiwic2V0SXRlbU5hbWUiLCJpdGVtQ291bnQiLCJzZXRJdGVtQ291bnQiLCJvcGVuIiwic2V0T3BlbiIsInVwZGF0ZUludmVudG9yeSIsInNuYXBzaG90IiwiZG9jcyIsImludmVudG9yeUxpc3QiLCJmb3JFYWNoIiwicHVzaCIsIm5hbWUiLCJpZCIsImRhdGEiLCJyZW1vdmVJdGVtIiwiaXRlbSIsImRvY3JlZiIsImRvY3NuYXBzaG90IiwiZXhpc3RzIiwiY291bnQiLCJhZGRJdGVtIiwiYWRkTmV3SXRlbSIsImhhbmRsZU9wZW4iLCJoYW5kbGVDbG9zZSIsImRpdiIsInAiLCJjbGFzc05hbWUiLCJpbnB1dCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwicGFyc2VJbnQiLCJidXR0b24iLCJvbkNsaWNrIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJ0Ym9keSIsIm1hcCIsInRkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});