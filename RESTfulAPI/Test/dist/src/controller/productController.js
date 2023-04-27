"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productService_1 = __importDefault(require("../service/productService"));
const CategoryService_1 = __importDefault(require("../service/CategoryService"));
class ProductController {
    constructor() {
        this.findAll = async (req, res) => {
            let listProduct = await this.productService.getAll();
            res.status(200).json(listProduct);
        };
        this.addProduct = async (req, res) => {
            await this.productService.add(req.body);
            if (!req.body.name) {
                res.status(400).json({
                    message: 'name missing'
                });
                res.end();
            }
            else {
                res.status(201).json({
                    message: 'OK'
                });
            }
        };
        this.productService = productService_1.default;
        this.categoryService = CategoryService_1.default;
    }
    async update(req, res) {
        let id = req.params.id;
        console.log(id);
        let newProduct = req.body;
        await productService_1.default.update(id, newProduct);
        res.status(200).json({ message: "updated successfully" });
    }
    async remove(req, res) {
        await productService_1.default.remove(req.params.id);
        res.status(200).json({ message: "deleted successfully" });
    }
    async getProduct(req, res) {
        let id = req.params.id;
        let product = await productService_1.default.findOne(id);
        res.status(200).json(product);
    }
}
exports.default = new ProductController();
//# sourceMappingURL=productController.js.map