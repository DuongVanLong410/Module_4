"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promotionService_1 = __importDefault(require("../services/promotionService"));
class PromotionController {
    constructor() { }
    async getAll(req, res) {
        let allPromo = await promotionService_1.default.getAll();
        res.status(200).json(allPromo);
    }
    async save(req, res) {
        await promotionService_1.default.add(req.body);
        res.status(200).json({ message: "them oke" });
    }
    async remove(req, res) {
        await promotionService_1.default.remove(req.query.id);
        res.status(200).json({ message: "xoa oke" });
    }
    async getById(req, res) {
        let sale = await promotionService_1.default.getById(req.query.id);
        res.status(200).json(sale);
    }
    async update(req, res) {
        await promotionService_1.default.update(req.query.id, req.body);
        res.status(200).json({ message: "úp đết bu'" });
    }
}
exports.default = new PromotionController();
//# sourceMappingURL=promotionController.js.map