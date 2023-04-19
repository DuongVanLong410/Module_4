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
            res.render('index', { products: listProduct });
        };
        this.showFormAdd = async (req, res) => {
            let listCategory = await this.categoryService.getAll();
            res.render('products/create', { categories: listCategory });
        };
        this.addProduct = (req, res) => {
            this.productService.add(req.body);
            res.redirect(301, '/products');
        };
        this.showProductEdit = (req, res) => {
            const id = req.params.id;
            let product = productService_1.default.findById(id);
            res.render('products/edit', { product: product });
        };
        this.updateProductEdit = (req, res) => {
            const id = req.params.id;
            const product = req.body;
            productService_1.default.update(id, product);
            res.redirect(301, '/products');
        };
        this.showDeleteProduct = (req, res) => {
            res.render('products/delete');
        };
        this.deleteProduct = async (req, res) => {
            const id = req.params.id;
            await productService_1.default.delete(id);
            res.redirect(301, '/products');
        };
        this.productService = productService_1.default;
        this.categoryService = CategoryService_1.default;
    }
}
exports.default = new ProductController();
//# sourceMappingURL=productController.js.map