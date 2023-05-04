"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productService_1 = __importDefault(require("../services/productService"));
class ProductController {
    constructor() {
    }
    async getAllProduct(req, res) {
        let products = await productService_1.default.getAll();
        res.status(200).json(products);
    }
    async create(req, res) {
        let product = req.body;
        await productService_1.default.create(product);
        res.status(200).json({ message: "cờ ri ết bu'" });
    }
    async update(req, res) {
        let id = req.query.id;
        let newProduct = req.body;
        await productService_1.default.update(id, newProduct);
        res.status(200).json({ message: "úp đết bu'" });
    }
    async getProduct(req, res) {
        let id = req.query.id;
        let product = await productService_1.default.findOne(id);
        res.status(200).json(product);
    }
    async remove(req, res) {
        await productService_1.default.remove(req.query.id);
        res.status(200).json({ message: " đe le te bu'" });
    }
}
exports.default = new ProductController();
//# sourceMappingURL=productController.js.map