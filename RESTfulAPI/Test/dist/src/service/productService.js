"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../enitity/product");
const data_source_1 = require("../data-source");
class ProductService {
    constructor() {
        this.getAll = async () => {
            let products = await this.productRepository.find({
                relations: {
                    category: true,
                }
            });
            return products;
        };
        this.add = async (product) => {
            console.log(product);
            await this.productRepository.save(product);
        };
        this.productRepository = data_source_1.AppDataSource.getRepository(product_1.Product);
    }
    async update(id, newProduct) {
        await this.productRepository.update(id, newProduct);
    }
    async remove(id) {
        await this.productRepository.delete(id);
    }
    async findOne(id) {
        const product = await this.productRepository.findOne({
            relations: ["category"],
            where: { id: id },
        });
        return product;
    }
}
exports.default = new ProductService();
//# sourceMappingURL=productService.js.map