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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/firebase */ \"(app-pages-browser)/./firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [inventory, setInventory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [itemName, setItemName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const updateInventory = async ()=>{\n        const snapshot = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore, \"inventory\"));\n        const docs = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)(snapshot);\n        const inventoryList = [];\n        docs.forEach((doc1)=>{\n            inventoryList.push({\n                name: doc1.id,\n                ...doc1.data()\n            });\n        });\n        setInventory(inventoryList);\n    };\n    const removeItem = async (item)=>{\n        const docref = doc((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore, \"inventory\"), item) //the doc we are getting from db\n        ;\n        const docsnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(docref);\n        if (docsnapshot.exists()) {\n            const { count } = docsnapshot.data();\n            if (count == 1) {\n                await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.deleteDoc)(docref) //if count is 1 and we are deleting then delete the docref from db\n                ;\n            } else {\n                await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(docref, {\n                    count: count - 1\n                }) //set count -1\n                ;\n            }\n        }\n    };\n    const addItem = async (item)=>{\n        const docref = doc((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore, \"inventory\"), item) //the doc we are getting from db\n        ;\n        const docsnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(docref);\n        if (docsnapshot.exists()) {\n            const { count } = docsnapshot.data();\n            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(docref, {\n                count: count - 1\n            }) //if it exists add one\n            ;\n        } else {\n            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(docref, {\n                count: 1\n            }) //set quanity to 1 if doc doesnt exist\n            ;\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        updateInventory();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-4xl text-center font-semibold my-7\",\n                children: \"Inventory Management\"\n            }, void 0, false, {\n                fileName: \"/Users/kevin/Documents/Inventory-Tracker/app/page.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            inventory.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: item.name\n                        }, void 0, false, {\n                            fileName: \"/Users/kevin/Documents/Inventory-Tracker/app/page.js\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: item.count\n                        }, void 0, false, {\n                            fileName: \"/Users/kevin/Documents/Inventory-Tracker/app/page.js\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, item.name, true, {\n                    fileName: \"/Users/kevin/Documents/Inventory-Tracker/app/page.js\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kevin/Documents/Inventory-Tracker/app/page.js\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"XEU0pFG1ZOq5zh9Gh76fHMKQatw=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUMrQjtBQUNTO0FBQ0Q7QUFDb0Q7QUFHNUUsU0FBU1U7O0lBQ3RCLE1BQU0sQ0FBQ0MsV0FBVUMsYUFBYSxHQUFHWCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzVDLE1BQU0sQ0FBQ1ksVUFBVUMsWUFBWSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNjLE1BQUtDLFFBQVEsR0FBRWYsK0NBQVFBLENBQUM7SUFFL0IsTUFBTWdCLGtCQUFrQjtRQUN0QixNQUFNQyxXQUFXVix5REFBS0EsQ0FBQ0osOERBQVVBLENBQUNELGdEQUFTQSxFQUFDO1FBQzVDLE1BQU1nQixPQUFPLE1BQU1aLDJEQUFPQSxDQUFDVztRQUMzQixNQUFNRSxnQkFBYyxFQUFFO1FBQ3RCRCxLQUFLRSxPQUFPLENBQUMsQ0FBQ0M7WUFDWkYsY0FBY0csSUFBSSxDQUFDO2dCQUNqQkMsTUFBS0YsS0FBSUcsRUFBRTtnQkFDWCxHQUFHSCxLQUFJSSxJQUFJLEVBQUU7WUFDZjtRQUNGO1FBQ0FkLGFBQWFRO0lBQ2Y7SUFDQSxNQUFNTyxhQUFhLE9BQU1DO1FBQ3ZCLE1BQU1DLFNBQVNQLElBQUlsQiw4REFBVUEsQ0FBQ0QsZ0RBQVNBLEVBQUMsY0FBYXlCLE1BQU0sZ0NBQWdDOztRQUMzRixNQUFNRSxjQUFjLE1BQU14QiwwREFBTUEsQ0FBQ3VCO1FBQ2pDLElBQUdDLFlBQVlDLE1BQU0sSUFBRztZQUN0QixNQUFNLEVBQUNDLEtBQUssRUFBQyxHQUFHRixZQUFZSixJQUFJO1lBQ2hDLElBQUdNLFNBQVMsR0FBRTtnQkFDWixNQUFNM0IsNkRBQVNBLENBQUN3QixRQUFPLGtFQUFrRTs7WUFDM0YsT0FDSTtnQkFDRixNQUFNcEIsMERBQU1BLENBQUNvQixRQUFPO29CQUFDRyxPQUFNQSxRQUFNO2dCQUFDLEdBQUUsY0FBYzs7WUFDcEQ7UUFDRjtJQUdGO0lBQ0EsTUFBTUMsVUFBVSxPQUFNTDtRQUNwQixNQUFNQyxTQUFTUCxJQUFJbEIsOERBQVVBLENBQUNELGdEQUFTQSxFQUFDLGNBQWF5QixNQUFNLGdDQUFnQzs7UUFDM0YsTUFBTUUsY0FBYyxNQUFNeEIsMERBQU1BLENBQUN1QjtRQUNqQyxJQUFHQyxZQUFZQyxNQUFNLElBQUc7WUFDdEIsTUFBTSxFQUFDQyxLQUFLLEVBQUMsR0FBR0YsWUFBWUosSUFBSTtZQUVoQyxNQUFNakIsMERBQU1BLENBQUNvQixRQUFPO2dCQUFDRyxPQUFNQSxRQUFNO1lBQUMsR0FBRSxzQkFBc0I7O1FBRTVELE9BQ0k7WUFDRixNQUFNdkIsMERBQU1BLENBQUNvQixRQUFPO2dCQUFDRyxPQUFNO1lBQUMsR0FBRSxzQ0FBc0M7O1FBQ3RFO0lBR0Y7SUFDQTlCLGdEQUFTQSxDQUFDO1FBQ1JlO0lBQ0YsR0FBRSxFQUFFO0lBRUoscUJBQ0UsOERBQUNpQjs7MEJBQ0MsOERBQUNDO2dCQUFFQyxXQUFVOzBCQUEwQzs7Ozs7O1lBQ3REekIsVUFBVTBCLEdBQUcsQ0FBQyxDQUFDVCxxQkFDZCw4REFBQ007O3NDQUNDLDhEQUFDQztzQ0FBR1AsS0FBS0osSUFBSTs7Ozs7O3NDQUNiLDhEQUFDVztzQ0FBR1AsS0FBS0ksS0FBSzs7Ozs7OzttQkFGTkosS0FBS0osSUFBSTs7Ozs7Ozs7Ozs7QUFVM0I7R0FqRXdCZDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qcz9iZTY3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQge3VzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBmaXJlc3RvcmUgfSBmcm9tIFwiQC9maXJlYmFzZVwiO1xuaW1wb3J0IHsgY29sbGVjdGlvbiwgZGVsZXRlRG9jLCBnZXREb2MsIGdldERvY3MsIHF1ZXJ5LCBzZXREb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2ludmVudG9yeSxzZXRJbnZlbnRvcnldID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbaXRlbU5hbWUsIHNldEl0ZW1OYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW29wZW4sc2V0T3Blbl09IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHVwZGF0ZUludmVudG9yeSA9IGFzeW5jICgpID0+e1xuICAgIGNvbnN0IHNuYXBzaG90ID0gcXVlcnkoY29sbGVjdGlvbihmaXJlc3RvcmUsJ2ludmVudG9yeScpKVxuICAgIGNvbnN0IGRvY3MgPSBhd2FpdCBnZXREb2NzKHNuYXBzaG90KVxuICAgIGNvbnN0IGludmVudG9yeUxpc3Q9W11cbiAgICBkb2NzLmZvckVhY2goKGRvYyk9PntcbiAgICAgIGludmVudG9yeUxpc3QucHVzaCh7XG4gICAgICAgIG5hbWU6ZG9jLmlkLFxuICAgICAgICAuLi5kb2MuZGF0YSgpLFxuICAgICAgfSlcbiAgICB9KVxuICAgIHNldEludmVudG9yeShpbnZlbnRvcnlMaXN0KTtcbiAgfVxuICBjb25zdCByZW1vdmVJdGVtID0gYXN5bmMoaXRlbSk9PntcbiAgICBjb25zdCBkb2NyZWYgPSBkb2MoY29sbGVjdGlvbihmaXJlc3RvcmUsJ2ludmVudG9yeScpLGl0ZW0pIC8vdGhlIGRvYyB3ZSBhcmUgZ2V0dGluZyBmcm9tIGRiXG4gICAgY29uc3QgZG9jc25hcHNob3QgPSBhd2FpdCBnZXREb2MoZG9jcmVmKVxuICAgIGlmKGRvY3NuYXBzaG90LmV4aXN0cygpKXtcbiAgICAgIGNvbnN0IHtjb3VudH0gPSBkb2NzbmFwc2hvdC5kYXRhKClcbiAgICAgIGlmKGNvdW50ID09IDEpe1xuICAgICAgICBhd2FpdCBkZWxldGVEb2MoZG9jcmVmKS8vaWYgY291bnQgaXMgMSBhbmQgd2UgYXJlIGRlbGV0aW5nIHRoZW4gZGVsZXRlIHRoZSBkb2NyZWYgZnJvbSBkYlxuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgYXdhaXQgc2V0RG9jKGRvY3JlZix7Y291bnQ6Y291bnQtMX0pLy9zZXQgY291bnQgLTFcbiAgICAgIH1cbiAgICB9XG5cblxuICB9XG4gIGNvbnN0IGFkZEl0ZW0gPSBhc3luYyhpdGVtKT0+e1xuICAgIGNvbnN0IGRvY3JlZiA9IGRvYyhjb2xsZWN0aW9uKGZpcmVzdG9yZSwnaW52ZW50b3J5JyksaXRlbSkgLy90aGUgZG9jIHdlIGFyZSBnZXR0aW5nIGZyb20gZGJcbiAgICBjb25zdCBkb2NzbmFwc2hvdCA9IGF3YWl0IGdldERvYyhkb2NyZWYpXG4gICAgaWYoZG9jc25hcHNob3QuZXhpc3RzKCkpe1xuICAgICAgY29uc3Qge2NvdW50fSA9IGRvY3NuYXBzaG90LmRhdGEoKVxuICAgICAgXG4gICAgICBhd2FpdCBzZXREb2MoZG9jcmVmLHtjb3VudDpjb3VudC0xfSkvL2lmIGl0IGV4aXN0cyBhZGQgb25lXG4gICAgICBcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIGF3YWl0IHNldERvYyhkb2NyZWYse2NvdW50OjF9KS8vc2V0IHF1YW5pdHkgdG8gMSBpZiBkb2MgZG9lc250IGV4aXN0XG4gICAgfVxuXG5cbiAgfVxuICB1c2VFZmZlY3QoKCk9PntcbiAgICB1cGRhdGVJbnZlbnRvcnkoKVxuICB9LFtdXG4gIClcbiAgcmV0dXJuIChcbiAgICA8ZGl2PiBcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtNHhsIHRleHQtY2VudGVyIGZvbnQtc2VtaWJvbGQgbXktN1wiPkludmVudG9yeSBNYW5hZ2VtZW50PC9wPlxuICAgICAge2ludmVudG9yeS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2l0ZW0ubmFtZX0+XG4gICAgICAgICAgPHA+e2l0ZW0ubmFtZX08L3A+XG4gICAgICAgICAgPHA+e2l0ZW0uY291bnR9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xuICAgIFxuXG4gIFxufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZGVsZXRlRG9jIiwiZ2V0RG9jIiwiZ2V0RG9jcyIsInF1ZXJ5Iiwic2V0RG9jIiwiSG9tZSIsImludmVudG9yeSIsInNldEludmVudG9yeSIsIml0ZW1OYW1lIiwic2V0SXRlbU5hbWUiLCJvcGVuIiwic2V0T3BlbiIsInVwZGF0ZUludmVudG9yeSIsInNuYXBzaG90IiwiZG9jcyIsImludmVudG9yeUxpc3QiLCJmb3JFYWNoIiwiZG9jIiwicHVzaCIsIm5hbWUiLCJpZCIsImRhdGEiLCJyZW1vdmVJdGVtIiwiaXRlbSIsImRvY3JlZiIsImRvY3NuYXBzaG90IiwiZXhpc3RzIiwiY291bnQiLCJhZGRJdGVtIiwiZGl2IiwicCIsImNsYXNzTmFtZSIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});