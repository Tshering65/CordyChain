"use strict";
(() => {
var exports = {};
exports.id = 829;
exports.ids = [829];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 4627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const connectMongoDB = async ()=>{
    try {
        const uri = "mongodb+srv://12210038gcit:6GPeMfTkhWpM1vQE@cluster0.gxjruxs.mongodb.net/?retryWrites=true&w=majority";
        console.log("Connecting to MongoDB:", uri);
        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(()=>console.log("Connected to MongoDB"));
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectMongoDB);


/***/ }),

/***/ 4920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ apiHandler)
});

// EXTERNAL MODULE: ./libs/mongodb.js
var mongodb = __webpack_require__(4627);
// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./models/info.js

const infoSchema = new (external_mongoose_default()).Schema({
    username: String,
    prodid: Number,
    cid: Number,
    pnumber: Number,
    address: String
}, {
    timestamps: true
});
const Information = (external_mongoose_default()).models.Information || external_mongoose_default().model("Information", infoSchema);
/* harmony default export */ const info = (Information);

;// CONCATENATED MODULE: ./pages/api/users.js


async function apiHandler(req, res) {
    const { method  } = req;
    if (method === "POST") {
        await handlePOST(req, res);
    } else if (method === "GET") {
        await handleGET(req, res); // Pass `req` as the first argument
    } else if (method === "DELETE") {
        await handleDELETE(req, res); // Pass `req` and `res`
    } else if (method === "PUT") {
        await handlePUT(req, res); // Pass `req` and `res`
    }
}
async function handlePOST(req, res) {
    const { username , prodid , cid , pnumber , address  } = req.body;
    await (0,mongodb/* default */.Z)();
    try {
        const newInfo = await info.create({
            username,
            prodid,
            cid,
            pnumber,
            address
        });
        res.status(201).json({
            message: "Information created",
            data: newInfo
        });
    } catch (error) {
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
}
async function handleGET(req, res) {
    // Add `req` and `res` as parameters
    try {
        await (0,mongodb/* default */.Z)();
        const informations = await info.find();
        res.status(200).json({
            informations
        });
    } catch (error) {
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
}
async function handleDELETE(req, res) {
    // Add `req` and `res` as parameters
    const { id  } = req.query;
    await (0,mongodb/* default */.Z)();
    try {
        const deletedInfo = await info.findByIdAndDelete(id);
        if (!deletedInfo) {
            return res.status(404).json({
                message: "Information not found"
            });
        }
        res.status(201).json({
            message: "Information deleted"
        });
    } catch (error) {
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
}
async function handlePUT(req, res) {
    // Add `req` and `res` as parameters
    const { id  } = req.query;
    const { username , prodid , cid , pnumber , address  } = req.body;
    try {
        await (0,mongodb/* default */.Z)();
        const updateData = {
            username,
            prodid,
            cid,
            pnumber,
            address
        };
        const updatedInformation = await info.findByIdAndUpdate(id, updateData, {
            new: true
        });
        if (!updatedInformation) {
            return res.status(404).json({
                message: "Information not found"
            });
        }
        res.status(200).json({
            message: "Information updated",
            data: updatedInformation
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
var __webpack_exports__ = (__webpack_exec__(4920));
module.exports = __webpack_exports__;

})();