"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("../entity/products");
const dataSource_1 = __importDefault(require("../dataSource"));
class productService {
    constructor() {
        this.productRepository = dataSource_1.default.getRepository(products_1.Product);
    }
    async getAll() {
        let products = await this.productRepository.find({
            relations: {
                category: true,
            },
        });
        return products;
    }
    async create(product) {
        await this.productRepository.save(product);
    }
    async update(id, newProduct) {
        await this.productRepository.update(id, newProduct);
    }
    async findOne(id) {
        const product = await this.productRepository.findOne({
            relations: ["category"],
            where: { id: id },
        });
        return product;
    }
    async remove(id) {
        await this.productRepository.delete(id);
    }
}
exports.default = new productService();
//# sourceMappingURL=productService.js.map