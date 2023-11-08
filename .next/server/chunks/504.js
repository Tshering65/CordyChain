"use strict";
exports.id = 504;
exports.ids = [504];
exports.modules = {

/***/ 5504:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3590);
/* harmony import */ var _WalletBalance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7071);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_2__]);
react_toastify__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
//This is the page where we display a form
// We should enter the specific amount to move on to next step
// here we have implemented the xrp



// import Link from "next/link";
 // Import the WalletBalance component
const xrpl = __webpack_require__(2809);
const SecretKeyForm = ({ onKeySubmit  })=>{
    const [secretKey, setSecretKey] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [xrpAmount, setXrpAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("5"); // Declare xrpAmount state
    // const [isSubmitted, setIsSubmitted] = useState(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (secretKey === "sEdVeWhoL2qRuAcc3VvXJ5UBfYMipGZ") {
            // Check if the entered XRP amount is exactly 5
            if (xrpAmount === "5") {
                // Compare with a string, not a number
                // setIsSubmitted(true);
                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.info("Processing...", {
                    position: "top-center",
                    autoClose: 10000
                });
                const client = new xrpl.Client("wss://s.altnet.rippletest.net:51233");
                await client.connect();
                const wallet = xrpl.Wallet.fromSeed("sEdVeWhoL2qRuAcc3VvXJ5UBfYMipGZ");
                const prepared = await client.autofill({
                    TransactionType: "Payment",
                    Account: wallet.address,
                    Amount: xrpl.xrpToDrops(xrpAmount),
                    Destination: "rwD7VQG3qQVyQeiPcC1JHyu4wCPzB4oVev"
                });
                const signed = wallet.sign(prepared);
                const tx = await client.submitAndWait(signed.tx_blob);
                console.log(tx);
                onKeySubmit();
                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success("Secret key and XRP amount are correct. You can now submit your crop details.", {
                    position: "top-center",
                    autoClose: 5000
                });
            } else {
                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.warning("You must enter exactly 5 XRP to proceed.", {
                    position: "top-center",
                    autoClose: 5000
                });
            }
        } else {
            // setIsSubmitted(false);
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error("Incorrect secret key. Please provide a valid key", {
                position: "top-center",
                autoClose: 5000
            });
        }
    };
    const formStyle = {
        width: "40%",
        height: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid #ccc",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        padding: "20px",
        borderRadius: "10px",
        margin: "20px auto"
    };
    const inputStyle = {
        padding: "12px",
        margin: "10px",
        width: "300px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        fontSize: "16px"
    };
    const buttonStyle = {
        background: "#007bff",
        color: "white",
        padding: "12px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "18px",
        margin: "30px"
    };
    const errorStyle = {
        textAlign: "center",
        color: "red",
        fontSize: "16px"
    };
    // ... (other code)
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WalletBalance__WEBPACK_IMPORTED_MODULE_3__["default"], {
                secretKey: secretKey
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        style: {
                            textAlign: "center",
                            marginTop: "20px",
                            marginBottom: "20px",
                            color: "blue",
                            textShadow: "2px 2px 4px rgba(255, 165, 0, 0.8)",
                            fontSize: "20px"
                        },
                        children: "Pay an amount of 5 XRP to proceed with the registration of the Product!"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        onSubmit: handleSubmit,
                        style: formStyle,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "password",
                                value: secretKey,
                                onChange: (e)=>setSecretKey(e.target.value),
                                placeholder: "Enter your secret key",
                                style: inputStyle
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "number",
                                value: xrpAmount,
                                onChange: (e)=>setXrpAmount(e.target.value),
                                placeholder: "XRP amount",
                                style: inputStyle,
                                readOnly: true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "submit",
                                style: buttonStyle,
                                children: "Submit"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SecretKeyForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;