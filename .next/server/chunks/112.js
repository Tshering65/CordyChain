"use strict";
exports.id = 112;
exports.ids = [112];
exports.modules = {

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

/***/ 3149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const registerSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    username: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (v)=>{
            // You can use a regular expression or a library like validator.js to validate email format
            // Return true if valid, false if not
            },
            message: "Invalid email format"
        }
    },
    walletaddress: {
        type: String
    },
    password: {
        type: String
    },
    confirmpassword: {
        type: String
    }
}, {
    timestamps: true
});
const registerInfo = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.RegisterInfo) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("RegisterInfo", registerSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (registerInfo);


/***/ })

};
;