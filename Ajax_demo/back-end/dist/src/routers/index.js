"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productRouter_1 = __importDefault(require("./productRouter"));
const promotionRouter_1 = __importDefault(require("./promotionRouter"));
const router = (0, express_1.Router)();
router.use('/', productRouter_1.default);
router.use('/promotion', promotionRouter_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map