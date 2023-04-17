"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productService_1 = __importDefault(require("../service/productService"));
class ProductController {
    constructor() {
        this.findAll = (req, res) => {
            let listProduct = this.productService.getAll();
            res.render('index', { products: listProduct });
        };
        this.showFormAdd = (req, res) => {
            res.render('products/create');
        };
        this.addProduct = (req, res) => {
            this.productService.add(req.body);
            res.redirect(301, '/products');
        };
        this.productService = productService_1.default;
    }
}
exports.default = new ProductController();
//# sourceMappingURL=productController.js.map