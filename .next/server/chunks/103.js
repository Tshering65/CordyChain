"use strict";
exports.id = 103;
exports.ids = [103];
exports.modules = {

/***/ 7071:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const xrpl = __webpack_require__(2809);
const WalletBalance = ({ secretKey  })=>{
    const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchWalletData = async ()=>{
            try {
                const client = new xrpl.Client("wss://s.altnet.rippletest.net:51233");
                await client.connect();
                const wallet = xrpl.Wallet.fromSeed("sEdVeWhoL2qRuAcc3VvXJ5UBfYMipGZ");
                setAddress(wallet.address);
                const account_data = await client.request({
                    command: "account_info",
                    account: wallet.address,
                    ledger_index: "validated"
                });
                setBalance(xrpl.dropsToXrp(account_data.result.account_data.Balance));
            } catch (err) {
                console.log(err);
            }
        };
        fetchWalletData();
    }, [
        secretKey
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            style: {
                textAlign: "center",
                marginTop: "20px",
                marginBottom: "20px",
                color: "black",
                textShadow: "2px 2px 4px rgba(255, 165, 0, 0.8)",
                fontSize: "20px"
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                    children: [
                        "Wallet Address: ",
                        address
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                    children: [
                        "XRP Balance: ",
                        balance,
                        " XRP"
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WalletBalance);


/***/ })

};
;