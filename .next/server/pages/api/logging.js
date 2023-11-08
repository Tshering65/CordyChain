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
exports.id = "pages/api/logging";
exports.ids = ["pages/api/logging"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./libs/mongodb.js":
/*!*************************!*\
  !*** ./libs/mongodb.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectMongoDB = async ()=>{\n    try {\n        const uri = \"mongodb+srv://12210038gcit:6GPeMfTkhWpM1vQE@cluster0.gxjruxs.mongodb.net/?retryWrites=true&w=majority\";\n        console.log(\"Connecting to MongoDB:\", uri);\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(uri, {\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        }).then(()=>console.log(\"Connected to MongoDB\"));\n    } catch (error) {\n        console.error(\"MongoDB connection error:\", error);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectMongoDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWJzL21vbmdvZGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGlCQUFpQixVQUFZO0lBQy9CLElBQUk7UUFDQSxNQUFNQyxNQUFNQyx1R0FBdUI7UUFDbkNHLFFBQVFDLEdBQUcsQ0FBQywwQkFBMEJMO1FBQ3RDLE1BQU1GLHVEQUFnQixDQUFDRSxLQUFLO1lBQ3hCTyxpQkFBaUIsSUFBSTtZQUNyQkMsb0JBQW9CLElBQUk7UUFDNUIsR0FBR0MsSUFBSSxDQUFFLElBQU1MLFFBQVFDLEdBQUcsQ0FBQztJQUcvQixFQUFFLE9BQU9LLE9BQU87UUFDWk4sUUFBUU0sS0FBSyxDQUFDLDZCQUE2QkE7SUFDL0M7QUFDSjtBQUVBLGlFQUFlWCxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaHRtbC1uZXh0LXRlbXBsYXRpbmcvLi9saWJzL21vbmdvZGIuanM/NTkzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IGNvbm5lY3RNb25nb0RCID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RpbmcgdG8gTW9uZ29EQjpcIiwgdXJpKTtcbiAgICAgICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdCh1cmksIHtcbiAgICAgICAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgICAgICAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgICAgICAgfSkudGhlbiAoKCkgPT4gY29uc29sZS5sb2coXCJDb25uZWN0ZWQgdG8gTW9uZ29EQlwiKVxuICAgICAgICApXG4gICAgICAgIFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNb25nb0RCIGNvbm5lY3Rpb24gZXJyb3I6XCIsIGVycm9yKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RNb25nb0RCOyJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3RNb25nb0RCIiwidXJpIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3QiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ0aGVuIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./libs/mongodb.js\n");

/***/ }),

/***/ "(api)/./models/register.js":
/*!****************************!*\
  !*** ./models/register.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst registerSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    username: {\n        type: String\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true,\n        validate: {\n            validator: (v)=>{\n            // You can use a regular expression or a library like validator.js to validate email format\n            // Return true if valid, false if not\n            },\n            message: \"Invalid email format\"\n        }\n    },\n    walletaddress: {\n        type: String\n    },\n    password: {\n        type: String\n    },\n    confirmpassword: {\n        type: String\n    }\n}, {\n    timestamps: true\n});\nconst registerInfo = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.RegisterInfo) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"RegisterInfo\", registerSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (registerInfo);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvcmVnaXN0ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGlCQUFpQixJQUFJRCx3REFBZSxDQUN4QztJQUNFRyxVQUFVO1FBQ1JDLE1BQU1DO0lBQ1I7SUFDQUMsT0FBTztRQUNMRixNQUFNQztRQUNORSxVQUFVLElBQUk7UUFDZEMsUUFBUSxJQUFJO1FBQ1pDLFVBQVU7WUFDUkMsV0FBVyxDQUFDQyxJQUFNO1lBQ2hCLDJGQUEyRjtZQUMzRixxQ0FBcUM7WUFDdkM7WUFDQUMsU0FBUztRQUNYO0lBQ0Y7SUFDQUMsZUFBZTtRQUNiVCxNQUFNQztJQUNSO0lBQ0FTLFVBQVU7UUFDUlYsTUFBTUM7SUFDUjtJQUNBVSxpQkFBaUI7UUFDZlgsTUFBTUM7SUFDUjtBQUNGLEdBQ0E7SUFDRVcsWUFBWSxJQUFJO0FBQ2xCO0FBR0YsTUFBTUMsZUFDSmpCLHFFQUE0QixJQUM1QkEscURBQWMsQ0FBQyxnQkFBZ0JDO0FBRWpDLGlFQUFlZ0IsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2h0bWwtbmV4dC10ZW1wbGF0aW5nLy4vbW9kZWxzL3JlZ2lzdGVyLmpzPzRiMDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCByZWdpc3RlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXG4gIHtcbiAgICB1c2VybmFtZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgIH0sXG4gICAgZW1haWw6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdW5pcXVlOiB0cnVlLFxuICAgICAgdmFsaWRhdGU6IHtcbiAgICAgICAgdmFsaWRhdG9yOiAodikgPT4ge1xuICAgICAgICAgIC8vIFlvdSBjYW4gdXNlIGEgcmVndWxhciBleHByZXNzaW9uIG9yIGEgbGlicmFyeSBsaWtlIHZhbGlkYXRvci5qcyB0byB2YWxpZGF0ZSBlbWFpbCBmb3JtYXRcbiAgICAgICAgICAvLyBSZXR1cm4gdHJ1ZSBpZiB2YWxpZCwgZmFsc2UgaWYgbm90XG4gICAgICAgIH0sXG4gICAgICAgIG1lc3NhZ2U6IFwiSW52YWxpZCBlbWFpbCBmb3JtYXRcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICB3YWxsZXRhZGRyZXNzOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgfSxcbiAgICBwYXNzd29yZDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgIH0sXG4gICAgY29uZmlybXBhc3N3b3JkOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHRpbWVzdGFtcHM6IHRydWUsXG4gIH1cbik7XG5cbmNvbnN0IHJlZ2lzdGVySW5mbyA9XG4gIG1vbmdvb3NlLm1vZGVscy5SZWdpc3RlckluZm8gfHxcbiAgbW9uZ29vc2UubW9kZWwoXCJSZWdpc3RlckluZm9cIiwgcmVnaXN0ZXJTY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlckluZm87XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJyZWdpc3RlclNjaGVtYSIsIlNjaGVtYSIsInVzZXJuYW1lIiwidHlwZSIsIlN0cmluZyIsImVtYWlsIiwicmVxdWlyZWQiLCJ1bmlxdWUiLCJ2YWxpZGF0ZSIsInZhbGlkYXRvciIsInYiLCJtZXNzYWdlIiwid2FsbGV0YWRkcmVzcyIsInBhc3N3b3JkIiwiY29uZmlybXBhc3N3b3JkIiwidGltZXN0YW1wcyIsInJlZ2lzdGVySW5mbyIsIm1vZGVscyIsIlJlZ2lzdGVySW5mbyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/register.js\n");

/***/ }),

/***/ "(api)/./pages/api/logging.js":
/*!******************************!*\
  !*** ./pages/api/logging.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/mongodb */ \"(api)/./libs/mongodb.js\");\n/* harmony import */ var _models_register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/register */ \"(api)/./models/register.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_3__);\n// pages/api/login.js\n\n\n\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const { email , password  } = req.body;\n        if (!email || !password) {\n            return res.status(400).json({\n                error: \"Email and password are required.\"\n            });\n        }\n        try {\n            await (0,_libs_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n            const user = await _models_register__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n                email\n            });\n            if (!user) {\n                return res.status(401).json({\n                    error: \"User not found.\"\n                });\n            }\n            const userEmail = email.toLowerCase();\n            const storedEmail = user.email.toLowerCase();\n            if (userEmail !== storedEmail) {\n                return res.status(401).json({\n                    error: \"Invalid credentials\"\n                });\n            }\n            const passwordMatch = await bcryptjs__WEBPACK_IMPORTED_MODULE_3___default().compare(password, user.password);\n            if (passwordMatch) {\n                const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({\n                    userId: user._id,\n                    email: user.email\n                }, process.env.JWT_SECRET, {\n                    expiresIn: \"1h\"\n                });\n                res.status(200).json({\n                    token\n                });\n            } else {\n                return res.status(401).json({\n                    error: \"Invalid password\"\n                });\n            }\n        } catch (error) {\n            console.error(\"Login error:\", error);\n            res.status(500).json({\n                error: \"Internal Server Error\"\n            });\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9nZ2luZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXFCO0FBQ1U7QUFDaUI7QUFDQztBQUNuQjtBQUVmLGVBQWVJLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLE1BQU0sRUFBRUMsTUFBSyxFQUFFQyxTQUFRLEVBQUUsR0FBR0osSUFBSUssSUFBSTtRQUNwQyxJQUFJLENBQUNGLFNBQVMsQ0FBQ0MsVUFBVTtZQUN2QixPQUFPSCxJQUNKSyxNQUFNLENBQUMsS0FDUEMsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQW1DO1FBQ3RELENBQUM7UUFDRCxJQUFJO1lBQ0YsTUFBTVoseURBQWNBO1lBQ3BCLE1BQU1hLE9BQU8sTUFBTVosZ0VBQW9CLENBQUM7Z0JBQUVNO1lBQU07WUFDaEQsSUFBSSxDQUFDTSxNQUFNO2dCQUNULE9BQU9SLElBQUlLLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7b0JBQUVDLE9BQU87Z0JBQWtCO1lBQ3pELENBQUM7WUFDRCxNQUFNRyxZQUFZUixNQUFNUyxXQUFXO1lBQ25DLE1BQU1DLGNBQWNKLEtBQUtOLEtBQUssQ0FBQ1MsV0FBVztZQUMxQyxJQUFJRCxjQUFjRSxhQUFhO2dCQUM3QixPQUFPWixJQUFJSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFQyxPQUFPO2dCQUFzQjtZQUM3RCxDQUFDO1lBQ0QsTUFBTU0sZ0JBQWdCLE1BQU1oQix1REFBYyxDQUFDTSxVQUFVSyxLQUFLTCxRQUFRO1lBQ2xFLElBQUlVLGVBQWU7Z0JBQ2pCLE1BQU1FLFFBQVFyQix3REFBUSxDQUNwQjtvQkFBRXVCLFFBQVFULEtBQUtVLEdBQUc7b0JBQUVoQixPQUFPTSxLQUFLTixLQUFLO2dCQUFDLEdBQ3RDaUIsUUFBUUMsR0FBRyxDQUFDQyxVQUFVLEVBQ3RCO29CQUNFQyxXQUFXO2dCQUNiO2dCQUVGdEIsSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRVM7Z0JBQU07WUFDL0IsT0FBTztnQkFDTCxPQUFPZixJQUFJSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFQyxPQUFPO2dCQUFtQjtZQUMxRCxDQUFDO1FBQ0gsRUFBRSxPQUFPQSxPQUFPO1lBQ2RnQixRQUFRaEIsS0FBSyxDQUFDLGdCQUFnQkE7WUFDOUJQLElBQUlLLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBd0I7UUFDeEQ7SUFDRixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2h0bWwtbmV4dC10ZW1wbGF0aW5nLy4vcGFnZXMvYXBpL2xvZ2dpbmcuanM/NWY4NCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9hcGkvbG9naW4uanNcbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xuaW1wb3J0IGNvbm5lY3RNb25nb0RCIGZyb20gXCIuLi8uLi9saWJzL21vbmdvZGJcIjtcbmltcG9ydCByZWdpc3RlckluZm8gZnJvbSBcIi4uLy4uL21vZGVscy9yZWdpc3RlclwiO1xuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XG4gICAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQpIHtcbiAgICAgIHJldHVybiByZXNcbiAgICAgICAgLnN0YXR1cyg0MDApXG4gICAgICAgIC5qc29uKHsgZXJyb3I6IFwiRW1haWwgYW5kIHBhc3N3b3JkIGFyZSByZXF1aXJlZC5cIiB9KTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGNvbm5lY3RNb25nb0RCKCk7XG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgcmVnaXN0ZXJJbmZvLmZpbmRPbmUoeyBlbWFpbCB9KTtcbiAgICAgIGlmICghdXNlcikge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBlcnJvcjogXCJVc2VyIG5vdCBmb3VuZC5cIiB9KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHVzZXJFbWFpbCA9IGVtYWlsLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjb25zdCBzdG9yZWRFbWFpbCA9IHVzZXIuZW1haWwudG9Mb3dlckNhc2UoKTtcbiAgICAgIGlmICh1c2VyRW1haWwgIT09IHN0b3JlZEVtYWlsKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IGVycm9yOiBcIkludmFsaWQgY3JlZGVudGlhbHNcIiB9KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHBhc3N3b3JkTWF0Y2ggPSBhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgdXNlci5wYXNzd29yZCk7XG4gICAgICBpZiAocGFzc3dvcmRNYXRjaCkge1xuICAgICAgICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKFxuICAgICAgICAgIHsgdXNlcklkOiB1c2VyLl9pZCwgZW1haWw6IHVzZXIuZW1haWwgfSxcbiAgICAgICAgICBwcm9jZXNzLmVudi5KV1RfU0VDUkVULFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGV4cGlyZXNJbjogXCIxaFwiLFxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyB0b2tlbiB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IGVycm9yOiBcIkludmFsaWQgcGFzc3dvcmRcIiB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkxvZ2luIGVycm9yOlwiLCBlcnJvcik7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBcIkludGVybmFsIFNlcnZlciBFcnJvclwiIH0pO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbImp3dCIsImNvbm5lY3RNb25nb0RCIiwicmVnaXN0ZXJJbmZvIiwiYmNyeXB0IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImVtYWlsIiwicGFzc3dvcmQiLCJib2R5Iiwic3RhdHVzIiwianNvbiIsImVycm9yIiwidXNlciIsImZpbmRPbmUiLCJ1c2VyRW1haWwiLCJ0b0xvd2VyQ2FzZSIsInN0b3JlZEVtYWlsIiwicGFzc3dvcmRNYXRjaCIsImNvbXBhcmUiLCJ0b2tlbiIsInNpZ24iLCJ1c2VySWQiLCJfaWQiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsImV4cGlyZXNJbiIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/logging.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/logging.js"));
module.exports = __webpack_exports__;

})();