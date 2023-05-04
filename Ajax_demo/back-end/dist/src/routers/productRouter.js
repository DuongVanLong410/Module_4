"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productController_1 = __importDefault(require("../controllers/productController"));
let productRouter = express_1.default.Router();
productRouter.get('/listProducts', productController_1.default.getAllProduct);
productRouter.post('/create', productController_1.default.create);
productRouter.post('/update', productController_1.default.update);
productRouter.get('/update', productController_1.default.getProduct);
productRouter.get('/delete', productController_1.default.remove);
exports.default = productRouter;
//# sourceMappingURL=productRouter.js.map