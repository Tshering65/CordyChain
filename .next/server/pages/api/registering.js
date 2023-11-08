"use strict";
(() => {
var exports = {};
exports.id = 659;
exports.ids = [659];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 4683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ apiHandler)
/* harmony export */ });
/* harmony import */ var _libs_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4627);
/* harmony import */ var _models_register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3149);
// import { register } from "module";


async function apiHandler(req, res) {
    const { method  } = req;
    if (method === "POST") {
        await handlePOST(req, res);
    } else if (method === "GET") {
        await handleGET(req, res);
    } else if (method === "DELETE") {
        await handleDELETE(req, res);
    }
}
async function handlePOST(req, res) {
    const { username , email , walletaddress , password , confirmpassword  } = req.body;
    await (0,_libs_mongodb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    try {
        // Registration code
        await _models_register__WEBPACK_IMPORTED_MODULE_1__/* ["default"].create */ .Z.create({
            username,
            email,
            walletaddress,
            password,
            confirmpassword
        });
        res.status(200).json({
            message: "Registration successful"
        });
    } catch (error) {
        console.error(error); // Log the error to the console for debugging
        res.status(500).json({
            error: "Registration failed",
            details: error.message
        });
    }
}
async function handleGET(req, res) {
    try {
        await (0,_libs_mongodb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
        const registerings = await _models_register__WEBPACK_IMPORTED_MODULE_1__/* ["default"].find */ .Z.find();
        res.status(200).json({
            registerings
        });
    } catch (error) {
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
}
async function handleDELETE(req, res) {
    const { id  } = req.query;
    await (0,_libs_mongodb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    try {
        await _models_register__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findByIdAndDelete */ .Z.findByIdAndDelete(id);
        res.status(201).json({
            message: "Registered details deleted"
        });
    } catch (error) {
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [112], () => (__webpack_exec__(4683)));
module.exports = __webpack_exports__;

})();