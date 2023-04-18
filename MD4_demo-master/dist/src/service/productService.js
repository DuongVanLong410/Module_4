"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../entity/product");
class ProductService {
    constructor() {
        this.getAll = async () => {
            let listProduct = await product_1.Product.find();
            return listProduct;
        };
        this.add = async (product) => {
            await product_1.Product.create(product);
        };
        this.findById = async (id) => {
            let listProduct = await product_1.Product.find();
            for (let i = 0; listProduct.length > i; i++) {
                if (listProduct[i]._id == id) {
                    return listProduct[id];
                }
            }
        };
        this.update = async (id, product) => {
            await product_1.Product.updateOne({ _id: id }, {
                $set: {
                    name: product.name,
                    price: product.price,
                    quantity: product.quantity,
                    image: product.image
                }
            });
        };
        this.delete = async (id) => {
            return product_1.Product.deleteOne({ _id: id });
        };
    }
}
exports.default = new ProductService();
//# sourceMappingURL=productService.js.map