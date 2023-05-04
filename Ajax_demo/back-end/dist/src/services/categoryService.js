"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const category_1 = require("./../entity/category");
const dataSource_1 = __importDefault(require("../dataSource"));
class CategoryService {
    constructor() {
        this.categoryRepository = dataSource_1.default.getRepository(category_1.Category);
    }
    async getAll() {
        let categories = await this.categoryRepository.find();
        return categories;
    }
}
exports.default = new CategoryService();
//# sourceMappingURL=categoryService.js.map