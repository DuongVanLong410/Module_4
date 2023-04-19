"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = __importDefault(require("../controller/productController"));
const productRouter = (0, express_1.Router)();
productRouter.get('/', productController_1.default.findAll);
productRouter.get('/create', productController_1.default.showFormAdd);
productRouter.post('/create', productController_1.default.addProduct);
productRouter.get('/edit/:id', productController_1.default.showProductEdit);
productRouter.post('/edit/:id', productController_1.default.updateProductEdit);
productRouter.get('/delete/:id', productController_1.default.showDeleteProduct);
productRouter.post('/delete/:id', productController_1.default.deleteProduct);
exports.default = productRouter;
//# sourceMappingURL=product-router.js.map