"use strict";
(() => {
var exports = {};
exports.id = 21;
exports.ids = [21];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 7376:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "jsonwebtoken"
const external_jsonwebtoken_namespaceObject = require("jsonwebtoken");
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_namespaceObject);
// EXTERNAL MODULE: ./libs/mongodb.js
var mongodb = __webpack_require__(4627);
// EXTERNAL MODULE: ./models/register.js
var register = __webpack_require__(3149);
;// CONCATENATED MODULE: ./pages/api/logging.js
// pages/api/login.js



// import bcrypt from "bcryptjs";
async function handler(req, res) {
    if (req.method === "POST") {
        const { email , password  } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                error: "Email and password are required."
            });
        }
        try {
            await (0,mongodb/* default */.Z)();
            const user = await register/* default.findOne */.Z.findOne({
                email
            });
            if (!user) {
                return res.status(401).json({
                    error: "User not found."
                });
            }
            const userEmail = email.toLowerCase();
            const storedEmail = user.email.toLowerCase();
            if (userEmail !== storedEmail) {
                return res.status(401).json({
                    error: "Invalid credentials"
                });
            }
            // const passwordMatch = await bcrypt.compare(password, user.password);
            console.log(password, user.password);
            if (password === user.password) {
                const token = external_jsonwebtoken_default().sign({
                    userId: user._id,
                    email: user.email
                }, process.env.JWT_SECRET, {
                    expiresIn: "1h"
                });
                res.status(200).json({
                    token
                });
            } else {
                return res.status(401).json({
                    error: "Invalid password"
                });
            }
        } catch (error) {
            console.error("Login error:", error);
            res.status(500).json({
                error: "Internal Server Error"
            });
        }
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [112], () => (__webpack_exec__(7376)));
module.exports = __webpack_exports__;

})();