"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/saveData";
exports.ids = ["pages/api/saveData"];
exports.modules = {

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/database":
/*!************************************!*\
  !*** external "firebase/database" ***!
  \************************************/
/***/ ((module) => {

module.exports = import("firebase/database");;

/***/ }),

/***/ "(api)/./pages/api/saveData.js":
/*!*******************************!*\
  !*** ./pages/api/saveData.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _services_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/firebase */ \"(api)/./pages/services/firebase.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_firebase__WEBPACK_IMPORTED_MODULE_0__]);\n_services_firebase__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nfunction saveData(req, res) {\n    const date = new Date();\n    let data = {\n        ...req.body\n    };\n    console.log(data);\n    res.setHeader(\"Cache-Control\", \"s-maxage=10, stale-while-revalidate\");\n    //   writeData(data.code,date, data.data);\n    res.json({\n        horario: date\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (saveData);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2F2ZURhdGEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBeUQ7QUFFekQsU0FBU0UsU0FBU0MsR0FBRyxFQUFFQyxHQUFHO0lBQ3hCLE1BQU1DLE9BQU8sSUFBSUM7SUFDakIsSUFBSUMsT0FBTztRQUFFLEdBQUdKLElBQUlLLElBQUk7SUFBQztJQUN6QkMsUUFBUUMsSUFBSUg7SUFFWkgsSUFBSU8sVUFBVSxpQkFBaUI7SUFFakMsMENBQTBDO0lBRXhDUCxJQUFJUSxLQUFLO1FBQ1BDLFNBQVNSO0lBQ1g7QUFDRjtBQUNBLGlFQUFlSCxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYTJkYXRhbmV4dGpzYXBpLy4vcGFnZXMvYXBpL3NhdmVEYXRhLmpzP2RhZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd3JpdGVEYXRhLCBnZXREYXRhIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2ZpcmViYXNlXCJcclxuXHJcbmZ1bmN0aW9uIHNhdmVEYXRhKHJlcSwgcmVzKSB7XHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgbGV0IGRhdGEgPSB7IC4uLnJlcS5ib2R5IH07XHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gIHJlcy5zZXRIZWFkZXIoXCJDYWNoZS1Db250cm9sXCIsIFwicy1tYXhhZ2U9MTAsIHN0YWxlLXdoaWxlLXJldmFsaWRhdGVcIik7XHJcblxyXG4vLyAgIHdyaXRlRGF0YShkYXRhLmNvZGUsZGF0ZSwgZGF0YS5kYXRhKTtcclxuXHJcbiAgcmVzLmpzb24oe1xyXG4gICAgaG9yYXJpbzogZGF0ZSxcclxuICB9KTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBzYXZlRGF0YTtcclxuIl0sIm5hbWVzIjpbIndyaXRlRGF0YSIsImdldERhdGEiLCJzYXZlRGF0YSIsInJlcSIsInJlcyIsImRhdGUiLCJEYXRlIiwiZGF0YSIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwic2V0SGVhZGVyIiwianNvbiIsImhvcmFyaW8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/saveData.js\n");

/***/ }),

/***/ "(api)/./pages/services/firebase.js":
/*!************************************!*\
  !*** ./pages/services/firebase.js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getData: () => (/* binding */ getData),\n/* harmony export */   writeData: () => (/* binding */ writeData)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/database */ \"firebase/database\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_database__WEBPACK_IMPORTED_MODULE_1__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_database__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyAkV7_nu0LT2Ya8GQzsSYP5mITLGKEuCTo\",\n    authDomain: \"a2dataapi.firebaseapp.com\",\n    projectId: \"a2dataapi\",\n    storageBucket: \"a2dataapi.appspot.com\",\n    messagingSenderId: \"17389564071\",\n    appId: \"1:17389564071:web:f227c75e8bbfe1be5beb82\",\n    measurementId: \"G-YRM4GW93B5\"\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst database = (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.getDatabase)(app);\nfunction writeData(code, time, data) {\n    (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.set)((0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.ref)(database, `devices/${code}/${time}`), data);\n}\nasync function getData(code) {\n    const snapshot = await (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.get)((0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.child)((0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.ref)(database), `devices/${code}`));\n    if (snapshot.exists()) {\n        let data = snapshot.val();\n        return data;\n    } else {\n        console.log(\"No data available\");\n        return null;\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9zZXJ2aWNlcy9maXJlYmFzZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTZDO0FBQ2lDO0FBRTlFLE1BQU1PLGlCQUFpQjtJQUNuQkMsUUFBUTtJQUNSQyxZQUFZO0lBQ1pDLFdBQVc7SUFDWEMsZUFBZTtJQUNmQyxtQkFBbUI7SUFDbkJDLE9BQU87SUFDUEMsZUFBZTtBQUNqQjtBQUNGLE1BQU1DLE1BQU1mLDJEQUFhQSxDQUFDTztBQUMxQixNQUFNUyxXQUFXZiw4REFBV0EsQ0FBQ2M7QUFFdEIsU0FBU0UsVUFBVUMsSUFBSSxFQUFDQyxJQUFJLEVBQUNDLElBQUk7SUFDdENqQixzREFBR0EsQ0FBQ0Qsc0RBQUdBLENBQUNjLFVBQVUsQ0FBQyxRQUFRLEVBQUVFLEtBQUssQ0FBQyxFQUFFQyxLQUFLLENBQUMsR0FBR0M7QUFDaEQ7QUFDTyxlQUFlQyxRQUFRSCxJQUFJO0lBQ2hDLE1BQU1JLFdBQVcsTUFBTWpCLHNEQUFHQSxDQUFDQyx3REFBS0EsQ0FBQ0osc0RBQUdBLENBQUNjLFdBQVcsQ0FBQyxRQUFRLEVBQUVFLEtBQUssQ0FBQztJQUNqRSxJQUFJSSxTQUFTQyxVQUFVO1FBQ3JCLElBQUlILE9BQU9FLFNBQVNFO1FBQ3BCLE9BQU9KO0lBQ1QsT0FBTztRQUNMSyxRQUFRQyxJQUFJO1FBQ1osT0FBTztJQUNUO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hMmRhdGFuZXh0anNhcGkvLi9wYWdlcy9zZXJ2aWNlcy9maXJlYmFzZS5qcz9lNjQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7IGdldERhdGFiYXNlLCByZWYsIHNldCwgcmVtb3ZlLCBnZXQsIGNoaWxkIH0gZnJvbSBcImZpcmViYXNlL2RhdGFiYXNlXCI7XHJcblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICAgIGFwaUtleTogXCJBSXphU3lBa1Y3X251MExUMllhOEdRenNTWVA1bUlUTEdLRXVDVG9cIixcclxuICAgIGF1dGhEb21haW46IFwiYTJkYXRhYXBpLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgcHJvamVjdElkOiBcImEyZGF0YWFwaVwiLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJhMmRhdGFhcGkuYXBwc3BvdC5jb21cIixcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjE3Mzg5NTY0MDcxXCIsXHJcbiAgICBhcHBJZDogXCIxOjE3Mzg5NTY0MDcxOndlYjpmMjI3Yzc1ZThiYmZlMWJlNWJlYjgyXCIsXHJcbiAgICBtZWFzdXJlbWVudElkOiBcIkctWVJNNEdXOTNCNVwiXHJcbiAgfTtcclxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbmNvbnN0IGRhdGFiYXNlID0gZ2V0RGF0YWJhc2UoYXBwKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3cml0ZURhdGEoY29kZSx0aW1lLGRhdGEpIHtcclxuICBzZXQocmVmKGRhdGFiYXNlLCBgZGV2aWNlcy8ke2NvZGV9LyR7dGltZX1gKSwgZGF0YSk7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoY29kZSkge1xyXG4gIGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgZ2V0KGNoaWxkKHJlZihkYXRhYmFzZSksIGBkZXZpY2VzLyR7Y29kZX1gKSk7XHJcbiAgaWYgKHNuYXBzaG90LmV4aXN0cygpKSB7XHJcbiAgICBsZXQgZGF0YSA9IHNuYXBzaG90LnZhbCgpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUubG9nKFwiTm8gZGF0YSBhdmFpbGFibGVcIik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImluaXRpYWxpemVBcHAiLCJnZXREYXRhYmFzZSIsInJlZiIsInNldCIsInJlbW92ZSIsImdldCIsImNoaWxkIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiYXBwIiwiZGF0YWJhc2UiLCJ3cml0ZURhdGEiLCJjb2RlIiwidGltZSIsImRhdGEiLCJnZXREYXRhIiwic25hcHNob3QiLCJleGlzdHMiLCJ2YWwiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/services/firebase.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/saveData.js"));
module.exports = __webpack_exports__;

})();