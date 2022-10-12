"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var citiesRoute_1 = __importDefault(require("./citiesRoute"));
var professionalsRoute_1 = __importDefault(require("./professionalsRoute"));
var servicesRoute_1 = __importDefault(require("./servicesRoute"));
var userRoute_1 = __importDefault(require("./userRoute"));
var router = (0, express_1.Router)();
router.use(userRoute_1["default"]);
router.use(citiesRoute_1["default"]);
router.use(servicesRoute_1["default"]);
router.use(professionalsRoute_1["default"]);
exports["default"] = router;
