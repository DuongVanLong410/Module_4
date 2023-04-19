"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const category_1 = require("../entity/category");
class CategoryService {
    constructor() {
        this.getAll = async () => {
            let listProduct = await category_1.Category.find();
            return listProduct;
        };
    }
}
exports.default = new CategoryService();
//# sourceMappingURL=CategoryService.js.map