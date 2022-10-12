"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.signinSchema = exports.signupSchema = void 0;
var joi_1 = __importDefault(require("joi"));
exports.signupSchema = joi_1["default"].object({
    name: joi_1["default"].string().min(3).required(),
    email: joi_1["default"].string().email().required(),
    profilePic: joi_1["default"].string().uri(),
    password: joi_1["default"].string().min(6).max(30).required()
});
exports.signinSchema = joi_1["default"].object({
    password: joi_1["default"].string().min(6).max(30).required(),
    email: joi_1["default"].string().email().required()
});
