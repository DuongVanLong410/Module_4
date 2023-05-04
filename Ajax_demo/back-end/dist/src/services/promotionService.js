"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("./../entity/products");
const promotion_1 = require("./../entity/promotion");
const dataSource_1 = __importDefault(require("../dataSource"));
class PromotionService {
    constructor() {
        this.promotionRepository = dataSource_1.default.getRepository(promotion_1.Promotion);
        this.productRepository = dataSource_1.default.getRepository(products_1.Product);
    }
    async getAll() {
        return (await this.promotionRepository.find({
            relations: {
                products: true,
            },
        }));
    }
    async remove(id) {
        await this.promotionRepository.delete({ id });
    }
    async add(promotion) {
        let productId = promotion.products;
        let products = await this.productRepository
            .createQueryBuilder("product")
            .where("product.id IN (:...productId)", { productId })
            .getMany();
        promotion.products = products;
        await this.promotionRepository.save(promotion);
    }
    async getById(id) {
        return (await this.promotionRepository.findOne({
            relations: {
                products: true,
            },
            where: { id: id },
        }));
    }
    async update(id, newSale) {
        await this.promotionRepository.update(id, {
            name: newSale.name, discount: newSale.discount
        });
    }
}
exports.default = new PromotionService();
//# sourceMappingURL=promotionService.js.map