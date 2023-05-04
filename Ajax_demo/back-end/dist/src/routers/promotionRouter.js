"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const promotionController_1 = __importDefault(require("../controllers/promotionController"));
let promotionRouter = express_1.default.Router();
promotionRouter.get('/', promotionController_1.default.getAll);
promotionRouter.get('/sale', promotionController_1.default.getById);
promotionRouter.post('/', promotionController_1.default.save);
promotionRouter.delete('/', promotionController_1.default.remove);
promotionRouter.patch('/', promotionController_1.default.update);
exports.default = promotionRouter;
//# sourceMappingURL=promotionRouter.js.map